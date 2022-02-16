## Contributing

You are more than welcome to contribute to this project. As a matter of fact you are encouraged to, because at the end of the day, this is **your** project

### What We Are Aiming Formula

#### Home Page

![Home Page](Home.png)

#### Detail Page

![expected](Detail.png)

<br/>

### How to Contribute

Data rendered on the site is from markdown files located in the `learn` folder in the root of the project.

#### Adding Language Files

- Currently there are files for French, Shona and Russian.
- To add to the existing languages, either modify the exisiting file or create a new `.md` file in the appropriate folder
- To add a new language, create a folder in the `learn` directory with the language

```
├── learn
│   ├── french
│   │   ├── basics.md
│   ├── russian
│   │   ├── basic.md
│   ├── [your language]
│   │   ├── [your-file].md
```

For the `.md` files, please make sure the frontmatter matches this pattern:

```yml
---
titlele: French Basics
topic: french
excerpt: An introduction to the French language
part: 01
---
```

After you have added your files, send in your pull request and I will hadle the rest. Or you can add the options for your added language in the following places

In the `langMenus.js` file:

```js
// src/utils/learn/langMenus.js
export const frenchMenu = ["Basics", "Pronouns", "Verbs"];
export const russianMenu = ["Basics", "Nouns"];
export const shonaMenu = ["Basics"];
```

In the `_menuLookup.js` file:

```js
// src/utils/learn/_menuLookup.js
import { frenchMenu, russianMenu, shonaMenu } from "./langMenus";

export const _menuLookup = (langPath) => {
  const lang = langPath.toLowerCase();

  if (lang === "french") return frenchMenu;
  else if (lang === "russian") return russianMenu;
  else if (lang === "shona") return shonaMenu;
  return null;
};
```

<br/>

### Improving Code

By no means is the code optimal. Feel free to improve it in any way you think would improve it.

So **Pull Request** away! Just mention me on Twitter when you do so I get to your requests as soon as possible. [@Psypher1](https://twitter.com/Psypher1)

<br/>

## Spread the word

Sharing is caring. Share this resource with anyone you think would be interested. The more people that add to it, the better it will be.
