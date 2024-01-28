import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fallbackLocale, supportedLocales } from "./i18n";
import { sendAnalyticsEvent, AnalyticsEvents } from "./analytics";

export const SelectLocaleDropdown = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const { locale: localeParam } = useParams();
  const location = useLocation();

  const [locale, setLocale] = useState(localeParam || fallbackLocale);

  const handleSelectLocale = (locale: string | null) => {
    const newLocale = locale || fallbackLocale;

    sendAnalyticsEvent(AnalyticsEvents.LanguageChanged, { newLocale: newLocale });

    i18n.changeLanguage(newLocale);
    setLocale(newLocale);

    const urlSegments = location.pathname.split("/");

    if (supportedLocales.includes(urlSegments[1])) {
      urlSegments[1] = newLocale;
    } else {
      urlSegments.shift();
      urlSegments.unshift("", newLocale);
    }

    navigate(urlSegments.join("/"));
  };

  return (
    <Dropdown onSelect={handleSelectLocale}>
      <Dropdown.Toggle className="bg-transparent border-0" variant="secondary">
        CS/EN
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: "unset", alignContent: "baseline" }}>
        <Dropdown.Item eventKey="cs" active={"cs" === locale}>
          Česky
        </Dropdown.Item>
        <Dropdown.Item eventKey="en" active={"en" === locale}>
          English
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
