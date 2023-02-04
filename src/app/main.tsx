import React from "react";
import { Navbar, Container, Image, Stack } from "react-bootstrap";
import { DistrictSection } from "./district";
import Track from "../assets/img/track4.jpeg";
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
          <Container>
            <Navbar.Brand
              style={{
                fontFamily: "Kaushan Script",
                color: "white",
              }}
            >
              PrispevkyNaBezky.cz
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div
          style={{
            margin: "auto",
            maxWidth: "1300px",
          }}
        >
          <Image
            src={Track}
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
          maxWidth: "700px",
          marginTop: "1em",
        }}
      >
        <span
          style={{
            fontSize: "2.5em",
            fontWeight: "bolder",
            margin: "auto",
            color: "#0a3383",
            textAlign: "center",
          }}
        >
          Příspěvky na tratě jednoduše
        </span>

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
