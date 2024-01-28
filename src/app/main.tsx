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
import { PageContent } from "./page-content";
import { PageHeaderImage } from "./page-header-image";

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
      <PageHeaderImage />

      <PageContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span>{t("text.introLinePNB")}</span>

          <hr
            style={{
              width: "100px",
              color: "#f7b500",
              border: 0,
              borderTop: "1px solid",
              opacity: "90%",
            }}
          />
          <span>
            <Trans i18nKey="text.introLineKosile">
              before
              <a href={"https://www.kosileoduhlire.cz"} target="_blank" rel="noopener noreferrer">
                wwww.kosileoduhlire.cz
              </a>
              after
            </Trans>
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
          <span>
            <Trans i18nKey="text.introLineKZS">
              before
              <a href={"https://www.kamzasnehem.cz"} target="_blank" rel="noopener noreferrer">
                wwww.kamzasnehem.cz
              </a>
              after
            </Trans>
          </span>
        </div>

        <Stack
          id="oblasti"
          gap={5}
          style={{
            marginTop: "25px",
          }}
        >
          {districtsList}
        </Stack>

        <Image
          src={Skier}
          style={{
            maxWidth: "300px",
            width: "100%",
          }}
        />
      </PageContent>
      <FooterBar />
    </>
  );
};
