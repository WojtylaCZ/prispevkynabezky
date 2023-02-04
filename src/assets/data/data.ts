import { District } from "../../app/district";

import Jizerka from "./qr-codes/Jizerka-255899476-0300.png";

import MalaUpa from "./qr-codes/MalaUpa-6138641369-0800.png";
import Vrchlabi from "./qr-codes/Vrchlabi-262563989-0300.png";
import Jilemnice from "./qr-codes/Jilemnice-1261416359-0800.png";
import Harrachov from "./qr-codes/Harrachov-20036-1263085389-0800.png";
import RokytniceNadJizerou from "./qr-codes/RokytniceNadJizerou-123-5314220287-0100.png";

import ZapadniKrusneHory from "./qr-codes/ZapadniKrusneHory-269980072-0300.png";
import LoucnaPodKlinovcem from "./qr-codes/LoucnaPodKlinovcem-2302061393-2010.png";
import Alsovka from "./qr-codes/Alsovka-204457600-0600.png";
import VychodniKrusneHory from "./qr-codes/VychodniKrusneHory-35-6888660227-0100.png";

export const data: Array<District> = [
  {
    name: "Jizerské hory",
    trailparks: [
      {
        name: "Jizerská magistrála",
        bankAccountNumber: "255899476/0300",
        transparentBankAccountUrl: null,
        url: "https://www.jizerskaops.cz/chci-prispet/verejna-sbirka/",
        qrImage: Jizerka,
        facebookPageUrl: "https://www.facebook.com/jizerskamagistrala",
        checkedAt: "4.2.2023",
      },
    ],
  },
  {
    name: "Krkonoše",
    trailparks: [
      {
        name: "Malá Úpa",
        bankAccountNumber: "6138641369/0800",
        transparentBankAccountUrl:
          "https://www.csas.cz/cs/transparentni-ucty#/000000-6138641369/OBEC-MALA-UPA",
        url: "https://malaupa.cz/aktivity/zima/bezky/",
        qrImage: MalaUpa,
        facebookPageUrl: "https://www.facebook.com/malaupa",
        checkedAt: "4.2.2023",
      },
      {
        name: "Vrchlabí",
        bankAccountNumber: "262563989/0300",
        transparentBankAccountUrl: null,
        url: "https://nabezky.cz",
        qrImage: Vrchlabi,
        facebookPageUrl: "https://www.facebook.com/nabezkydoVejsplach/",
        checkedAt: "4.2.2023",
      },
      {
        name: "Benecko",
        bankAccountNumber: null,
        transparentBankAccountUrl: null,
        url: "https://www.benecko.info/zima/bezecke-lyzovani/z",
        qrImage: null,
        facebookPageUrl: "https://www.facebook.com/BeneckoKrkonose/",
        checkedAt: "4.2.2023",
      },
      {
        name: "Jilemnice",
        bankAccountNumber: "1261416359/0800",
        transparentBankAccountUrl: null,
        url: "https://www.skijilemnice.cz/web/trate/mapy",
        qrImage: Jilemnice,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        name: "Harrachov",
        bankAccountNumber: "20036-1263085389/0800",
        transparentBankAccountUrl:
          "https://www.csas.cz/cs/transparentni-ucty#/020036-1263085389/Mesto-Harrachov",
        url: "https://www.harrachovcard.cz/zima/bezecke-lyzovani",
        qrImage: Harrachov,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        name: "Rokytnice nad Jizerou",
        bankAccountNumber: "123-5314220287/0100",
        transparentBankAccountUrl: null,
        url: "https://www.mesto-rokytnice.cz/turisticke-info/lyze-bezky-snowboard",
        qrImage: RokytniceNadJizerou,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
    ],
  },
  {
    name: "Krušné hory",
    trailparks: [
      {
        name: "Západní Krušné hory",
        bankAccountNumber: "269980072/0300",
        transparentBankAccountUrl:
          "https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet?account=269980072",
        url: "https://www.facebook.com/KLMzapad/",
        qrImage: ZapadniKrusneHory,
        facebookPageUrl: "https://www.facebook.com/jizerskamagistrala",
        checkedAt: "4.2.2023",
      },
      {
        name: "Loučná pod Klínovcem",
        bankAccountNumber: "2302061393/2010",
        transparentBankAccountUrl: null,
        url: "https://www.loucna.eu/infocentrum/zima/bezecke-lyzovani/bezecke-trate/",
        qrImage: LoucnaPodKlinovcem,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        name: "Alšovka - střední Krušné hory",
        bankAccountNumber: "204457600/0600",
        transparentBankAccountUrl: null,
        url: "https://alsovka.cz/bezecke-trasy/",
        qrImage: Alsovka,
        facebookPageUrl: "https://www.facebook.com/SkiarealAlsovka",
        checkedAt: "4.2.2023",
      },
      {
        name: "Klíny - střední Krušné hory",
        bankAccountNumber: null,
        transparentBankAccountUrl: null,
        url: "https://kliny.cz/bezecke-trasy/",
        qrImage: null,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        name: "Východní Krušné hory",
        bankAccountNumber: "35-6888660227/0100",
        transparentBankAccountUrl: null,
        url: "http://kbstopa.cz/",
        qrImage: VychodniKrusneHory,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
    ],
  },
];
