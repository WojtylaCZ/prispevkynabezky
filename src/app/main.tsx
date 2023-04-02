import React, { useEffect } from "react";
import { Navbar, Container, Image, Stack } from "react-bootstrap";
import { DistrictSection } from "./district";
import Skier from "../assets/img/skier2.png";

import { data } from "../assets/data/data-new";
import { useNavigate, useParams } from "react-router-dom";

export const Main = () => {
  const { trailparkSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const slugs = data.flatMap((district) => district.trailparks).map((t) => t.slug);
    if (trailparkSlug && !slugs.includes(trailparkSlug)) {
      navigate("/", { replace: true });
    }
  }, [navigate, trailparkSlug]);

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
            height: "300px",
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
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span>
            Obout si běžky a vyrazit bílou stopou skoro nic nestojí. Údržba tratí ale ano.
          </span>

          <span>
            Běžkařské trasy a stopy se samy neupraví. Udržují je různé kluby, spolky nebo organizace
            za pomocí občanských sbírek a státních příspěvků.
          </span>
          <br />
          <span>
            Projekt PříspěvkyNaBěžky.cz vznikl pro zjednodušení přispívání, aby na jednom místě byl
            seznam jednotlivých organizací s platebními údaji.
          </span>
          <hr
            style={{
              width: "100px",
              color: "#f7b500",
              border: 0,
              borderTop: "1px solid",
              opacity: "90%",
            }}
          />
        </div>

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
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Kaushan Script",
              color: "#f7b500",
              marginBottom: "24px",
              fontSize: "calc(1.775rem + 1.1vw)",
            }}
          >
            Kontakt
          </h2>
          <span>
            Tento dobročinný web vytvořil{" "}
            <a
              href={"https://www.facebook.com/WojtylaCZ/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vojtěch Uhlíř
            </a>
            , sportovec, nadšenec na bežky, programátor.
          </span>
          <br />
          <span>
            Jsou tu pouze areály, u kterých jsem našel číslo účtu nebo aktivní Facebook stránku.
          </span>
        </div>
        <div
          style={{
            color: "#0a3383",
            textAlign: "center",
          }}
        >
          <span>Je něco špatně nebo něco chybí?</span>
          <br />
          <a href={"https://www.facebook.com/WojtylaCZ/"} target="_blank" rel="noopener noreferrer">
            Napište a dejte mi vědet! ✍️
          </a>
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
