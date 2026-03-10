# Contributing

You are more than welcome to contribute to this project. As a matter of fact you are encouraged to, because at the end of the day, this is **your** project

## What We Are Aiming For

#### Home Page

![Home Page](Home.png)

#### Detail Page

![expected](Detail.png)

---

## Project Structure

### Technologies

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com/)
- [AlpineJs](https://chakra-ui.com/)
- [Markdown]()
- [Tabler Icons](https://tabler.io/icons)

### Files and Folders

```
.
├── .github
├── public
├── src/
│   ├── components/
│   │   └── features/
│   │       ├── LanguageSidebar.astro
│   │       └── TopLangNav.astro
│   ├── content/
│   │   ├── learn/
│   │   │   ├── swahili/
│   │   │   │   └── basics.md
│   │   │   └── ...
│   │   └── config.js
│   ├── data
│   ├── icons
│   ├── layouts/
│   │   ├── meta/
│   │   │   ├── BaseHead.astro
│   │   │   └── globals.css
│   │   ├── partials/
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [learnPath]/
│   │   │   └── [slug].astro
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   └── index.astro
│   ├── utils/
│   │   ├── getMenuFromCollection.js
```

---

## How to Contribute

### Adding To Languages

Data rendered on the site is from markdown files located in the `src/content/learn` folder in the root of the project.

- To add to the existing languages, either modify the exisiting file or create a new `.md` file in the appropriate folder
- To add a new language, create a folder in the `src/content/learn` directory with the language

```ts
// src/content
├── learn
│   ├── french
│   │   ├── basics.md
│   ├── russian
│   │   ├── basic.md
│   ├── [your language]
│   │   ├── [your-file].md
```

For the `.md` files, please make sure the frontmater follows this pattern:

```yml
---
title: Russian Basics
description: An introduction to the Russian language
topic: russian
part: 1
live: true
---
```

After you have added your files, send in your pull request and I will hadle the rest. 

> [!IMPORTANT]
> There is a top level **pending** folder. This is for languages I am considering adding or haven't found the people to contribute

### Improving Code

By no means is the code optimal. Feel free to improve it in any way you think would improve it.

So **Pull Request** away! Just mention me on Twitter when you do so I get to your requests as soon as possible. [@Psypher1](https://twitter.com/Psypher1)

---

## SPREAD THE WORD

Sharing is caring. Share this resource with anyone you think would be interested. The more people that add to it, the better it will be.

# AGAIN, THANK YOU!!!
