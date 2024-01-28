import { useTranslation } from "react-i18next";

export const PageHeaderImage = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "1400px",
        height: "200px",
        position: "relative",
        width: "100%",
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 90%), url("https://upload.wikimedia.org/wikipedia/commons/2/28/Skate_skiing_track.jpg")`,
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
          bottom: "25%",
          right: "0px",
          fontSize: "calc(1.975rem + 1.3vw)",
        }}
      >
        {t("titles.mainH1")}
      </h1>
    </div>
  );
};
