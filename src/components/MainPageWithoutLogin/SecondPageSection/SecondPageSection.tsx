import { SecondPageNumberSection, SecondSectionFactSubTitle, SecondSectionFactTitle, SecondSectionFacts } from "./SecondPageSection.styles"
import { useTranslation } from "react-i18next"

export const SecondPageSection = () => {
    const { t } = useTranslation()

    return <>
      <SecondPageNumberSection>
            <SecondSectionFacts>
                <SecondSectionFactTitle>{t("secondSection.secondSectionFactTitle1")}</SecondSectionFactTitle>
                <SecondSectionFactSubTitle>{t("secondSection.secondSectionFactSubTitle1")}</SecondSectionFactSubTitle>
            </SecondSectionFacts>
            <SecondSectionFacts>
                <SecondSectionFactTitle>{t("secondSection.secondSectionFactTitle2")}</SecondSectionFactTitle>
                <SecondSectionFactSubTitle>{t("secondSection.secondSectionFactSubTitle2")}</SecondSectionFactSubTitle>
            </SecondSectionFacts>
            <SecondSectionFacts>
                <SecondSectionFactTitle>{t("secondSection.secondSectionFactTitle3")}</SecondSectionFactTitle>
                <SecondSectionFactSubTitle>{t("secondSection.secondSectionFactSubTitle3")}</SecondSectionFactSubTitle>
            </SecondSectionFacts>
        </SecondPageNumberSection>
    </>
}
