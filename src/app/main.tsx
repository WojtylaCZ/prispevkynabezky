import React from "react";
import { Navbar, Container, Image, Stack } from "react-bootstrap";
import { DistrictSection } from "./district";
import Skier from "../assets/img/skier2.png";

import { data } from "../assets/data/data";

export const Main = () => {
  const districtsList = data.map((district, id) => (
    <DistrictSection
      key={id}
      name={district.name}
      trailparks={district.trailparks}
      isFirst={id === 0}
    />
  ));

  return (
    <>
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
                  // fontFamily: "Kaushan Script",
                  color: "white",
                  margin: "0px",
                }}
              >
                PříspěvkyNaBěžky.cz
              </h3>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div
          style={{
            margin: "auto",
            maxWidth: "1400px",
            height: "250px",
            position: "relative",
            width: "100%",
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92.61%), url("https://upload.wikimedia.org/wikipedia/commons/2/28/Skate_skiing_track.jpg")`,
            // "Tiia Monto, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0, via Wikimedia Commons",
            backgroundSize: "cover",
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
            Příspěvky na bežkařské tratě jednoduše
          </h1>
        </div>
      </>
      <Stack
        gap={4}
        style={{
          alignItems: "center",
          width: "95%",
          margin: "auto",
          maxWidth: "690px",
          marginTop: "1em",
        }}
      >
        {/* <hr style={{ width: "30px", color: "#f7b500" }} /> */}

        <span
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          Běžkařské trasy a stopy se samy neupraví, spolky na úpravu tras
          fungují ze státních, ale i občanských příspěvků. Tento web vznikl pro
          zjednodučení příspívání.
          <br />
          <br />
          Jsou tu pouze areály, u kterých jsem našel číslo účtu nebo aktivní
          Facebook stránku. Zejména například v Beskydech je několik okruhů,
          které žádnou sbírku nemají ani žádné další informace.
        </span>

        <Stack gap={5}>{districtsList}</Stack>

        <Image
          src={Skier}
          style={{
            maxWidth: "300px",
            width: "100%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              color: "#0a3383",
            }}
          >
            Je něco špatně nebo něco chybí?
          </span>
          <span
            style={{
              fontSize: "small",
              margin: "auto",
            }}
          >
            <a
              href={"https://www.facebook.com/WojtylaCZ/"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Dejte vědet! ✍️
            </a>
          </span>
        </div>
      </Stack>
      <div
        style={{
          fontSize: "small",
          color: "grey",
          width: "100%",
          display: "flex",
          height: "48px",
          justifyContent: "center",
          backgroundColor: "#0a3383",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white" }}>2023, Vojtech Uhlir</span>
      </div>
    </>
  );
};
