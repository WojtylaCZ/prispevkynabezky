import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { fallbackLocale } from "./i18n";

export const SelectLocaleDropdown = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const { locale: localeParam } = useParams();

  const [locale, setLocale] = useState(localeParam || fallbackLocale);

  const handleSelectLocale = (locale: string | null) => {
    const newLocale = locale || fallbackLocale;
    i18n.changeLanguage(newLocale);
    setLocale(newLocale);
    navigate(`/${newLocale}`);
  };

  return (
    <>
      <style type="text/css">
        {`
          #language-select {
            background-color: transparent;
          }
          #language-menu {
            min-width: unset;
          }
          `}
      </style>
      <Dropdown onSelect={handleSelectLocale}>
        <Dropdown.Toggle id="language-select" variant="secondary">
          CS/EN
        </Dropdown.Toggle>

        <Dropdown.Menu id="language-menu">
          <Dropdown.Item eventKey="cs" active={"cs" === locale}>
            Česky
          </Dropdown.Item>
          <Dropdown.Item eventKey="en" active={"en" === locale}>
            English
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
