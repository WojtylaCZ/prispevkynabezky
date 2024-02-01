import { t } from "i18next";
import { Trans, useTranslation } from "react-i18next";
import { FooterBar } from "./footer-bar";
import { HeaderBar } from "./header-bar";
import { PageContent } from "./page-content";
import { PageHeaderImage } from "./page-header-image";
import { Image } from "react-bootstrap";
import Skier from "../assets/img/skier2.png";
import Example from "../assets/img/example.png";

export const DonatePage = () => {
  const { t } = useTranslation();

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
          <h2
            style={{
              fontFamily: "Kaushan Script",
              color: "#f7b500",
              marginBottom: "24px",
              fontSize: "calc(1.775rem + 1.1vw)",
            }}
          >
            {t("titles.donateH2")}
          </h2>
          <span>{t("text.donate.1")}</span>
          <br />
          <span>{t("text.donate.2")}</span>
          <br />
          <Image
            src={Example}
            style={{
              maxWidth: "600px",
              width: "100%",
            }}
          />

          <br />

          <span>{t("text.donate.3")}</span>
          <br />
          <span>{t("text.donate.4")}</span>

          <br />
          <h2
            style={{
              fontFamily: "Kaushan Script",
              color: "#f7b500",
              marginBottom: "24px",
              fontSize: "calc(1.775rem + 1.1vw)",
            }}
          >
            {t("titles.donateH2toPNB")}
          </h2>
          <span style={{ textAlign: "center" }}>
            <Trans i18nKey="text.introLineKosile">
              before
              <a href={"https://www.kosileoduhlire.cz"} target="_blank" rel="noopener noreferrer">
                wwww.kosileoduhlire.cz
              </a>
              after
            </Trans>
          </span>
          <br />
          <Image
            src={Skier}
            style={{
              maxWidth: "300px",
              width: "100%",
            }}
          />
        </div>
      </PageContent>
      <FooterBar />
    </>
  );
};
