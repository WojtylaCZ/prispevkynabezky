import Jimp from "jimp";
import fs from "fs";
import qrCodeReader from "qrcode-reader";

const map = new Map();

const decodeSpayd = (filepath: string) => {
  const buffer = fs.readFileSync(filepath);

  return new Promise((resolve, reject) => {
    Jimp.read(buffer, function (err, image) {
      if (err) {
        // console.error(err);
        return reject(err);
      }

      const qrCodeInstance = new qrCodeReader();

      qrCodeInstance.callback = function (err: any, value: any) {
        if (err) {
          //   console.error(err);
          console.log(filepath);
          return reject(err);
        }
        // console.log(value.result);
        resolve(value.result);
      };

      qrCodeInstance.decode(image.bitmap);
    });
  });
};

const main = async () => {
  const files = fs.readdirSync("./src/assets/data/qr-codes");

  for (const file of files) {
    if (file.indexOf("tmp") > -1) continue;
    try {
      const value = await decodeSpayd("./src/assets/data/qr-codes/" + file);
      //   console.log(file, value);
      map.set(value, file);
    } catch (err) {
      console.log(file, err);
    }
  }

  //   console.log(map);

  const filesNew = fs.readdirSync("./src/assets/data/qr-codes-new");

  for (const file of filesNew) {
    try {
      const value = await decodeSpayd("./src/assets/data/qr-codes-new/" + file);
      //   console.log(file, value);

      if (map.has(value)) {
        console.log("☑️", file, map.get(value));
        map.delete(value);
      } else {
        console.log("new value", file, value);
      }
    } catch (err) {
      console.log("err", file, err);
    }
  }

  console.log(map);
};

main().then(() => console.log("DONE"));
