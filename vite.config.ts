import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default {
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: true,
      targets: browserslistToTargets(browserslist('defaults')),
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
};
