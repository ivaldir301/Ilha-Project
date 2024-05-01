import { CardsTitle, CardsText, FourthPageCards, FourthPageSectionCardWrapper, CardTextDiv, FourtPageSectionTitle, FourthPageSectionDiv } from "./FourthPageSection.styles"
import hotelimg from "../../../assets/images/hotelimg.jpg"
import kebrakanelaimg from "../../../assets/images/kebrakanela.jpeg"
import restaurantimg from "../../../assets/images/restaurantimg.jpg"
import cidadevelhaimg from "../../../assets/images/cidadevelhaimg.jpg"
import { useTranslation } from "react-i18next"

export const FourthPageSection = () => {
    const { t } = useTranslation()
    return <>
        <FourthPageSectionDiv>
            <FourtPageSectionTitle>{t("fourthSection.fourthSectionTitle")}</FourtPageSectionTitle>
                <FourthPageSectionCardWrapper>
                    <FourthPageCards>
                        <img src={kebrakanelaimg} alt="kebra kanela's picture" style={{width: "100%", height: "145px", borderRadius: "20px 20px 0px 0px"}}></img>
                        <CardTextDiv>
                            <CardsTitle>{t("fourthSection.fourthPageCardTitle1")}</CardsTitle>
                            <CardsText>
                                {t("fourthSection.fourthPageCardText1")}
                            </CardsText>
                        </CardTextDiv>
                    </FourthPageCards>
                    <FourthPageCards>
                        <img src={hotelimg} alt="cape-verdean hotel picture" style={{width: "100%", height: "145px", borderRadius: "20px 20px 0px 0px"}}></img>
                        <CardTextDiv>
                            <CardsTitle>{t("fourthSection.fourthPageCardTitle2")}</CardsTitle>
                            <CardsText>
                                {t("fourthSection.fourthPageCardText2")}
                            </CardsText>
                        </CardTextDiv>
                    </FourthPageCards>
                    <FourthPageCards>
                        <img src={restaurantimg} alt="cape-verdean hotel picture" style={{width: "100%", height: "145px", borderRadius: "20px 20px 0px 0px"}}></img>
                        <CardTextDiv>
                            <CardsTitle>{t("fourthSection.fourthPageCardTitle3")}</CardsTitle>
                            <CardsText>
                                {t("fourthSection.fourthPageCardText3")}
                            </CardsText>
                        </CardTextDiv>
                    </FourthPageCards>
                    <FourthPageCards>
                        <img src={cidadevelhaimg} alt="cidade velha's picture" style={{width: "100%", height: "145px", borderRadius: "20px 20px 0px 0px"}}></img>
                        <CardTextDiv>
                            <CardsTitle>{t("fourthSection.fourthPageCardTitle4")}</CardsTitle>
                            <CardsText>
                                {t("fourthSection.fourthPageCardText4")}
                            </CardsText>
                        </CardTextDiv>
                    </FourthPageCards>
                </FourthPageSectionCardWrapper>
        </FourthPageSectionDiv>
    </>
}