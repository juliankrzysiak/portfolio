import type { Project } from '../types';

import roam from '../assets/roam_screenshot.png';
import hydration from '../assets/hydration_screenshot.png';
import books from '../assets/tomeTracker_screenshot.png';
import jiaolongart from '../assets/jiaolongart_screenshot.png';
import dryweekend from '../assets/dryweekend_screenshot.png';
import notfound from '../assets/404_screenshot.png';
import laurelate from '../assets/laurelate_screenshot.png';
import jeblore from '../assets/jeblore_screenshot.png';

const projects: Project[] = [
  {
    title: 'roam',
    summary:
      'A roadtrip planning web app where one can create detailed schedules for each day using a map. You can also print out your whole trip plan too!',
    img: {
      src: roam,
    },
    links: {
      website: 'https://roam-gamma.vercel.app/',
      github: 'https://github.com/juliankrzysiak/roam',
    },
  },
  {
    title: 'Laurelate',
    summary:
      'Commissioned website for Laurelate, a new brand creating alternative chocolates using California native plants.',
    img: {
      src: laurelate,
    },
    links: {
      website: 'https://www.laurelate.com/',
    },
  },
  {
    title: 'jeblore',
    summary: 'Comissioned website for weekly webcomic.',
    img: {
      src: jeblore,
    },
    links: {
      website: 'https://jeblore.com/',
      github: 'https://github.com/juliankrzysiak/jeblore',
    },
  },
  {
    title: 'dry weekend',
    summary: 'Curated list of local Antelope Valley and Los Angeles events.',
    img: {
      src: dryweekend,
    },
    links: {
      website: 'https://dryweekend.com/',
      github: 'https://github.com/juliankrzysiak/dry-weekend',
    },
  },
  {
    title: 'JiaolongArt',
    summary: "Commissioned website for showcasing artist's select portfolio.",
    img: {
      src: jiaolongart,
    },
    links: {
      website: 'https://jiaolongart.com/',
    },
  },
  {
    title: 'Hydration',
    summary:
      'Record when you watered your plants and when you need to water them next using a calendar.',
    img: {
      src: hydration,
    },
    links: {
      website: 'https://water-schedule.pages.dev',
      github: 'https://github.com/juliankrzysiak/water-schedule',
    },
  },
  {
    title: 'tomeTracker',
    summary:
      "Track what books you've read. Input ratings, reviews, finish dates, filter and search for books, and more.",
    img: {
      src: books,
    },
    links: {
      website: 'https://tometracker.pages.dev/',
      github: 'https://github.com/juliankrzysiak/tomeTracker',
    },
  },
  {
    title: '404 page',
    summary: "404 Page for Codédex's monthly challenge.",
    img: {
      src: notfound,
    },
    links: {
      website: 'https://404-page-7ty.pages.dev/',
      github: 'https://github.com/juliankrzysiak/404-page',
    },
  },
];

export default projects;
