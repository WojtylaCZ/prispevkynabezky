import { District } from "../../app/district";

// Jizerske hory
import Jizerka from "./qr-codes/Jizerka-255899476-0300.png";
// Korenov QR contains note with web
import Korenov from "./qr-codes/Korenov-123-4434000217-0100.png";
import PencinskaMagistrala from "./qr-codes/Pencinska-magistrala-115-8520840237-0100.png";
import Zasada from "./qr-codes/Zasada-123-3394480257-0100.png";

// Krkonose
import MalaUpa from "./qr-codes/MalaUpa-6138641369-0800.png";
import Vrchlabi from "./qr-codes/Vrchlabi-262563989-0300.png";
import Jilemnice from "./qr-codes/Jilemnice-1261416359-0800.png";
import Harrachov from "./qr-codes/Harrachov-20036-1263085389-0800.png";
import RokytniceNadJizerou from "./qr-codes/RokytniceNadJizerou-123-5314220287-0100.png";

// Krusne hory
// Adolfov with qr note v2
import Adolfov from "./qr-codes/Adolfov-656595-0100.png";
import ZapadniKrusneHory from "./qr-codes/ZapadniKrusneHory-269980072-0300.png";
import LoucnaPodKlinovcem from "./qr-codes/LoucnaPodKlinovcem-2302061393-2010.png";
import Alsovka from "./qr-codes/Alsovka-204457600-0600.png";
// NoveMesto with qr note v2
import NoveMesto from "./qr-codes/NoveMesto-301456968-0300.png";
import StredniKrusneHory from "./qr-codes/StredniKrusneHory-35-6888660227-0100.png";

// Luzicke hory
// Polevsko with qr note v2
import Polevsko from "./qr-codes/Polevsko-43-1708990227-0100.png";

// Orlicke hory
import BukovaHora from "./qr-codes/BukovaHora-6114987349-0800.png";
// Zahori QR contains note with web
import OrlickeZahori from "./qr-codes/Orlicke-Zahori-296969346-0300.png";
import Destne from "./qr-codes/DesteVOrlickychHorach293272551-0300.png";
// Ricky QR contains note with web
import RickyVOrlickycHorach from "./qr-codes/RickyVOrlickychHorach-276681775-0300.png";

// Sumava
import HlavniSumava from "./qr-codes/HlavniSumava-207602447-0600.png";
import Pasecna from "./qr-codes/Pasecna-299936101-0300.png";

// Novohradske hory
import HojnaVoda from "./qr-codes/NovohradskeHory-HojnaVoda-2102245016-2010.png";

// Jeseniky
import Jeseniky from "./qr-codes/Jeseniky-283995131-0300.png";

// Beskydy
import VelkeKarlovice from "./qr-codes/VelkeKarlovice-20036-1765312369-0800.png";
import Pustevny from "./qr-codes/Pustevny-6003963379-0800.png";

// Vysocina
import ZdarNadSazavou from "./qr-codes/ZdarNadSazavou-317339651-0300.png";
import VelkeDarko from "./qr-codes/VelkeDarko-287591038-0300.png";
import Svratka from "./qr-codes/Svratka-2802081518-2010.png";
import Novomestsko from "./qr-codes/Novomestsko-107-3157480237-0100.png";

export const data: Array<District> = [
  {
    name: "Jizerské hory",
    trailparks: [
      {
        id: 11,
        name: "Jizerská magistrála",
        slug: "jizerskehorymagistrala",
        operator: "Jizerská o.p.s.",
        bankAccountNumber: "255899476/0300",
        variableSymbol: 3100,
        transparentBankAccountUrl: null,
        url: "https://www.jizerskaops.cz/chci-prispet/verejna-sbirka/",
        qrImage: Jizerka,
        facebookPageUrl: "https://www.facebook.com/jizerskamagistrala",
        checkedAt: "4.2.2023",
      },
      {
        id: 12,
        name: "Kořenov, Paseky nad Jizerou",
        slug: "korenov",
        operator: "Jizersky pro vás o.p.s.",
        bankAccountNumber: "123-4434000217/0100",
        variableSymbol: null,
        transparentBankAccountUrl: "https://www.kb.cz/cs/transparentni-ucty/123-4434000217",
        url: "http://www.jizerkyprovas.cz/",
        qrImage: Korenov,
        facebookPageUrl: null,
        checkedAt: "17.2.2023",
      },
      {
        id: 13,
        name: "Pěnčínská magistrála",
        slug: "pencinskamagistrala",
        operator: "Pavel Pavlata - Huntířov",
        bankAccountNumber: "115-8520840237/0100",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://bezecke-trate-huntirov.webnode.cz/",
        qrImage: PencinskaMagistrala,
        facebookPageUrl: "https://www.facebook.com/pencinskamagistrala",
        checkedAt: "16.2.2023",
      },
      {
        id: 14,
        name: "Zásada a okolí",
        slug: "zasada",
        operator: "Město Zásada",
        bankAccountNumber: "123-3394480257/0100",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://www.zasada.cz/volny-cas/lyzarske-bezecke-trate",
        qrImage: Zasada,
        facebookPageUrl: "https://www.facebook.com/CrossCountrySkiZasada",
        checkedAt: "16.2.2023",
      },
    ],
  },
  {
    name: "Krkonoše",
    trailparks: [
      {
        id: 25,
        name: "Harrachov",
        slug: "harrachov",
        operator: "Město Harrachov",
        bankAccountNumber: "20036-1263085389/0800",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csas.cz/cs/transparentni-ucty#/020036-1263085389/Mesto-Harrachov",
        // url: "https://www.harrachovcard.cz/zima/bezecke-lyzovani",
        url: "https://www.harrachovcard.cz/harrachov/verejna-sbirka",
        qrImage: Harrachov,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        id: 24,
        name: "Jilemnice",
        slug: "jilemnice",
        operator: "ČKS SKI Jilemnice",
        bankAccountNumber: "1261416359/0800",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://www.skijilemnice.cz/web/trate/mapy",
        qrImage: Jilemnice,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        id: 21,
        name: "Malá Úpa",
        slug: "malaupa",
        operator: "Obec Malá Úpa",
        bankAccountNumber: "6138641369/0800",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csas.cz/cs/transparentni-ucty#/000000-6138641369/OBEC-MALA-UPA",
        // url: "https://malaupa.cz/aktivity/zima/bezky/",
        url: "https://malaupa.cz/blog/2022/02/07/dobrovolny-prispevek-na-upravu-bezeckych-trati-v-male-upe/",
        qrImage: MalaUpa,
        facebookPageUrl: "https://www.facebook.com/malaupa",
        checkedAt: "4.2.2023",
      },
      {
        id: 26,
        name: "Rokytnice nad Jizerou",
        slug: "rokytnicenadjizerou",
        operator: "Město Rokytnice nad Jizerou",
        bankAccountNumber: "123-5314220287/0100",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://www.mesto-rokytnice.cz/turisticke-info/lyze-bezky-snowboard",
        qrImage: RokytniceNadJizerou,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        id: 22,
        name: "Vrchlabí",
        slug: "vrchlabi",
        operator: "Areál Vejspachy",
        bankAccountNumber: "262563989/0300",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://www.nabezky.cz/#plan-trati",
        qrImage: Vrchlabi,
        facebookPageUrl: "https://www.facebook.com/nabezkydoVejsplach/",
        checkedAt: "4.2.2023",
      },
      {
        id: 23,
        name: "Benecko",
        slug: "benecko",
        operator: "Sdružení pro rozvoj na Benecku z. s.",
        bankAccountNumber: null,
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://www.benecko.info/zima/bezecke-lyzovani",
        qrImage: null,
        facebookPageUrl: "https://www.facebook.com/BeneckoKrkonose/",
        checkedAt: "4.2.2023",
      },
    ],
  },
  {
    name: "Krušné hory",
    trailparks: [
      {
        id: 37,
        name: "Adolfov",
        slug: "adolfov",
        operator: "Horský spolek Adolfov, z.s.",
        bankAccountNumber: "656595/0100",
        variableSymbol: null,
        transparentBankAccountUrl: "https://www.kb.cz/cs/transparentni-ucty/656595",
        url: "https://www.hsadolfov.cz/zima/",
        qrImage: Adolfov,
        facebookPageUrl: "https://www.facebook.com/hsadolfov",
        checkedAt: "12.3.2023",
      },
      {
        id: 33,
        name: "Alšovka",
        slug: "alsovka",
        operator: "Horal Venkov z.s.",
        bankAccountNumber: "204457600/0600",
        variableSymbol: 2021001,
        transparentBankAccountUrl: null,
        url: "https://alsovka.cz/bezecke-trasy/",
        qrImage: Alsovka,
        facebookPageUrl: "https://www.facebook.com/SkiarealAlsovka",
        checkedAt: "4.2.2023",
      },
      {
        id: 36,
        name: "Cínovec - Nové Město",
        slug: "cinovec",
        operator: "MAS Cínovecko, o.p.s.",
        bankAccountNumber: "301456968/0300",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "http://www.mascinovecko.cz/clanek?nazev=prispet-na-bezecke-stopy-v-useku-komari-vizka---nove-mesto-je-snazsi",
        qrImage: NoveMesto,
        facebookPageUrl: "https://www.facebook.com/bezeckestopy",
        checkedAt: "19.2.2023",
      },
      {
        id: 34,
        name: "Dlouhá Louka - Fláje",
        slug: "dlouhalouka",
        operator: "Krušnohorský klub Osek",
        bankAccountNumber: "35-6888660227/0100",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "http://kbstopa.cz/",
        qrImage: StredniKrusneHory,
        facebookPageUrl: "https://www.facebook.com/krusnohorskabilastopa",
        checkedAt: "4.2.2023",
      },
      {
        id: 32,
        name: "Loučná pod Klínovcem",
        slug: "loucnapodklinovcem",
        operator: "Město Loučná pod Klínovcem",
        bankAccountNumber: "2302061393/2010",
        variableSymbol: 2122010,
        transparentBankAccountUrl: null,
        url: "https://www.loucna.eu/infocentrum/zima/bezecke-lyzovani/bezecke-trate/",
        qrImage: LoucnaPodKlinovcem,
        facebookPageUrl: null,
        checkedAt: "4.2.2023",
      },
      {
        id: 31,
        name: "Západní Krušné hory",
        slug: "krusnehoryzapad",
        operator: "První krušnohorská o.p.s.",
        bankAccountNumber: "269980072/0300",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet?account=269980072",
        // url: "http://www.krusnehoryaktivne.cz/",
        url: "http://www.krusnehoryaktivne.cz/?page_id=11",
        qrImage: ZapadniKrusneHory,
        facebookPageUrl: "https://www.facebook.com/KLMzapad",
        checkedAt: "4.2.2023",
      },

      // {
      //   name: "Klíny - střední Krušné hory",
      //   operator: "Sport areál Klíny",
      //   bankAccountNumber: null,
      //   transparentBankAccountUrl: null,
      //   url: "https://kliny.cz/bezecke-trasy/",
      //   qrImage: null,
      //   facebookPageUrl: null,
      //   checkedAt: "4.2.2023",
      // },

      {
        id: 35,
        name: "Děčínský Sněžník",
        slug: "decinskysneznik",
        operator: "HUDYsport a.s.",
        bankAccountNumber: null,
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: null,
        qrImage: null,
        facebookPageUrl: "https://www.facebook.com/bezkysneznik/",
        checkedAt: "4.2.2023",
      },
    ],
  },
  {
    name: "Lužické hory",
    trailparks: [
      {
        id: 101,
        name: "Polevsko",
        slug: "polevsko",
        operator: "SKI Polevsko - oddíl běžeckého lyžování",
        bankAccountNumber: "43-1708990227/0100",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://skipolevsko.estranky.cz/clanky/kontakt.html",
        qrImage: Polevsko,
        facebookPageUrl: "https://www.facebook.com/ski.polevsko/",
        checkedAt: "7.3.2023",
      },
    ],
  },
  {
    name: "Orlické hory",
    trailparks: [
      {
        id: 42,
        name: "Buková hora - Suchý vrch",
        slug: "bukovahora",
        operator: "Sdružení obcí Orlicko",
        bankAccountNumber: "6114987349/0800",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csas.cz/cs/transparentni-ucty#/000000-6114987349/Sdruzeni-obci-Orlicko",
        url: "https://www.orlicko.cz/lyzarske-stopy-orlicka",
        qrImage: BukovaHora,
        facebookPageUrl:
          "https://www.facebook.com/Sdru%C5%BEen%C3%AD-obc%C3%AD-Orlicko-1621311478157605",
        checkedAt: "4.2.2023",
      },
      {
        id: 43,
        name: "Deštné v Orlických horách",
        slug: "orlickehorydestne",
        operator: "Deštenský spolek",
        bankAccountNumber: "293272551/0300",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet?account=293272551",
        url: "https://www.destne.info/#/aktuality",
        qrImage: Destne,
        facebookPageUrl: "",
        checkedAt: "16.2.2023",
      },
      {
        id: 44,
        name: "Orlické Záhoří",
        slug: "orlickezahori",
        operator: "Obec Orlické Záhoří",
        bankAccountNumber: "296969346/0300",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet?account=296969346",
        url: "https://www.orlickezahori.eu/index.php/cs/index-tic/akce-v-kalendari/upravovane-bezecke-trate-a-ski-arena-orlicke-zahori-sezona-2021-2022",
        qrImage: OrlickeZahori,
        facebookPageUrl: "",
        checkedAt: "17.2.2023",
      },
      {
        id: 41,
        name: "Říčky v Orlických horách",
        slug: "orlickehoryricky",
        operator: "Obec Rokytnice v Orlických horách",
        variableSymbol: 672003429,
        bankAccountNumber: "276681775/0300",
        transparentBankAccountUrl: null,
        url: "https://info.rokytnicevoh.cz/prakticke-informace/turisticke-informace/bezecke-trate-v-orlickych-horach/financni-dary-na-udrzbu-bezeckych-trati-422cs.html",
        qrImage: RickyVOrlickycHorach,
        facebookPageUrl: "",
        checkedAt: "18.2.2023",
      },
    ],
  },
  {
    name: "Šumava",
    trailparks: [
      {
        id: 51,
        name: "Šumavská magistrála",
        slug: "sumavamagistrala",
        operator: "Regionální rozvojová agentura Šumava, o.p.s.",
        bankAccountNumber: "207602447/0600",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://bilastopa.cz/cs/financovani/",
        qrImage: HlavniSumava,
        facebookPageUrl: "https://www.facebook.com/bilastopasumava",
        checkedAt: "5.2.2023",
      },
      {
        id: 52,
        name: "Pasečná",
        slug: "pasecna",
        operator: "Reuterovy paseky SE",
        bankAccountNumber: "299936101/0300",
        variableSymbol: 202300080,
        transparentBankAccountUrl: null,
        url: "https://bezkypasecna.cz/",
        qrImage: Pasecna,
        facebookPageUrl: "https://www.facebook.com/bezky.pasecna",
        checkedAt: "5.2.2023",
      },
    ],
  },
  {
    name: "Novohradské hory",
    trailparks: [
      {
        id: 91,
        name: "Hojná Voda",
        slug: "hojnavoda",
        operator: "Sportklub Hojná Voda, z.s.",
        bankAccountNumber: "2102245016/2010",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://www.hojna-voda.eu/index.php/bezky",
        qrImage: HojnaVoda,
        facebookPageUrl: null,
        checkedAt: "26.2.2023",
      },
    ],
  },
  {
    name: "Jeseníky",
    trailparks: [
      {
        id: 61,
        name: "Jeseníky magistrála",
        slug: "jesenikymagistrala",
        operator: "Sdružení cestovního ruchu Jeseníky",
        bankAccountNumber: "283995131/0300",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet?account=283995131",
        url: "https://www.jeseniky.cz/cz/turisticke-cile/k2198-lyzarska-bezecka-centra/",
        qrImage: Jeseniky,
        facebookPageUrl: "https://www.facebook.com/navstivtejeseniky.cz/",
        checkedAt: "6.2.2023",
      },
    ],
  },
  {
    name: "Beskydy",
    // https://www.beskydy.cz/web/bezky/
    // Vetsina "parku" nema sbirku, cislo uctu, nic.
    trailparks: [
      {
        id: 72,
        name: "Pustevny",
        slug: "pustevny",
        operator: "Běžecký areál Pustevny z.s.",
        bankAccountNumber: "6003963379/0800",
        variableSymbol: null,
        transparentBankAccountUrl: "https://www.csas.cz/cs/transparentni-ucty#/000000-6003963379",
        url: "http://www.ba-pustevny.cz/",
        qrImage: Pustevny,
        facebookPageUrl: "https://www.facebook.com/bapustevny",
        checkedAt: "15.2.2023",
      },
      {
        id: 71,
        name: "Velké Karlovice",
        slug: "velkekarlovice",
        operator: "Obec Velké Karlovice",
        bankAccountNumber: "20036-1765312369/0800",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://www.velkekarlovice.cz/rekreace-sport/zimni-sporty/bezecke-trasy-1/",
        qrImage: VelkeKarlovice,
        facebookPageUrl: "",
        checkedAt: "6.2.2023",
      },
    ],
  },
  {
    name: "Vysočina",
    trailparks: [
      {
        id: 84,
        name: "Novoměstsko",
        slug: "novomestsko",
        operator: "Mikroregion Novoměstsko",
        bankAccountNumber: "107-3157480237/0100",
        variableSymbol: null,
        transparentBankAccountUrl: null,
        url: "https://lyzovani.nmnm.cz/verejna-sbirka-na-udrzbu-trati/",
        qrImage: Novomestsko,
        facebookPageUrl: null,
        checkedAt: "6.2.2023",
      },
      {
        id: 83,
        name: "Svratka",
        slug: "svratka",
        operator: "Niva Svratky, o.p.s.",
        bankAccountNumber: "2802081518/2010",
        variableSymbol: null,
        transparentBankAccountUrl: "https://ib.fio.cz/ib/transparent?a=2802081518",
        url: null,
        qrImage: Svratka,
        facebookPageUrl: "https://www.facebook.com/xcskisvratka/",
        checkedAt: "6.2.2023",
      },
      {
        id: 82,
        name: "Velké Dářko",
        slug: "velkedarko",
        operator: "DSO Subregion Velké Dářko",
        bankAccountNumber: "287591038/0300",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet?account=287591038",
        url: "http://www.ski-velkedarko.cz/financovani",
        qrImage: VelkeDarko,
        facebookPageUrl: "https://www.facebook.com/skivelkedarko",
        checkedAt: "6.2.2023",
      },
      {
        id: 81,
        name: "Žďár nad Sázavou",
        slug: "zdarnadsazavou",
        operator: "Sportis Žďár nad Sázavou",
        bankAccountNumber: "317339651/0300",
        variableSymbol: null,
        transparentBankAccountUrl:
          "https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet?account=317339651",
        url: "https://www.sportispo.cz/page.aspx?IDTema=12",
        qrImage: ZdarNadSazavou,
        facebookPageUrl: "",
        checkedAt: "6.2.2023",
      },
    ],
  },
];
