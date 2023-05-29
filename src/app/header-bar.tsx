import { Navbar, Container } from "react-bootstrap";
import { SelectLocaleDropdown } from "./select-locale-dropdown";

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
  return (
    <>
      <style type="text/css">
        {`
        .navbar-custom {
          background-color: #0a3383;
        }
        `}
      </style>

      <Navbar variant="custom">
        <Container
          style={{
            maxWidth: "1080px",
          }}
        >
          <Navbar.Brand>
            <h3
              style={{
                // fontFamily: "Kaushan Script",
                color: "white",
                margin: "0px",
              }}
            >
              PříspěvkyNaBěžky.cz
            </h3>
          </Navbar.Brand>

          <SelectLocaleDropdown />
        </Container>
      </Navbar>
    </>
  );
};
