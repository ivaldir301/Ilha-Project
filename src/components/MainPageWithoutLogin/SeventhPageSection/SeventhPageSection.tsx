import { useTranslation } from "react-i18next"
import { SectionCards, SectionCardsTestimonialPersonName, SectionCardsTestimonialText, SectionCardsWrapper, SectionDiv, SectionTitle } from "./SeventhPageSection.styles"

export const SeventhPageSection = () => {
    const { t } = useTranslation()

    return <>
        <SectionDiv>
            <SectionTitle>{t("seventhSection.seventhSectionTitle")}</SectionTitle>
            <SectionCardsWrapper>
                <SectionCards>
                    <SectionCardsTestimonialText>
                        "{t("seventhSection.seventhSectionTestimonial1")}"
                    </SectionCardsTestimonialText>
                    <SectionCardsTestimonialPersonName>
                        {t("seventhSection.seventhSectionTestimonialPerson1")}
                    </SectionCardsTestimonialPersonName>
                </SectionCards>
                <SectionCards>
                    <SectionCardsTestimonialText>
                        "{t("seventhSection.seventhSectionTestimonial2")}"
                    </SectionCardsTestimonialText>
                    <SectionCardsTestimonialPersonName>
                        {t("seventhSection.seventhSectionTestimonialPerson2")}
                    </SectionCardsTestimonialPersonName>
                </SectionCards>
                <SectionCards>
                    <SectionCardsTestimonialText>
                        "{t("seventhSection.seventhSectionTestimonial3")}"
                    </SectionCardsTestimonialText>
                    <SectionCardsTestimonialPersonName>
                        {t("seventhSection.seventhSectionTestimonialPerson3")}
                    </SectionCardsTestimonialPersonName>
                </SectionCards>
            </SectionCardsWrapper>
        </SectionDiv>
    </>
}