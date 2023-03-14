// Short Payment Descriptor
// https://en.wikipedia.org/wiki/Short_Payment_Descriptor
// https://qr-platba.cz/pro-vyvojare/specifikace-formatu/

const ord = (str: string) => str.charCodeAt(0);

const strpos = (haystack: string, needle: string, offset = 0) => {
  const i = `${haystack}`.indexOf(needle, offset);
  return i === -1 ? false : i;
};

const fillWithZeros = (str: string | number, length: number) => {
  while (str.toString().length < length) {
    str = `0${str}`;
  }
  return str;
};

export const getIban = (accountNumber?: string | null, bankCode?: string | null) => {
  if (!accountNumber || !bankCode) return null;
  const part1 = ord("C") - ord("A") + 10;
  const part2 = ord("Z") - ord("A") + 10;

  let accountPrefix = "0";

  if (strpos(accountNumber, "-") !== false) {
    const accountParts = accountNumber.split("-");
    // eslint-disable-next-line prefer-destructuring
    accountPrefix = accountParts[0];
    accountNumber = `${accountParts[1]}`;
  }

  const numeric = `${fillWithZeros(bankCode, 4)}${fillWithZeros(accountPrefix, 6)}${fillWithZeros(
    accountNumber,
    10
  )}${part1}${part2}00`;

  let mod = "";
  numeric.split("").forEach((n) => {
    mod = `${Number(`${mod}${n}`) % 97}`;
  });

  const iban = `CZ${fillWithZeros(98 - parseInt(mod, 10), 2)}${fillWithZeros(
    bankCode,
    4
  )}${fillWithZeros(accountPrefix, 6)}${fillWithZeros(accountNumber, 10)}`;
  return iban;
};

export const getSpaydString = (qrRules: any) => {
  const symbols = {
    amount: "AM",
    constantSymbol: "X-KS",
    currency: "CC",
    date: "DT",
    iban: "ACC",
    message: "MSG",
    specificSymbol: "X-SS",
    variableSymbol: "X-VS",
    url: "X-URL",
  } as any;

  const keyValues = Object.keys(qrRules).map((key: any) => {
    let value = qrRules[key];
    // if (key === "date") value = Date.format(new Date(value), "yyyyMMdd");
    const symbol = symbols[key];
    if (!value) return "";

    return `${symbol}:${value}`;
  });

  return `SPD*1.0*${keyValues.join("*")}`;
};
