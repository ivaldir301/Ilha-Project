import { useTranslation } from "react-i18next";
import {
  DivFirstPageSection,
  FirstPageTitle,
  FirstSectionButton,
  FirstSectionSubtitleIntro,
} from "./FisrtPageSection.styles";

export const FirstPageSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <DivFirstPageSection>
        <FirstPageTitle>{t("firstSection.firstSectionTitle")}</FirstPageTitle>
        <FirstPageTitle>
          {t("firstSection.firstSectionTitleContinuation")}
        </FirstPageTitle>
        <FirstSectionSubtitleIntro>
          {t("firstSection.firstSectionSubTitle")}
        </FirstSectionSubtitleIntro>
        <FirstSectionButton>
          {" "}
          {t("firstSection.fistSectionExploreNowButton")}
        </FirstSectionButton>
      </DivFirstPageSection>
    </>
  );
};
