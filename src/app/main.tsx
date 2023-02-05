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
              <span
                style={{
                  fontSize: "1.5em",
                  fontFamily: "Kaushan Script",
                  color: "white",
                }}
              >
                Prispevky Na Bezky .cz
              </span>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div
          style={{
            margin: "auto",
            maxWidth: "1400px",
          }}
        >
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/2/28/Skate_skiing_track.jpg"
            }
            alt="Tiia Monto, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0, via Wikimedia Commons"
            style={{
              maxHeight: "500px",
              width: "100%",
            }}
          />
        </div>
      </>
      <Stack
        gap={3}
        style={{
          alignItems: "center",
          width: "95%",
          margin: "auto",
          maxWidth: "690px",
          marginTop: "1em",
        }}
      >
        <h1
          style={{
            fontSize: "2.5em",
            // fontWeight: "bolder",
            margin: "auto",
            color: "#0a3383",
            textAlign: "center",
            fontFamily: "Kaushan Script",
          }}
        >
          Příspěvky na bežkařské tratě jednoduše
        </h1>

        <span
          style={{
            margin: "auto",

            textAlign: "center",
          }}
        >
          Běžkařské trasy a stopy se sami neupraví, spolky na úpravu tras
          fungují ze státních, ale i občanských příspěvků. Tento web vznikl pro
          zjednodučení příspívání.
        </span>
        {districtsList}
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
            marginBottom: "1em",
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
          height: "4em",
          justifyContent: "center",
          backgroundColor: "#0a3383",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white", fontFamily: "Kaushan Script" }}>
          2023, Vojtech Uhlir
        </span>
      </div>
    </>
  );
};
