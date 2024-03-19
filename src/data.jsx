import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaWordpress, FaPhp } from 'react-icons/fa';

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
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.'
  },
  {
    id: nanoid(),
    title: 'PHP',
    icon: <FaPhp className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.'
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.'
  }
];

export const projects = [
  {
    id: nanoid(),
    img: 'src/assets/twc3.jpg',
    url: 'https://theworldconference.io/',
    title: 'TWC3',
    text: 'The World Web3 Conference website'
  },

  {
    id: nanoid(),
    img: 'src/assets/DiamondVision.jpg',
    url: 'https://diamondvision.com/',
    title: 'Diamond Vision',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/FloridaGroves.jpg',
    url: 'https://floridagroves.com/',
    title: 'Florida Groves',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/cricketpavers.jpg',
    url: 'https://www.cricketpavers.com/',
    title: 'Cricket Pavers',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/autoshow.jpg',
    url: 'https://www.miamiautoshows.com/',
    title: 'Miami Auto Show',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/catapult.jpg',
    url: 'https://catapulthq.com/',
    title: 'CatapultHQ',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/datang.jpg',
    url: 'https://datangzhenwei.com/',
    title: 'Da Tang Restaurant',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/checkissuing.jpg',
    url: 'https://www.checkissuing.com/',
    title: 'CheckIssuing',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/newent.jpg',
    url: 'https://newentertainment.net/',
    title: 'New Etertainment',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/pronova.jpg',
    url: 'https://pronovacorp.com/',
    title: 'Pronova',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/pettap.jpg',
    url: 'https://thepettap.com/',
    title: 'Pet Tap',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/hangout.jpg',
    url: 'https://www.hangoutcreations.com/',
    title: 'Hangout Creations',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/natur.jpg',
    url: 'https://naturaqua.rs/',
    title: 'NaturAqua',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/nose.jpg',
    url: 'https://nosemask.info/',
    title: 'Nose Mask',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'src/assets/trin.jpg',
    url: 'https://www.trinitysmartit.com/',
    title: 'Trinity IT',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  }
];
