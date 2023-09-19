import type { Project } from '../types';

import journey from '/src/assets/journey_screenshot.png';
import hydration from '/src/assets/hydration_screenshot.png';
import books from '/src/assets/books_screenshot.png';

export const projects: Project[] = [
  {
    title: 'Journey',
    summary:
      'A road trip planning website that maps out every destination you want to go, for every day of your trip. ',
    img: {
      src: journey,
      alt: 'Preview of website',
    },
    links: {
      github: 'https://github.com/CastillejaCode/journey',
    },
  },
  {
    title: 'Hydration',
    summary:
      'A plant watering website that keeps tracks of when you watered your plants, and also displays when and what you should water next.',
    img: {
      src: hydration,
      alt: 'Preview of website',
    },
    links: {
      website: 'https://github.com/CastillejaCode/water-schedule',
      github: 'https://github.com/CastillejaCode/water-schedule',
    },
  },
  {
    title: 'Book List',
    summary:
      'A book tracking website that records books completed, along with user ratings and reviews.',
    img: {
      src: books,
      alt: 'Preview of website',
    },
    links: {
      github: 'https://github.com/CastillejaCode/book-list',
    },
  },
];
