//  import language menu from langMenus
import {
	frenchMenu,
	japaneseMenu,
	russianMenu,
	shonaMenu,
	swahiliMenu,
} from "./langMenus";

// * Refactored to use tenary operator
export const _menuLookup = (langPath) => {
	const lang = langPath.toLowerCase();

	return lang === "french"
		? frenchMenu
		: lang === "japanese"
		? japaneseMenu
		: lang === "russian"
		? russianMenu
		: lang === "shona"
		? shonaMenu
		: lang === "swahili"
		? swahiliMenu
		: null;
};

/*  if (lang === "french") return frenchMenu;
  else if (lang === "russian") return russianMenu;
  else if (lang === "shona") return shonaMenu;
  else if (lang === "ndebele") return ndebeleMenu;
  else if (lang === "swahili") return swahiliMenu;
return null; */

//lang ? (lang=="french"):frenchMenu ? (lang=="shona"):shonaMenu ? (lang=="ndebele"):ndebeleMenu ? (lang=="swahili"):swahiliMenu
