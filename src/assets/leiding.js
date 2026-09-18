import maartenVermeirenImage from "./images/leiding/MaartenVermeiren.avif";
import gijsVanDenBerghImage from "./images/leiding/GijsVanDenBergh.avif";
import seppeJanssenImage from "./images/leiding/SeppeJanssen.avif";
import elienVermeirenImage from "./images/leiding/ElienVermeiren.avif";
import roosVanLookImage from "./images/leiding/RoosVanLook.avif";
import robbeKnaepkensImage from "./images/leiding/RobbeKnaepkens.avif";
import thomasPreudhommeImage from "./images/leiding/ThomasPreudhomme.avif";
import rineJanssenImage from "./images/leiding/RineJanssen.avif";
import siemonRendersImage from "./images/leiding/SiemonRenders.avif";
import margauxNuytsImage from "./images/leiding/MargauxNuyts.avif";
import thomasCuypersImage from "./images/leiding/ThomasCuypers.avif";
import hannesVanhooydonckImage from "./images/leiding/HannesVanhooydonck.avif";
import jasperVanBrechtImage from "./images/leiding/JasperVanBrecht.avif";
import kobeVanLooverenImage from "./images/leiding/KobeVanLooveren.avif";
import louisJanssenImage from "./images/leiding/LouisJanssen.avif";
import eliaSipsImage from "./images/leiding/EliaSips.avif";
import kobeFranckenImage from "./images/leiding/KobeFrancken.avif";
import jasperVanLooverenImage from "./images/leiding/JasperVanLooveren.avif";
import sanderVerheydenImage from "./images/leiding/SanderVerheyden.avif";
import stefCoxImage from "./images/leiding/StefCox.avif";
import lieselotteVanhooydonckImage from "./images/leiding/LieselotteVanhooydonck.avif";

// Imports voor nieuwe leiding
import loreImage from "./images/leiding/Lore.avif";
import seppeMImage from "./images/leiding/SeppeM.avif";
import aliciaImage from "./images/leiding/Alicia.avif";
import alexineImage from "./images/leiding/Alexine.avif";
import kobeVBImage from "./images/leiding/KobeVB.avif";
import simonBImage from "./images/leiding/SimonB.avif";

// Stijl voor het inzoomen op het midden van de foto
const zoomCenterStyle = {
  transform: "scale(1.5)",
  transformOrigin: "center center",
  objectFit: "cover"
};

export const leidingData = [
  {
    title: "Groepsleiding",
    members: [
      {
        name: "Gijs Van den Bergh",
        scoutsName: "Werklustige Bever",
        image: gijsVanDenBerghImage,
        details: ["Groepsleider", "Leider Wolven", "Verhuur", "0471 49 48 44", "vandenberghgijs1@gmail.com"],
      },
      {
        name: "Margaux Nuyts",
        scoutsName: "Joviale Zwaluw",
        image: margauxNuytsImage,
        details: ["Groepsleidster", "Sociale media", "Breughelavond", "Zorgpersoon", "Leidster Givers", "0471 36 53 14", "margaux.nuyts@gmail.com"],
      },
      {
        name: "Thomas Preud'homme",
        scoutsName: "Hartverwarmende Winterkoning",
        image: thomasPreudhommeImage,
        details: ["Groepsleider", "Financiën", "Jaarsponsoring", "Leider Jins", "0468 57 32 76", "thomaspreudhomme@outlook.com"],
      },
    ],
  },
  {
    title: "Inschrijvingen",
    members: [
      {
        name: "Seppe Janssen",
        scoutsName: "Guitige Spinaap",
        image: seppeJanssenImage,
        details: ["Inschrijvingen", "Cadeau oud-leiding", "Leider Givers", "0477 86 74 02", "seppejan10@gmail.com"],
      },
    ],
  },
  {
    title: "Kapoenen leiding",
    members: [
      {
        name: "Elien Vermeiren",
        scoutsName: "Krachtige Torenvalk",
        image: elienVermeirenImage,
        details: ["Takleidster Kapoenen", "Scriptor", "Verslagen", "Breughelavond", "0477 28 95 23", "elienvermeiren@hotmail.be"],
      },
      {
        name: "Thomas Cuypers",
        scoutsName: "Spitsvondige Kraanvogel",
        image: thomasCuypersImage,
        details: ["Leider Kapoenen", "Merchandise", "Plek groepskamp 2028", "0472 82 47 22", "thomascuypers@outlook.com"],
      },
      {
        name: "Lore",
        scoutsName: "Harmonieuze Kea",
        image: loreImage,
        style: zoomCenterStyle,
        details: ["Leidster Kapoenen", "Tipsi team", "Bedanking vrijwilligers", "Zorgpersoon", "0468 28 21 00", "lorevlooveren@telenet.be"],
      },
      {
        name: "Matthis",
        scoutsName: "Montere Koi",
        image: null,
        details: ["Leider Kapoenen", "Verhuur", "Cadeau oud-leiding", "0492 52 18 47", "matthis.mennes@icloud.com"],
      },
      {
        name: "Seppe M",
        scoutsName: "Betrouwbare Beermarter",
        image: seppeMImage,
        style: zoomCenterStyle,
        details: ["Leider Kapoenen", "Bar opruim team", "NVDJB", "0471 01 01 07", "seppe.maes001@gmail.com"],
      },
    ],
  },
  {
    title: "Welka leiding",
    members: [
      {
        name: "Stef Cox",
        scoutsName: "Goedhartige Vink",
        image: stefCoxImage,
        details: ["Takleider Welka's", "Bar team", "Container", "NVDJB", "0468 29 87 72", "stefcox@gmail.com"],
      },
      {
        name: "Kobe Van Brecht",
        scoutsName: "Gezellige Agame",
        image: kobeVBImage,
        style: zoomCenterStyle,
        details: ["Leider Welka's", "Bar team", "Milieu", "0470 37 34 39", "kobevanbrecht@gmail.com"],
      },
      {
        name: "Gil",
        scoutsName: "Expressieve Lori",
        image: null,
        details: ["Leider Welka's", "Milieu", "Plek groepskamp 2028", "0456 75 07 19", "Gil@ipower.eu"],
      },
      {
        name: "Rine Janssen",
        scoutsName: "Onbevangen Berner Sennenhond",
        image: rineJanssenImage,
        details: ["Leidster Welka's", "Daguitstap", "0471 83 29 13", "rinejanssen@gmail.com"],
      },
      {
        name: "Elia Sips",
        scoutsName: "Blijgeestige Boxer",
        image: eliaSipsImage,
        details: ["Leider Welka's", "Breughelavond", "Plek groepskamp 2028", "0467 02 20 77", "sipselia@gmail.com"],
      },
    ],
  },
  {
    title: "Wolvenleiding",
    members: [
      {
        name: "Kobe Francken",
        scoutsName: "Bereidwillige Steppelemming",
        image: kobeFranckenImage,
        details: ["Takleider Wolven", "Container", "0467 01 78 67", "kobefrancken@telenet.be"],
      },
      {
        name: "Dries",
        scoutsName: "Vredevolle Secretarisvogel",
        image: null,
        details: ["Leider Wolven", "Financiën (opleiding)", "0472 11 20 76", "driescuypers@outlook.com"],
      },
      {
        name: "Gijs Van den Bergh",
        scoutsName: "Werklustige Bever",
        image: gijsVanDenBerghImage,
        details: ["Groepsleider", "Leider Wolven", "Verhuur", "0471 49 48 44", "vandenberghgijs1@gmail.com"],
      },
      {
        name: "Warre",
        scoutsName: "Aimabele Poedel",
        image: null,
        details: ["Leider Wolven", "Verhuur", "Plek groepskamp 2028", "0467 01 33 43", "warre.knaepkens@telenet.be"],
      },
      {
        name: "Alicia",
        scoutsName: "Scoutsnaam invullen",
        image: aliciaImage,
        style: zoomCenterStyle,
        details: ["Leidster Wolven", "Verhuur", "Tipsi team", "0468 07 06 58", "Alicia.van.aperen@gmail.com"],
      },
    ],
  },
  {
    title: "Jonggiverleiding",
    members: [
      {
        name: "Kobe Van Looveren",
        scoutsName: "Wilskrachtige Saki",
        image: kobeVanLooverenImage,
        details: ["Takleider Jonggivers", "Site", "Verhuur", "0456 12 14 57", "kobevanlooveren2007@gmail.com"],
      },
      {
        name: "Alexine",
        scoutsName: "Elegant Hert",
        image: alexineImage,
        style: zoomCenterStyle,
        details: ["Leidster Jonggivers", "Tipsi team", "Bedanking vrijwilligers", "0471 01 03 77", "alexinedebacker@icloud.com"],
      },
      {
        name: "Louis Janssen",
        scoutsName: "Luchthartige Streepmuis",
        image: louisJanssenImage,
        details: ["Leider Jonggivers", "Bar team", "Overgang", "0485 30 32 27", "louisjanssen@gmail.com"],
      },
      {
        name: "Siemon Renders",
        scoutsName: "Amicale Newfoundlander",
        image: siemonRendersImage,
        details: ["Leider Jonggivers", "Overgang", "Daguitstap", "0493 96 87 83", "siemon.renders@gmail.com"],
      },
      {
        name: "Jasper Van Looveren",
        scoutsName: "Strijdlustige Arasari",
        image: jasperVanLooverenImage,
        details: ["Leider Jonggivers", "Knutselkot", "NVDJB", "0487 22 21 14", "vanlooverenjasper@gmail.com"],
      },
    ],
  },
  {
    title: "Giverleiding",
    members: [
      {
        name: "Lieselot Vanhooydonck",
        scoutsName: "Hulpvaardige Spitsvogel",
        image: lieselotteVanhooydonckImage,
        details: ["Takleidster Givers", "Subsidieformulier", "Knutselkot", "Tipsi team", "0468 24 38 36", "lieselot.vanhooydonck@gmail.com"],
      },
      {
        name: "Margaux Nuyts",
        scoutsName: "Joviale Zwaluw",
        image: margauxNuytsImage,
        details: ["Groepsleidster", "Sociale media", "Breughelavond", "Zorgpersoon", "Leidster Givers", "0471 36 53 14", "margaux.nuyts@gmail.com"],
      },
      {
        name: "Simon Braem",
        scoutsName: "Gedreven Hert",
        image: simonBImage,
        style: zoomCenterStyle,
        details: ["Leider Givers", "Knutselkot", "Milieu", "0493 33 81 20", "simon.braem05@gmail.com"],
      },
      {
        name: "Seppe Janssen",
        scoutsName: "Guitige Spinaap",
        image: seppeJanssenImage,
        details: ["Leider Givers", "Inschrijvingen", "Cadeau oud-leiding", "0477 86 74 02", "seppejan10@gmail.com"],
      },
      {
        name: "Hannes Vanhooydonck",
        scoutsName: "Aimabele Fret",
        image: hannesVanhooydonckImage,
        details: ["Leider Givers", "Bar team", "Tipsi team", "Leiding Merchandise", "0468 23 27 67", "hannes.vanhooydonck@gmail.com"],
      },
    ],
  },
  {
    title: "Jin leiding",
    members: [
      {
        name: "Sander Verheyden",
        scoutsName: "Leergierig Zeepaard",
        image: sanderVerheydenImage,
        details: ["Takleider Jins", "Container", "0468 56 82 79", "sander.verheyden@telenet.be"],
      },
      {
        name: "Thomas Preud'homme",
        scoutsName: "Hartverwarmende Winterkoning",
        image: thomasPreudhommeImage,
        details: ["Groepsleider", "Financiën", "Jaarsponsoring", "Leider Jins", "0468 57 32 76", "thomaspreudhomme@outlook.com"],
      },
      {
        name: "Robbe Knaepkens",
        scoutsName: "Guitige Kwikstaart",
        image: robbeKnaepkensImage,
        details: ["Leider Jins", "Verhuur", "Tipsi team", "Sponsoring kamp", "0468 45 49 54", "robbe.knaepkens1@telenet.be"],
      },
      {
        name: "Maarten Vermeiren",
        scoutsName: "Doorzettende Steenbok",
        image: maartenVermeirenImage,
        details: ["Groepsleider", "Leider Jins", "0475 65 92 09", "maartenvermeiren@hotmail.be"],
      },
    ],
  },
];
