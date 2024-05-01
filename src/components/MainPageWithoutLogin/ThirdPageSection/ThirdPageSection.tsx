import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThirdPageSectionDiv, ThirdPageSectionFacts, ThirdPageSectionFactsDiv, ThirdPageSectionFactsParagraphs, ThirdPageSectionTitle, ThirdSectionTitleDiv } from "./ThirdPageSection.styles"
import { faCamera, faCertificate, faHandHoldingHeart, faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"

export const ThirdPageSection = () => {
    const { t } = useTranslation()

    return <>
        <ThirdSectionTitleDiv>            
            <ThirdPageSectionTitle>Como podemos te ajudar?</ThirdPageSectionTitle>
        </ThirdSectionTitleDiv>
        <ThirdPageSectionDiv>
            <ThirdPageSectionFactsDiv>
                <ThirdPageSectionFacts>
                    <FontAwesomeIcon icon={faCertificate} size="2xl" style={{color: "#024a75",}} /> <br/><br/>
                    <ThirdPageSectionFactsParagraphs>{t("thirdSection.thirdSectionCard1")}</ThirdPageSectionFactsParagraphs>
                </ThirdPageSectionFacts>
                <ThirdPageSectionFacts>
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} size="2xl" style={{color: "#024a75"}}/> <br/><br/>
                    <ThirdPageSectionFactsParagraphs>{t("thirdSection.thirdSectionCard2")}</ThirdPageSectionFactsParagraphs>
                </ThirdPageSectionFacts>
                <ThirdPageSectionFacts>
                <FontAwesomeIcon icon={faCamera} size="2xl" style={{color: "#024a75"}}/> <br/><br/>
                    <ThirdPageSectionFactsParagraphs>{t("thirdSection.thirdSectionCard3")}</ThirdPageSectionFactsParagraphs>
                </ThirdPageSectionFacts>
                <ThirdPageSectionFacts>
                <FontAwesomeIcon icon={faHandHoldingHeart} size="2xl" style={{color: "#024a75"}}/> <br/><br/>
                    <ThirdPageSectionFactsParagraphs>{t("thirdSection.thirdSectionCard4")}</ThirdPageSectionFactsParagraphs>
                </ThirdPageSectionFacts>
            </ThirdPageSectionFactsDiv>
        </ThirdPageSectionDiv>
    </>
}