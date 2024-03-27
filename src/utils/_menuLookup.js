//  import language menu from langMenus
import {
	arabicMenu,
	frenchMenu,
	japaneseMenu,
	russianMenu,
	shonaMenu,
	swahiliMenu,
} from "./langMenus";

// * Refactored to use tenary operator
export const _menuLookup = (langPath) => {
	const lang = langPath.toLowerCase();

	switch (lang) {
		case "arabic":
			return arabicMenu;
		case "french":
			return frenchMenu;
		case "japanese":
			return japaneseMenu;
		case "russian":
			return russianMenu;
		case "shona":
			return shonaMenu;
		case "swahili":
			return swahiliMenu;
		default:
			return null;
	}
};

/*  if (lang === "french") return frenchMenu;
  else if (lang === "russian") return russianMenu;
  else if (lang === "shona") return shonaMenu;
  else if (lang === "ndebele") return ndebeleMenu;
  else if (lang === "swahili") return swahiliMenu;
return null; */

//lang ? (lang=="french"):frenchMenu ? (lang=="shona"):shonaMenu ? (lang=="ndebele"):ndebeleMenu ? (lang=="swahili"):swahiliMenu
