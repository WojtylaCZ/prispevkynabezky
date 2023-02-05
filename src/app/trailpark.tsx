import React, { useState } from "react";
import { Col, Collapse, Container, Image, Row } from "react-bootstrap";
import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronRightIcon } from "../assets/icons/chevronRight";
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
        borderRadius: "7px",
        boxShadow: "0 0 20px 0 rgba(29, 17, 86, 0.12)",
        padding: "8px",
        fontSize: "0.9em",
      }}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      <div
        style={{
          display: "flex",
          paddingLeft: "0.6em",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
      >
        <div style={{ width: "0.6em" }}>
          {open ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </div>

        <span style={{ paddingLeft: "1em", marginTop: "0.8em" }}>
          <h3>{trailpark.name}</h3>
        </span>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <hr style={{ marginTop: "0.4em" }} />
          <Container>
            <Row>
              <Col md style={{ marginBottom: "0.5em" }}>
                <span style={{ fontWeight: "bold" }}>QR kód pro platbu:</span>

                <div style={{ marginLeft: "0.3em" }}>
                  {trailpark.qrImage ? (
                    <Image src={trailpark.qrImage} thumbnail />
                  ) : (
                    "Není"
                  )}
                </div>
              </Col>
              <Col sm style={{ marginBottom: "0.5em" }}>
                <span style={{ fontWeight: "bold" }}>Provozovatel:</span>

                <div style={{ marginLeft: "0.3em" }}>{trailpark.operator}</div>

                <div style={{ marginTop: "1em" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Číslo bankovního účtu:
                  </span>
                  <div style={{ marginLeft: "0.3em" }}>
                    {trailpark.bankAccountNumber || "Není"}
                  </div>
                </div>

                {trailpark.transparentBankAccountUrl && (
                  <div style={{ marginTop: "1em" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Odkaz na transparentní účet:
                    </span>
                    <div style={{ margin: "0.3em" }}>
                      <a
                        href={trailpark.transparentBankAccountUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        🌐 web
                      </a>
                    </div>
                  </div>
                )}
              </Col>

              <Col sm style={{ marginBottom: "0.5em" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Web:</span>
                  <div style={{ marginLeft: "0.3em" }}>
                    {trailpark.url ? (
                      <a
                        href={trailpark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        🌐 {trailpark.name}
                      </a>
                    ) : (
                      "❌"
                    )}
                  </div>

                  <div style={{ marginTop: "1em" }}>
                    <span style={{ fontWeight: "bold" }}>Facebook:</span>
                    <div style={{ marginLeft: "0.1em" }}>
                      {trailpark.facebookPageUrl ? (
                        <a
                          href={trailpark.facebookPageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={FacebookIcon} />
                        </a>
                      ) : (
                        "❌"
                      )}
                    </div>
                  </div>
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
