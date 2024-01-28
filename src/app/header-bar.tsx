import { Navbar, Container, Nav } from "react-bootstrap";
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
    <Navbar
      sticky="top"
      variant="dark"
      expand="sm"
      collapseOnSelect
      style={{ backgroundColor: "#0a3383" }}
    >
      <Container style={{ maxWidth: "750px" }}>
        <Navbar.Brand href="#">
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
            <Nav.Link className="mx-1 text-light text-nowrap" href="#oblasti">
              Oblasti a tratě
            </Nav.Link>
            {/* <Nav.Link className="mx-2 text-light" href="#info">
              Info
            </Nav.Link>
            <Nav.Link className="mx-2 text-light" href="#link">
              Podpořte
            </Nav.Link> */}
            <Nav.Item style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SelectLocaleDropdown />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};