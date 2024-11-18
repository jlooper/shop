// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sanity({
        projectId: "a3jw7085",
        dataset: "production",
        useCdn: false, // for static builds
      }),
    ],
});