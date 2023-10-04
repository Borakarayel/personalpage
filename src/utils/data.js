import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 20,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 30,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I can help professionals, businesses and organizations develop and maintain visually appealing, functional, and user-friendly websites and web applications.",

  "I specialize in crafting websites and applications that not only look great but also work effortlessly. Take a tour of my work and let's turn your digital ideas into reality!",
];

export const workExp = [
  {
    place: "Career Break, Professional Development",
    tenure: "Aug 2022 - Present",
    role: "Web Developer",
    detail:
      "• Took an intentional pause to focus on learning web development skills like Computer Science, Responsive Web Design, HTML, CSS, JavaScript, and React.",
    detail1:
      "• Completed The Odin Project which is an open source coding curriculum that is entirely self-paced and online. Various programming tools used during the curriculum are reinforced with projects. These applications have been published on GitHub.",
    detail2:
      "• Proceed to develop various individual projects and improve my knowledge of JavaScript Frameworks.",
  },
  {
    place: "Online Bilgi Hizmetleri, Full-time",
    tenure: "May 2016 - Jun 2022",
    role: "Sales Executive",
    detail:
      "• Responsible for the sales, subscription, promotion, and training of digital content such as databases, APIs, services, and software of the world's leading publishers and companies such as Clarivate(formerly known as Thomson Reuters), IEEE, OECD, ASTM, BMJ, CAB, and IHS.",
    detail1:
      "• Annual new sales and renewal quotas were followed. Monthly, quarterly, and yearly sales reports were prepared and presented to the management and partners.",
    detail2:
      "• Online and on-site meetings were held with public and private universities, government agencies, private companies, and public administrations to provide training on existing products and promote new products.",
    detail3:
      "• Promotional campaigns were prepared in coordination with the marketing team to announce new developments in products. Assisted in organizing high-participation meetings held once every two years with the support of partners.",
    detail4:
      "• Took an active and productive lead role in the solution processes of users' requests, complaints, and technical problems.",
    detail5:
      "• The addition of new updates and SEO details was coordinated with the agency that manages the company website, in line with the management's requests.",
  },
  {
    place: "Doğan TV Holding, Full-time",
    tenure: "May 2010 - Dec 2014",
    role: "Digital Archivist",
    detail:
      "• Ensured data entry, classification, and disk management of the video clips on the media asset management software that is used by the entire channel.",
    detail1:
      "• Answered the video clip requests from various program departments, especially the news department.",
    detail2:
      "• Ensured coordination of the ingestion of video recordings into the media asset management software.",
  },
  {
    place: "Istanbul University, Full-time",
    tenure: "Jan 2009 - May 2010",
    role: "Librarian",
    detail:
      "• Reclassification of the library collection and completing missing bibliographic identities.",
    detail1:
      "• Creating catalog records of the library collection. Helping to improve library user services.",
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
  },
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
