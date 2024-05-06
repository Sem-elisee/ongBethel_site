import img from "../assets/bulb.png";

import imgActualites from "../assets/clandestins.jpg";
import img2 from "../assets/utilisateur.png";
// import img3 from "../../public/certificate (1).png";
import img4 from "../assets/certificate.png";
import img5 from "../assets/business.png";
// import img6 from "../../public/licence.png";

import imgprojet1 from "../assets/handshake (1).png";
import imgprojet2 from "../assets/multiple-users-silhouette.png";
import imgprojet3 from "../assets/calendar (1).png";
import imgprojet4 from "../assets/support.png";

import img10 from "../assets/image (1).png";
import img11 from "../assets/image (2).png";
import img12 from "../assets/image (3).png";

export const Detail: {
  id: number;
  picture: string;
  title: string;
  paragraphe1: string;
  paragraphe2: string;
}[] = [
  {
    id: 1,
    picture: img,
    title: "Possibilités",
    paragraphe1: "Nous donnons la possibilité à",
    paragraphe2: " toute personne d’être formée ",
  },
  {
    id: 2,
    picture: img5,
    title: "Accueil",
    paragraphe1: "Nous sommes ouverts à toute",
    paragraphe2: "personne ",
  },
  {
    id: 2,
    picture: img4,
    title: "L'approbation",
    paragraphe1: "Nous avons l'approbation du",
    paragraphe2: " gouvernement ivoirien",
  },
  {
    id: 3,
    picture: img2,
    title: "Partenaires",
    paragraphe1: "Nous avons plusieurs ",
    paragraphe2: " partenaires à travers le monde ",
  },
];

export const Detail2: {
  id: number;
  picture: string;
  title: string;
  paragraphe1: string;
  paragraphe2: string;
  paragraphe3: string;
}[] = [
  {
    id: 1,
    picture: imgprojet1,
    title: "Disponibilité  ",
    paragraphe1: "Nous sommes ouverts à toutes ",
    paragraphe2: "personnes qui veulent avoir la bonne ",
    paragraphe3: " information. Contactez-Nous. ",
  },
  {
    id: 2,
    picture: imgprojet2,
    title: "Regroupement",
    paragraphe1: "Nous sommes à votre écoute et ",
    paragraphe2: " attendons vos nombreuses",
    paragraphe3: " préoccupations.",
  },
  {
    id: 2,
    picture: imgprojet3,
    title: "Programmes",
    paragraphe1: "Nos programmes ont pour avantage de ",
    paragraphe2: "permettre aux bénéficiaires d’être  ",
    paragraphe3: "suivis et d'être autonomes ",
  },
  {
    id: 3,
    picture: imgprojet4,
    title: "Ressources ",
    paragraphe1: "Nous disposons de plusieurs ",
    paragraphe2: " atouts pour mener à  bien la formation",
    paragraphe3: "de nos bénéficiaires.",
  },
];

export const TiltePropos: {
  id: number;
  title: string;
  paragraphe1: string;
  paragraphe2: string;
}[] = [
  {
    id: 1,
    title: "Notre crédibilité",
    paragraphe1:
      "Nous sommes agréés par l’Etat de Côte  d’ivoire qui nous fait confiance.",
    paragraphe2: " ",
  },
  {
    id: 2,
    title: "Notre Réactivité ",
    paragraphe1: "Nous sommes disponibles via tous ",
    paragraphe2: "les  réseaux sociaux.",
  },
  {
    id: 2,
    title: "Nos Formations",
    paragraphe1: "Nous formons sur les techniques culturales et ",
    paragraphe2: "d'elevages, entrepreneuriat, l’alphabétisation.... ",
  },
  {
    id: 3,
    title: "Vivre ensemble",
    paragraphe1:
      "Nous ne faisons pas de préférence particulière. Avançons main dans la main.",
    paragraphe2: "",
  },
];

export const Element: {
  id: number;
  image: string;
  title: string;
  paragraphe1: string;
  paragraphe2: string;
}[] = [
  {
    id: 1,
    image: img10,
    title: "Notre coup de pouce",
    paragraphe1:
      "Nous donnons la possibilité à tout individu désireux d’apprendre ",
    paragraphe2:
      "de se faire former d'avantage et avoir une expertise pour se prendre en charge",
  },

  {
    id: 1,
    image: img11,
    title: "Impact social",
    paragraphe1:
      "Notre stratégie : avoir une incidence positive à long terme sur nos jeunes,  ",
    paragraphe2: "nos quartiers, nos communautés et notre environnement.",
  },
  {
    id: 1,
    image: img12,
    title: "Diversité, équité et inclusion",
    paragraphe1:
      "Nous donnons l’opportunité  aux jeunes de renaître et de se sentir en sécurité, ",
    paragraphe2:
      "pour qu'ils puissent donner le meilleur d’eux même sans être aliénés ",
  },
];

/* ======================================================= */

export const ActualitesDetails: {
  id: number;
  title: string;
  titre?: string;
  title2?: string;
  image: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  date: string;
  comment: string;
  soustitle: string;
  soustitle2: string;
  para1: string;
  para2: string;
}[] = [
  {
    id: 1,
    title: "Création d’une nouvelle société commune dans les ",
    title2: "énergies renouvelables en Afrique",
    titre: "Overview",
    image: imgActualites,
    p1: "Lorem ipsum dolor sit amet consectetur",
    p2: "adipisicing elit. Saepe, debitis laudantium facilis",
    p3: "error aut id laborum nesciunt amet odit quidem",
    p4: "eius, aliquid quam distinctio",
    date: "5 Avr 2024",
    comment: "",
    para1: "",
    soustitle: ".",
    para2: "",
    soustitle2: "",
  },
];
