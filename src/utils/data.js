import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finding a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "The Odin Project, Self-Employed",
    tenure: "Aug 2022 - Present",
    role: "Frontend Web Developer",
    detail:
      "The Odin Project provides an open-source coding curriculum that is completely self-paced and online. Various programming languages learned during the curriculum are reinforced with projects.",
  },
  {
    place: "Online Bilgi Hizmetleri, Full-time",
    tenure: "May 2016 - Jun 2022",
    role: "Sales Executive",
    detail:
      "The role involves various tasks such as identifying customers' needs and uncovering new sales and subscription opportunities. It also includes managing the renewal processes for existing subscriptions and handling proposal processes. This requires conducting regular web-based and on-site meetings with universities, government agencies, companies, and public administrations in the Aegean and Marmara regions, with the aim of promoting and coordinating user training. Additionally, there is a focus on promoting new products in collaboration with the marketing team and assisting in organizing biannual high-participation meetings with partners. The position also entails generating monthly, quarterly, and annual sales reports, as well as forwarding user requests, complaints, and technical problems to the technical department and overseeing the resolution process." },
  {
    place: "Doğan TV Holding, Full-time",
    tenure: "May 2010 - Dec 2014",
    role: "Digital Archivist",
    detail:"Answering the specific digital video requests received from inside and outside the organization. Data entry, classification, archiving of various audio-visual recordings in the online system and keeping archived records ready to use."
  },
  {
    place: "Istanbul University, Full-time",
    tenure: "Jan 2009 - May 2010",
    role: "Librarian",
    detail:"Reclassification of the library collection and completion of missing bibliographic identities. Creating catalog records of the library collection. Helping to improve library user services."
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  }
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
