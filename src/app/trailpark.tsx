import React, { useCallback, useEffect, useState } from "react";
import { Col, Collapse, Container, Image, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import FacebookIcon from "../assets/icons/facebook.svg";
import ReactGA from "react-ga4";

ReactGA.initialize("G-TJGECJ2MHV");

export type Trailpark = {
  id: number;
  name: string;
  slug: string;
  qrImage: string | null;
  bankAccountNumber: string | null;
  transparentBankAccountUrl: string | null;
  variableSymbol: number | null;
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
  const [isExpanded, setIsExpanded] = useState(isFirst);
  const ref = React.useRef<HTMLInputElement>(null);
  let { trailparkSlug } = useParams();

  const scrollToTarget = () => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        block: "center",
      });
    }
  };

  useEffect(() => {
    if (trailparkSlug === trailpark.slug) {
      scrollToTarget();
    }
  }, [trailparkSlug, trailpark.slug]);

  const handleClick = useCallback(() => {
    if (!isExpanded) {
      ReactGA.event("trailparkcard_expanded", {
        trailparkId: trailpark.id,
      });
      ReactGA.event({
        // action becomes the event name
        action: `trailparkcardexpanded2_${trailpark.id}`,
        //  "event_category" becomes a custom parameter
        category: `${trailpark.id}`,
      });
    }
    setIsExpanded(!isExpanded);
  }, [trailpark.id, isExpanded]);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "2px",
        boxShadow: "0 0 20px 0 rgba(29, 17, 86, 0.12)",
      }}
      aria-controls="example-collapse-text"
      aria-expanded={isExpanded}
      ref={ref}
    >
      <style type="text/css">
        {`
          .trailparkHeader:hover {
            background-color: #F8F8F8;
          }
          
          .trailparkHeader:hover .detailDropdown {
            text-decoration: underline
        }
          `}
      </style>
      <div className="trailparkHeader">
        <div
          style={{
            display: "flex",
            padding: "16px 16px 16px 16px ",
            alignItems: "center",
            cursor: "pointer",
            justifyContent: "space-between",
            alignContent: "center",
          }}
          onClick={handleClick}
        >
          <span>
            <h3
              style={{
                marginBottom: "0px",
              }}
            >
              {trailpark.name}
            </h3>
          </span>

          <div
            className="detailDropdown"
            style={{
              display: "flex",
              justifyContent: "flex-end",
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
              {isExpanded ? "Skrýt detail" : "Zobrazit detail"}
            </h6>

            <div style={{ width: "10px" }}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
          </div>
        </div>
      </div>
      <Collapse in={isExpanded}>
        <div id="example-collapse-text">
          <hr style={{ marginTop: "0px" }} />

          <Container>
            <Row>
              <Col sm style={{ marginBottom: "0.5em" }}>
                <h5 style={{ fontWeight: "bold", minWidth: "170px" }}>QR kód pro platbu:</h5>

                <div style={{ margin: "auto", maxWidth: "250px" }}>
                  {trailpark.qrImage ? <Image src={trailpark.qrImage} thumbnail /> : "❌"}
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
                        style={{ color: "#000000" }}
                      >
                        Transparentní účet
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
                            style={{ color: "#000000" }}
                          >
                            {trailpark.name}
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
