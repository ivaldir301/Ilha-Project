import {
  BtnWrapper,
  Link,
  Logo,
  NavBar,
  NavListItem,
  NavlinkItemHighlighted,
  Navlist,
  RegisterAndLoginButton,
} from "./NavbarWithoutLogin.styles";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../../helpers/setLanguage";
import { LanguageSelectorSelect } from "../LanguageSelector/LanguageSelector";

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar>
        <Logo>Ilha</Logo>
        <Navlist>
          <NavlinkItemHighlighted>
            <span>{t("navbar.navbarLink1")}</span>
          </NavlinkItemHighlighted>
          <NavListItem>
            <Link>{t("navbar.navbarLink2")}</Link>
          </NavListItem>
          <NavListItem>
            <Link>{t("navbar.navbarLink3")}</Link>
          </NavListItem>
          <NavListItem>
            <Link>{t("navbar.navbarLink4")}</Link>
          </NavListItem>
          <NavListItem>
            <Link>{t("navbar.navbarLink5")}</Link>
          </NavListItem>
          <NavListItem>
            <RegisterAndLoginButton>
              {t("navbar.navbarLoginButton")}
            </RegisterAndLoginButton>
            |
            <RegisterAndLoginButton>
              {t("navbar.navbarRegisterButton")}
            </RegisterAndLoginButton>
          </NavListItem>
        </Navlist>
        <BtnWrapper>
          <LanguageSelectorSelect
            value={String(localStorage.getItem("language"))}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="pt">{t("navbar.navbarLanguageSelectorOption1")}</option>
            <option value="fr">{t("navbar.navbarLanguageSelectorOption2")}</option>
            <option value="en">{t("navbar.navbarLanguageSelectorOption3")}</option>
            <option value="de">{t("navbar.navbarLanguageSelectorOption4")}</option>
            <option value="tt">{t("navbar.navbarLanguageSelectorOption5")}</option>
            <option value="es">{t("navbar.navbarLanguageSelectorOption6")}</option>
          </LanguageSelectorSelect>
        </BtnWrapper>
      </NavBar>
    </>
  );
};
