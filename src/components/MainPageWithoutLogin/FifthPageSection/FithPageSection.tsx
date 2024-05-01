import { FifthPageSectionDiv, SectionCardTextDiv, SectionCardWrapper, SectionCards, SectionCardsText, SectionCardsTitle, SectionSubTitle, SectionTitle } from "./FifthPageSection.styles"
import praiaimg from "../../../assets/images/kebrakanela.jpeg"
import mindeloimg from "../../../assets/images/mindeloimg.jpg"
import salboatimg  from "../../../assets/images/fishermanimg.jpg"
import portonovoimg  from "../../../assets/images/cidadevelhaimg.jpg"
import { useTranslation } from "react-i18next"

export const FifthPageSection = () => {
    const { t } = useTranslation()

    return <>
        <FifthPageSectionDiv>
            <SectionTitle>{t("fifthSection.fifthSectionTitle")}</SectionTitle>
            <SectionSubTitle>{t("fifthSection.fifthSectionSubTitle")}</SectionSubTitle>
            <SectionCardWrapper>
                <SectionCards>
                    <img src={praiaimg} style={{width: "100%", height: "230px", borderRadius: "20px 20px 0px 0px"}}/>
                    <SectionCardTextDiv>
                        <SectionCardsTitle>
                            {t("fifthSection.fifthSectionCardTitle1")}
                        </SectionCardsTitle>
                        <SectionCardsText>
                            {t("fifthSection.fifthSectionCardSubTitle1")}
                        </SectionCardsText>
                    </SectionCardTextDiv>
                </SectionCards>
                <SectionCards>
                    <img src={mindeloimg} alt="Mindelo´s photo" style={{width: "100%", height: "230px", borderRadius: "20px 20px 0px 0px"}}/>
                    <SectionCardTextDiv>
                        <SectionCardsTitle>
                            {t("fifthSection.fifthSectionCardTitle2")}
                        </SectionCardsTitle>
                        <SectionCardsText>
                            {t("fifthSection.fifthSectionCardSubTitle2")}
                        </SectionCardsText>
                    </SectionCardTextDiv>
                </SectionCards>
                <SectionCards>
                    <img src={portonovoimg} style={{width: "100%", height: "230px", borderRadius: "20px 20px 0px 0px"}}/>
                    <SectionCardTextDiv>
                        <SectionCardsTitle>
                            {t("fifthSection.fifthSectionCardTitle3")}
                        </SectionCardsTitle>
                        <SectionCardsText>
                            {t("fifthSection.fifthSectionCardSubTitle3")}
                        </SectionCardsText>
                    </SectionCardTextDiv>
                </SectionCards>
                <SectionCards>
                    <img src={salboatimg} style={{width: "100%", height: "230px", borderRadius: "20px 20px 0px 0px"}}/>
                    <SectionCardTextDiv>
                        <SectionCardsTitle>
                            {t("fifthSection.fifthSectionCardTitle4")}
                        </SectionCardsTitle>
                        <SectionCardsText>
                            {t("fifthSection.fifthSectionCardSubTitle4")}
                        </SectionCardsText>
                    </SectionCardTextDiv>
                </SectionCards>
            </SectionCardWrapper>
        </FifthPageSectionDiv>
    </>
}