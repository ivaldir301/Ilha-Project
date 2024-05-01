import i18n from "../i18n";

export const setLanguage = (language: string) => {
    i18n.changeLanguage(language);
    window.location.reload();
    localStorage.setItem("language", language)
};

