import { frenchMenu, russianMenu } from "./langMenus";
// import { langPath } from "../../models/langPath";
// const langPath = "French" | "Russian";

export const _menuLookup = (langPath) => {
  const lang = langPath.toLowerCase();

  if (lang === "french") return frenchMenu;
  else if (lang === "russian") return russianMenu;
  return null;
};
