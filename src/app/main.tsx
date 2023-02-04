import React from "react";
import { Navbar, Container, Image, Stack } from "react-bootstrap";
import { DistrictSection } from "./district";
import Track from "../assets/img/track3.jpeg";
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
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand
            style={{
              fontFamily: "Kaushan Script",
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

      <Stack
        gap={3}
        style={{
          alignItems: "center",
          width: "95%",
          margin: "auto",
          maxWidth: "700px",
        }}
      >
        <span
          style={{
            fontSize: "2em",
            fontWeight: "bolder",
            margin: "auto",
          }}
        >
          Přispějte jednoduše a rychle
        </span>

        <span>
          Běžkařské trasy a stopy se sami neupraví, spolky na úpravu tras
          fungující ze státních, ale i občanských příspěvků. Tento web vznikl
          pro zjednodučení příspívání.
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
          backgroundColor: "black",
          alignItems: "center",
          fontFamily: "Kaushan Script",
        }}
      >
        2023, Vojtěch Uhlir
      </div>
    </>
  );
};
