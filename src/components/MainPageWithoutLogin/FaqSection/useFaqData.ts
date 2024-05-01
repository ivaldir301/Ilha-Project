import { v4 as uuid } from "uuid"
import { useTranslation } from "react-i18next"

export function useFaqData(paramether: string){
    const { t } = useTranslation()

    // const data = [
    //     {
    //         id: uuid(),
    //         question: t("faqSection.faqQuestion1"),
    //         answer: t("faqSection.faqAnswer1"),
    //         isOpened: false
    //     },
    //     {
    //         id: uuid(),
    //         question: t("faqQuestion2"),
    //         answer: t("faqAnswer2"),
    //         isOpened: false
    //     },
    //     {
    //         id: uuid(),
    //         question: t("faqQuestion3"),
    //         answer: t("faqAnswer3"),
    //         isOpened: false
    //     },
    //     {
    //         id: uuid(),
    //         question: t("faqQuestion4"),
    //         answer: t("faqAnswer4"),
    //         isOpened: false
    //     },
    //     {
    //         id: uuid(),
    //         question: t("faqQuestion5"),
    //         answer: t("faqAnswer5"),
    //         isOpened: false
    //     }
    // ]

    return t(paramether)
}