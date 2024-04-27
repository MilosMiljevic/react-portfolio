import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaWordpress, FaPhp } from 'react-icons/fa';
import autoshow from '/src/assets/autoshow.jpg';
import catapult from '/src/assets/catapult.jpg';
import checkissuing from '/src/assets/checkissuing.jpg';
import cricketpavers from '/src/assets/cricketpavers.jpg';
import datang from '/src/assets/datang.jpg';
import diamondvision from '/src/assets/DiamondVision.jpg';
import floridagroves from '/src/assets/FloridaGroves.jpg';
import hangout from '/src/assets/hangout.jpg';
import naturaqua from '/src/assets/natur.jpg';
import newent from '/src/assets/newent.jpg';
import nose from '/src/assets/nose.jpg';
import pettap from '/src/assets/pettap.jpg';
import pronova from '/src/assets/pronova.jpg';
import trin from '/src/assets/trin.jpg';
import twc3 from '/src/assets/twc3.jpg';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' }
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.'
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality'
  },
  {
    id: nanoid(),
    title: 'WordPress',
    icon: <FaWordpress className="h-16 w-16 text-emerald-500" />,
    text: 'With 4+ years as a WordPress developer, I ve got the ins and outs of both frontend and backend. Over the past 3 years, I ve led a team, ensuring our WordPress projects hit their goals.'
  },
  {
    id: nanoid(),
    title: 'PHP',
    icon: <FaPhp className="h-16 w-16 text-emerald-500" />,
    text: 'I possess advanced proficiency in WordPress PHP, adept at crafting custom functionalities and robust solutions tailored to project requirements. My expertise ensures efficient development and seamless integration within the WordPress ecosystem'
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'I have a foundational understanding of React, capable of creating simple user interfaces and implementing basic functionalities. While my knowledge is basic, I am eager to expand my skills and delve deeper into React development.'
  }
];

export const projects = [
  {
    id: nanoid(),
    img: twc3,
    url: 'https://theworldconference.io/',
    title: 'TWC3',
    text: 'The World Web3 Conference website'
  },

  {
    id: nanoid(),
    img: diamondvision,
    url: 'https://diamondvision.com/',
    title: 'Diamond Vision',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: floridagroves,
    url: 'https://floridagroves.com/',
    title: 'Florida Groves',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: cricketpavers,
    url: 'https://www.cricketpavers.com/',
    title: 'Cricket Pavers',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: autoshow,
    url: 'https://www.miamiautoshows.com/',
    title: 'Miami Auto Show',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: catapult,
    url: 'https://catapulthq.com/',
    title: 'CatapultHQ',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: datang,
    url: 'https://datangzhenwei.com/',
    title: 'Da Tang Restaurant',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: checkissuing,
    url: 'https://www.checkissuing.com/',
    title: 'CheckIssuing',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: newent,
    url: 'https://newentertainment.net/',
    title: 'New Etertainment',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: pronova,
    url: 'https://pronovacorp.com/',
    title: 'Pronova',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: pettap,
    url: 'https://thepettap.com/',
    title: 'Pet Tap',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: hangout,
    url: 'https://www.hangoutcreations.com/',
    title: 'Hangout Creations',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: naturaqua,
    url: 'https://naturaqua.rs/',
    title: 'NaturAqua',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: nose,
    url: 'https://nosemask.info/',
    title: 'Nose Mask',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: trin,
    url: 'https://www.trinitysmartit.com/',
    title: 'Trinity IT',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  }
];
