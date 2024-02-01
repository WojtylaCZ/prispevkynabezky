import { Navbar, Container, Nav } from "react-bootstrap";
import { SelectLocaleDropdown } from "./select-locale-dropdown";
import { AnalyticsEvents, sendAnalyticsEvent } from "./analytics";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

<Navbar variant="custom" sticky="top">
  <Container
    style={{
      maxWidth: "1080px",
    }}
  >
    <Navbar.Brand>
      <h3
        style={{
          margin: "0px",
        }}
      >
        <a style={{ color: "white", textDecoration: "none" }} href="/">
          PříspěvkyNaBěžky.cz
        </a>
      </h3>
    </Navbar.Brand>
  </Container>
</Navbar>;

export const HeaderBar = () => {
  const { t } = useTranslation();

  const { locale: localeParam } = useParams();

  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="sm"
      collapseOnSelect
      style={{ backgroundColor: "#0a3383" }}
    >
      <Container style={{ maxWidth: "850px" }}>
        <Navbar.Brand
          href={`/${localeParam ? localeParam : ""}`}
          onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuBrandClicked, {})}
        >
          <span
            style={{
              fontFamily: "Kaushan Script",
              color: "white",
              fontSize: "larger",
            }}
          >
            PříspěvkyNaBěžky.cz
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="border-secondary" aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" justify>
            {/* bootstrap 5: margin-start: auto */}
            <Nav.Link
              className="mx-1 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/#oblasti") : "#oblasti"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuTrailparksClicked, {})}
            >
              {t("menu.districts")}
            </Nav.Link>
            <Nav.Link
              className="mx-2 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/jak-prispet") : "jak-prispet"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuDonateClicked, {})}
            >
              {t("menu.donate")}
            </Nav.Link>
            <Nav.Link
              className="mx-2 text-light text-nowrap"
              href={`/${localeParam ? localeParam.concat("/o-webu") : "o-webu"}`}
              onClick={() => sendAnalyticsEvent(AnalyticsEvents.MenuAboutClicked, {})}
            >
              {t("menu.about")}
            </Nav.Link>
            <Nav.Item style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SelectLocaleDropdown />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
