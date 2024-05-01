import { useTranslation } from "react-i18next";
import { FaqTitle, FaqWrapper } from "./FaqSection.styles";

import { SingleQuestion } from "./SingleQuestion";

export const FaqSection = () => {
  const { t } = useTranslation()

  return (
    <>
      <FaqWrapper>
        <FaqTitle>{t("faqSection.faqSectionTitle")}</FaqTitle>
        <SingleQuestion />
      </FaqWrapper>
    </>
  );
};
