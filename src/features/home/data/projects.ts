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
      'A road trip planning web app where one can create detailed schedules for each day using a map. You can even share it with others and print it, too!',
    img: {
      src: roam,
      alt: 'A screenshot showing a location on a map to be added to the planner.',
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
      alt: 'A screenshot showing a bon bon overlain by text, California Native Chocolate Alternative.',
    },
    links: {
      website: 'https://laurelate.com/',
    },
  },
  {
    title: 'jeblore',
    summary: 'Comissioned website for weekly webcomic.',
    img: {
      src: jeblore,
      alt: 'Frontpage of the most recent webcomic.',
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
      alt: 'Frontpage of a list of upcoming events in Antelope Valley and Los Angeles.',
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
      alt: 'A screenshot of website showing various art pieces.',
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
      alt: 'A screenshot of a calendar and list of plants that need watering.',
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
      alt: 'A screenshot of information regarding a finished book.',
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
      alt: 'A screenshot of 200 code displayed as coins fall from above.',
    },
    links: {
      website: 'https://404-page-7ty.pages.dev/',
      github: 'https://github.com/juliankrzysiak/404-page',
    },
  },
];

export default projects;
