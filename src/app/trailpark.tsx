import React, { useState } from "react";
import { Col, Collapse, Container, Image, Row, Stack } from "react-bootstrap";
import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronRightIcon } from "../assets/icons/chevronRight";
import { ChevronUpIcon } from "../assets/icons/chevronUp";

import FacebookIcon from "../assets/icons/facebook.svg";

export type Trailpark = {
  name: string;
  qrImage: string | null;
  bankAccountNumber: string | null;
  transparentBankAccountUrl: string | null;
  url: string | null;
  facebookPageUrl: string | null;
  operator: string;
  checkedAt: string;
};

export const TrailparkCard = ({
  trailpark,
  isFirst,
}: {
  trailpark: Trailpark;
  isFirst: boolean;
}) => {
  const [open, setOpen] = useState(isFirst);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "0px",
        boxShadow: "0 0 20px 0 rgba(29, 17, 86, 0.12)",
        padding: "8px",
      }}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      <div
        style={{
          display: "flex",
          paddingLeft: "16px",
          paddingRight: "16px",

          alignItems: "center",
          cursor: "pointer",
          justifyContent: "space-between",
        }}
        onClick={() => setOpen(!open)}
      >
        <span style={{ marginTop: "0.8em" }}>
          <h3
            style={{
              fontSize: "1.5em",
            }}
          >
            {trailpark.name}
          </h3>
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h6
            style={{
              fontSize: "smaller",
              paddingRight: "0.6em",
              marginBottom: "-0.2em",
              width: "95px",
              textAlign: "right",
            }}
          >
            {open ? "Skrýt detail" : "Zobrazit detail"}
          </h6>

          <div style={{ width: "0.6em" }}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <hr style={{ marginTop: "0.4em" }} />
          <Container>
            <Row>
              <Col md style={{ marginBottom: "0.5em" }}>
                <h5 style={{ fontWeight: "bold" }}>QR kód pro platbu:</h5>

                <div style={{}}>
                  {trailpark.qrImage ? (
                    <Image src={trailpark.qrImage} thumbnail />
                  ) : (
                    "❌"
                  )}
                </div>
              </Col>
              <Col sm style={{ marginBottom: "0.5em" }}>
                <div>
                  <h5 style={{ fontWeight: "bold" }}>Číslo účtu:</h5>
                  <h6
                    style={{
                      fontSize: "large",
                      color: "#000000",
                      fontWeight: "bold",
                    }}
                  >
                    {trailpark.bankAccountNumber || "❌"}
                  </h6>
                </div>

                {trailpark.transparentBankAccountUrl && (
                  <div style={{ marginTop: "12px" }}>
                    <h6 style={{}}>
                      <a
                        href={trailpark.transparentBankAccountUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#000000" }}
                      >
                        Transparentní účet ↗️
                      </a>
                    </h6>
                  </div>
                )}
              </Col>

              <Col sm style={{ marginBottom: "0.5em" }}>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack gap={3}>
                    <div>
                      <h5 style={{ fontWeight: "bold" }}>Provozovatel:</h5>
                      <h6 style={{ color: "#000000" }}>{trailpark.operator}</h6>
                    </div>

                    {trailpark.url && (
                      <div>
                        <h5 style={{ fontWeight: "bold" }}>Web:</h5>
                        <h6 style={{}}>
                          <a
                            href={trailpark.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "#000000" }}
                          >
                            {trailpark.name} ↗️
                          </a>
                        </h6>
                      </div>
                    )}
                    {trailpark.facebookPageUrl && (
                      <a
                        href={trailpark.facebookPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <h5 style={{ fontWeight: "bold" }}>Facebook: </h5>
                        <Image src={FacebookIcon} />
                      </a>
                    )}
                    <div>{/* padding */}</div>
                  </Stack>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "row-reverse",
                      alignSelf: "flex-end",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "x-small",
                        color: "grey",
                      }}
                    >
                      Naposledy aktualizováno {trailpark.checkedAt}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};
