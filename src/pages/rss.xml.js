import rss from '@astrojs/rss'

export const get = () =>
  rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://63bc8f59ae8c710008d6d14e--astro-first-review.netlify.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });