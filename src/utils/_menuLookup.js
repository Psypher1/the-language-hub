//  import language menu from langMenus
import { frenchMenu, russianMenu, shonaMenu } from "./langMenus";

export const _menuLookup = (langPath) => {
  const lang = langPath.toLowerCase();

  if (lang === "french") return frenchMenu;
  else if (lang === "russian") return russianMenu;
  else if (lang === "shona") return shonaMenu;
  return null;
};
