import type { Project } from '../types';

import roam from '../assets/roam_screenshot.png';
import hydration from '../assets/hydration_screenshot.png';
import books from '../assets/tomeTracker_screenshot.png';
import jiaolongart from '../assets/jiaolongart_screenshot.png';
import dryweekend from '../assets/dryweekend_screenshot.png';
import notfound from '../assets/404_screenshot.png';

const projects: Project[] = [
  {
    title: 'dry weekend',
    summary: 'A curated list of local Antelope Valley and Los Angeles events.',
    img: {
      src: dryweekend.src,
    },
    links: {
      website: 'https://dryweekend.com/',
      github: 'https://github.com/CastillejaCode/dry-weekend',
    },
  },
  {
    title: '404 page',
    summary: "A 404 Page for Codédex's monthly challenge.",
    img: {
      src: notfound.src,
    },
    links: {
      website: 'https://404-page-7ty.pages.dev/',
      github: 'https://github.com/CastillejaCode/404-page',
    },
  },
  {
    title: 'JiaolongArt',
    summary: "Commissioned website for showcasing artist's select portfolio.",
    img: {
      src: jiaolongart.src,
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
      src: hydration.src,
    },
    links: {
      website: 'https://water-schedule.pages.dev',
      github: 'https://github.com/CastillejaCode/water-schedule',
    },
  },
  {
    title: 'tomeTracker',
    summary:
      "Track what books you've read. Input ratings, reviews, finish dates, filter and search for books, and more.",
    img: {
      src: books.src,
    },
    links: {
      github: 'https://github.com/CastillejaCode/book-list',
    },
  },
  {
    title: 'ROAM',
    summary:
      'A road trip planning website that maps out every destination you want to go to, for every day of your trip.',
    img: {
      src: roam.src,
    },
    links: {
      github: 'https://github.com/CastillejaCode/journey',
    },
  },
];

export default projects;
