import { useTranslation } from "react-i18next"
import { LinkBox, SectionPlacesWrapper, SectionTitle, LinkBoxUlLi } from "./SixtihPageSection.styles"
import { SectionDiv } from "./SixtihPageSection.styles"

export const SixthPageSection = () => {
    const { t } = useTranslation()

    return <>
        <SectionDiv>
            <SectionTitle>{t("sixthSection.sixthSectionTitle")}</SectionTitle>
            <SectionPlacesWrapper>
                <div>
                    <LinkBox>
                        <LinkBoxUlLi>Tarrafal</LinkBoxUlLi>
                        <LinkBoxUlLi>Serra Malagueta</LinkBoxUlLi>
                        <LinkBoxUlLi>Rui Vaz</LinkBoxUlLi>
                        <LinkBoxUlLi>Assomada</LinkBoxUlLi>
                        <LinkBoxUlLi>Sao Lorenzo dos Orgãos</LinkBoxUlLi>
                        <LinkBoxUlLi>São Miguel</LinkBoxUlLi>
                        <LinkBoxUlLi>Cidade Velha</LinkBoxUlLi>
                    </LinkBox>
                </div>
                <div>
                    <LinkBox>
                        <LinkBoxUlLi>Tarrafal</LinkBoxUlLi>
                        <LinkBoxUlLi>Serra Malagueta</LinkBoxUlLi>
                        <LinkBoxUlLi>Rui Vaz</LinkBoxUlLi>
                        <LinkBoxUlLi>Assomada</LinkBoxUlLi>
                        <LinkBoxUlLi>Sao Lorenzo dos Orgãos</LinkBoxUlLi>
                        <LinkBoxUlLi>São Miguel</LinkBoxUlLi>
                        <LinkBoxUlLi>Cidade Velha</LinkBoxUlLi>
                    </LinkBox>
                </div>
                <div>
                    <LinkBox>
                        <LinkBoxUlLi>Tarrafal</LinkBoxUlLi>
                        <LinkBoxUlLi>Serra Malagueta</LinkBoxUlLi>
                        <LinkBoxUlLi>Rui Vaz</LinkBoxUlLi>
                        <LinkBoxUlLi>Assomada</LinkBoxUlLi>
                        <LinkBoxUlLi>Sao Lorenzo dos Orgãos</LinkBoxUlLi>
                        <LinkBoxUlLi>São Miguel</LinkBoxUlLi>
                        <LinkBoxUlLi>Cidade Velha</LinkBoxUlLi>
                    </LinkBox>
                </div>
                <div>
                    <LinkBox>
                        <LinkBoxUlLi>Tarrafal</LinkBoxUlLi>
                        <LinkBoxUlLi>Serra Malagueta</LinkBoxUlLi>
                        <LinkBoxUlLi>Rui Vaz</LinkBoxUlLi>
                        <LinkBoxUlLi>Assomada</LinkBoxUlLi>
                        <LinkBoxUlLi>Sao Lorenzo dos Orgãos</LinkBoxUlLi>
                        <LinkBoxUlLi>São Miguel</LinkBoxUlLi>
                        <LinkBoxUlLi>Cidade Velha</LinkBoxUlLi>
                    </LinkBox>
                </div>
            </SectionPlacesWrapper>
        </SectionDiv>
    </>
}