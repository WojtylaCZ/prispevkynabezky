import QRCode from "qrcode";
import { getIban, getSpaydString } from "./spayd-generator";

require.extensions[".png"] = function () {};
// eslint-disable-next-line
import { data } from "../assets/data/data-new";

export const generateAll = () => {
  // 11 Jizerka ignore
  const ignoringIdsForQR = [11];

  const trailparks = data.flatMap((district) => {
    return district.trailparks;
  });

  const filtered = trailparks
    .filter((t) => t.bankAccountNumber)
    .filter((t) => !ignoringIdsForQR.includes(t.id));

  filtered.forEach((trailpark) => {
    const [bankAccountNumber, bankCode] = trailpark.bankAccountNumber!.split("/");

    const iban = getIban(bankAccountNumber, bankCode);

    const data: any = {
      iban,
      amount: 100,
      currency: "CZK",
      message: "Pres www.prispevkynabezky.cz prispevek na upravu trati.",
      // url: "https://www.prispevkynabezky.cz",
      // variableSymbol: trailpark.variableSymbol,
      // date: row.date,
    };
    if (trailpark.variableSymbol) {
      data.variableSymbol = trailpark.variableSymbol;
    }

    const qr = getSpaydString(data);

    console.log(qr);

    const filename = `Id${trailpark.id}_${bankAccountNumber.replace("-", "_")}_${bankCode}`;

    console.log(`import ${filename} from "./qr-codes-new/${filename}.png"`);

    QRCode.toFile("./src/assets/data/qr-codes-new/" + filename + ".png", qr, {
      margin: 1,
      width: 600,
      errorCorrectionLevel: "M",
    });
  });
};

generateAll();

// import qrcode.react
// <QRCodeSVG
// value={spayd}
// size={250}
// // imageSettings={{
// //   src: title,
// //   x: undefined,
// //   y: undefined,
// //   height: 84,
// //   width: 84,
// //   excavate: false,
// // }}
// />
