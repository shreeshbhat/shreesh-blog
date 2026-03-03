---
layout: ../../layouts/blog.astro
title: Launch your site with Astro
tags: ['Blog']
pubDate: '2021-07-20'
description: Taking a look into Astro, a modern static site generator.
---
I started playing around with [Astro](https://docs.astro.build/) for the past couple of weeks for this website. Astro is a modern static site generator that outputs zero client-side JavaScript by default and puts HTML/CSS front & center. If needed, you can still sprinkle in interactivity by bringing in your own framework components. It supports React, Preact, Vue, and Svelte components so far in its beta release.

### Features I am excited about
* Markdown and Prism code highlighting support
* Renders components to 100% HTML enabling great performance
* Great developer experience with TypeScript, simple syntax, SASS support, and Scoped CSS
* Automatic sitemaps, generates RSS feeds, pagination, and collections
* Astro is free & open source, built by the team behind snowpackjs, and has an active Discord community

Previously, I had setup my website with [11ty](https://www.11ty.dev/). It had a bit of a learning curve for me since it supported older templating languages. The collections & pagination support in `11ty` was nice though. Here's the archived version of that website : [Archived eleventy blog](https://www.eleventy.shreesh.dev/).

After that, I was curious how [StencilJS](https://stenciljs.com/) documentation was prerendered and worked on hacking together Node scripts and StencilJS components for my blog.
I was missing paginated collections and RSS feed in this case. Here's the archived StencilJS version of my website : [Archived stencil blog](https://stencil.shreesh.dev).

Thanks to Astro, now I can finally have best of both worlds! Developing in `.astro` files is very intuitive coming from Angular and StencilJS background.

### Issues I faced
File-based routing by Astro is a good feature for making a blog. However, I wanted to start my markdown filenames with a number, so that I can sort them in VS Code. Then, I could remove the number in code somehow before generating URL for the post. This transformation is not a supported feature yet.

Also, I faced an error while trying to add client-side Javascript in `.astro` files. They do support `<script>` tags for simple stuff, but recommend framework components for complex interactions.

Other than these two errors, it was a smooth experience for me. I had to set the lang attribute in `<html>` & add the meta viewport tag to improve SEO, then I got all 100s in lighthouse report. The APIs for Astro might change from time to time since they are still in beta. However, I love their process of asking community for feedback on RFCs.

