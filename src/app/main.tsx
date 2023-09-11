import { useEffect } from "react";
import { Image, Stack } from "react-bootstrap";
import { DistrictSection } from "./district";
import Skier from "../assets/img/skier2.png";

import { data } from "../assets/data/data-new";
import { useNavigate, useParams } from "react-router-dom";

import { useTranslation, Trans } from "react-i18next";
import { HeaderBar } from "./header-bar";
import { supportedLocales } from "./i18n";
import { FooterBar } from "./footer-bar";

export const Main = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { trailparkSlug, locale } = useParams();

  useEffect(() => {
    if (locale && !supportedLocales.includes(locale)) {
      navigate("/", { replace: true });
    }
    const slugs = data.flatMap((district) => district.trailparks).map((t) => t.slug);
    if (trailparkSlug && !slugs.includes(trailparkSlug)) {
      navigate("/", { replace: true });
    }
  }, [navigate, trailparkSlug, locale]);

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
      <HeaderBar />
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
          {t("titles.mainH1")}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span>{t("text.introLine1")}</span>

          <span>{t("text.introLine2")}</span>
          <br />
          <span>{t("text.introLine3")}</span>
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
            {t("titles.contactH2")}
          </h2>
          <span>
            <Trans i18nKey="text.madeBy">
              before
              <a
                href={"https://www.facebook.com/WojtylaCZ/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vojtěch Uhlíř
              </a>
              after
            </Trans>
          </span>
          <br />
          <span>{t("text.footerLine1")}</span>
          <br />
          <span>
            <Trans i18nKey="text.alsoMade">
              before
              <a href={"https://www.improbox.cz"} target="_blank" rel="noopener noreferrer">
                Vojtěch Uhlíř
              </a>
              after
            </Trans>
          </span>
        </div>
        <div
          style={{
            color: "#0a3383",
            textAlign: "center",
          }}
        >
          <span>{t("text.footerLine2")}</span>
          <br />
          <a href={"https://www.facebook.com/WojtylaCZ/"} target="_blank" rel="noopener noreferrer">
            {t("text.footerLine3")}
          </a>
        </div>
      </Stack>
      <FooterBar />
    </>
  );
};
