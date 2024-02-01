import { Container, Image, Navbar, Stack } from "react-bootstrap";
import Skier from "../assets/img/skier2.png";
import { useTranslation } from "react-i18next";
import { LineSeparator } from "./line-separator";

export const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <style type="text/css">
        {`
          .navbar-custom {
            background-color: #0a3383;
          }
          `}
      </style>

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
      </Navbar>

      <div
        style={{
          margin: "auto",
          maxWidth: "1400px",
          height: "200px",
          position: "relative",
          width: "100%",
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92.61%), url("https://upload.wikimedia.org/wikipedia/commons/2/28/Skate_skiing_track.jpg")`,
          // "Tiia Monto, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0, via Wikimedia Commons",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
        }}
      >
        <h1
          style={{
            color: "#0a3383",
            textAlign: "center",
            fontFamily: "Kaushan Script",
            zIndex: "10",
            position: "absolute",
            left: "0px",
            bottom: "30%",
            right: "0px",
            fontSize: "calc(1.975rem + 1.3vw)",
          }}
        >
          Oops!
        </h1>
      </div>

      <Stack
        gap={4}
        style={{
          alignItems: "center",
          width: "95%",
          margin: "auto",
          maxWidth: "690px",
          marginBottom: "16px",
          marginTop: "16px",
        }}
      >
        <span>{t("titles.error")}</span>
        <LineSeparator />

        <a href="/">{t("titles.jumpHome")}</a>

        <Image
          src={Skier}
          style={{
            maxWidth: "60%",
            width: "100%",
            opacity: "60%",
          }}
        />
      </Stack>
    </>
  );
};
