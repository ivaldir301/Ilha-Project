import {
  LinkBox,
  LinkBoxUlLi,
  Footer,
  Copyright,
  CopyrightText,
  HelpCenterBox,
} from "./PageFooter.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../../helpers/setLanguage";
import { LanguageSelectorSelect } from "../LanguageSelector/LanguageSelector";

export const PageFooter = () => {
  const { t } = useTranslation();

  return (
    <>
      <Footer>
        <div>
          <b>{t("footerSection.footerFistSectionTitle")}</b>
          <LinkBox>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerFirstSectionOptions1")}</a>
            </LinkBoxUlLi>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerFirstSectionOptions12")}</a>
            </LinkBoxUlLi>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerFirstSectionOptions13")}</a>
            </LinkBoxUlLi>
          </LinkBox>
        </div>
        <div>
          <b>{t("footerSection.footerSecondSectionTitle")}</b>
          <LinkBox>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerSecondSectionOption")}</a>
            </LinkBoxUlLi>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerSecondSectionOption2")}</a>
            </LinkBoxUlLi>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerSecondSectionOption3")}</a>
            </LinkBoxUlLi>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerSecondSectionOption4")}</a>
            </LinkBoxUlLi>
          </LinkBox>
        </div>
        <div>
          <b>{t("footerSection.footerThirdSectionTitle")}</b>
          <LinkBox>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerThirdSectionOption")}</a>
            </LinkBoxUlLi>
            <LinkBoxUlLi>
              <a>{t("footerSection.footerThirdSectionOption2")}</a>
            </LinkBoxUlLi>
          </LinkBox>
        </div>
        <div>
          <b>{t("footerSection.footerThirdSectionTitle")}</b>
          <LinkBox>
            <LinkBoxUlLi>
              <HelpCenterBox>
                {t("footerSection.footerFourthSectionHelpCenterBox")}
              </HelpCenterBox>
            </LinkBoxUlLi>
          </LinkBox>
          <span>
            {t("footerSection.footerFourthSectionLanguageSelector")}:{" "}
          </span>
          <LanguageSelectorSelect
            value={String(localStorage.getItem("language"))}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="pt">
              {t("footerSection.footerLanguageSelectorOption1")}
            </option>
            <option value="fr">
              {t("footerSection.footerLanguageSelectorOption2")}
            </option>
            <option value="en">
              {t("footerSection.footerLanguageSelectorOption3")}
            </option>
            <option value="de">
              {t("footerSection.footerLanguageSelectorOption4")}
            </option>
            <option value="tt">
              {t("footerSection.footerLanguageSelectorOption5")}
            </option>
            <option value="es">
              {t("footerSection.footerLanguageSelectorOption6")}
            </option>
          </LanguageSelectorSelect>
        </div>
        <div>
          <b>{t("footerSection.footerFollowUsSectionTitle")}</b>
          <LinkBox>
            <LinkBoxUlLi>
              <a>
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>{" "}
              <a>
                <FontAwesomeIcon icon={faSquareInstagram} size="xl" />
              </a>{" "}
              <a>
                <FontAwesomeIcon icon={faYoutube} size="xl" />{" "}
                <a>
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>{" "}
              </a>{" "}
            </LinkBoxUlLi>
          </LinkBox>
        </div>
      </Footer>
      <Copyright>
        <CopyrightText>
          <FontAwesomeIcon icon={faCopyright} />{" "}
          {t("footerSection.footerCopyWrightText")}{" "}
        </CopyrightText>
      </Copyright>
    </>
  );
};
