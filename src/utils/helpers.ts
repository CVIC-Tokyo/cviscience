import en from "@/locales/en";
import ja from "@/locales/ja";

export const getLocaleData = (locale: string) => {
  switch (locale) {
    case "en":
      return en;
    case "ja":
      return ja;
    default:
      return en;
  }
};
