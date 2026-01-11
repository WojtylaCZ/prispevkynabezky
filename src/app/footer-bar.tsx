import { Navbar, Container } from "react-bootstrap";

export const FooterBar = ({ fixed }: { fixed?: "bottom" }) => {
  return (
    <Navbar fixed={fixed} variant="dark" style={{ backgroundColor: "#0a3383" }}>
      <Container className="d-flex justify-content-center" style={{ maxWidth: "750px" }}>
        <Navbar.Brand>
          <span style={{ color: "white", fontSize: "small", textAlign: "center" }}>
            2026, <a href="https://www.linkedin.com/in/vojtechuhlir/" target="_blank" rel="noopener noreferrer">Vojtěch Uhlíř</a>
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
