import { FooterBar } from "./footer-bar";
import { HeaderBar } from "./header-bar";
import { Trans, useTranslation } from "react-i18next";
import { PageContent } from "./page-content";
import { Image } from "react-bootstrap";
import Skier from "../assets/img/skier2.png";
import LogoCCcz from "../assets/img/logo-cccz.png";
import LogoKZScz from "../assets/img/logo-kzscz.png";
import { PageHeaderImage } from "./page-header-image";
import { LineSeparator } from "./line-separator";

export const AboutPage = () => {
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
            {t("titles.aboutH2")}
          </h2>
          <span>{t("text.about.1")}</span>
          <span>{t("text.about.2")}</span>

          <br />
          <span>{t("text.about.3")}</span>
          <span>{t("text.about.4")}</span>
          <br />
          <LineSeparator />
          <br />
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
        <LineSeparator />
        {t("text.about.5")}
        <div className="d-flex justify-content-center flex-wrap">
          <a
            href={"https://www.kamzasnehem.cz/clanky/jak-jednoduse-prispet-na-upravu-stop"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LogoKZScz}
              style={{
                maxWidth: "300px",
                width: "100%",
              }}
            />
          </a>
          <a
            href={
              "https://cc.cz/udrzba-bile-stopy-neco-stoji-prispevku-od-bezkaru-vsak-mnoho-nechodi-novy-projekt-to-chce-zmenit/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LogoCCcz}
              style={{
                maxWidth: "300px",
                width: "100%",
              }}
            />
          </a>
        </div>
        <LineSeparator />
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
