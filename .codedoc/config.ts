
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  src : {
    // base: 'docs/md',
  },
  dest: {
    namespace: '/openlibrary-client-core', // --> your github pages namespace. remove if you are using a custom domain.
    // html: '.static_site'
  },
  page: {
    title: {
      base: 'Openlibrary Client Core'     // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'uddin-a',                    // --> your github username (where your repo is hosted)
      repo: 'openlibrary-client-core',    // --> your github repo name
    }
  },
});
