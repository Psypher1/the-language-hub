//  import language menu from langMenus
import { frenchMenu, russianMenu, shonaMenu, swahiliMenu , ndebeleMenu} from "./langMenus";

export const _menuLookup = (langPath) => {
  const lang = langPath.toLowerCase();
  
  return lang === "french" ? frenchMenu
        : lang === "russian" ? russianMenu
        : lang === "shona" ? shonaMenu
        : lang === "ndebele" ? ndebeleMenu
        :lang === "swahili" ? swahiliMenu
        : null
};

/*  if (lang === "french") return frenchMenu;
  else if (lang === "russian") return russianMenu;
  else if (lang === "shona") return shonaMenu;
  else if (lang === "ndebele") return ndebeleMenu;
  else if (lang === "swahili") return swahiliMenu;
return null; */


//lang ? (lang=="french"):frenchMenu ? (lang=="shona"):shonaMenu ? (lang=="ndebele"):ndebeleMenu ? (lang=="swahili"):swahiliMenu 