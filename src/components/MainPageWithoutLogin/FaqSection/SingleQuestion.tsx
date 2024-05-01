import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordian, Faq, Panel, Paragraph } from "./FaqSection.styles";
import { useState } from "react";
import { data } from "./data";
import { faAngleUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

/*
  As calling the t from useTranslation hook in the data.ts file, while using the custom hook
  useFaqData was retriving error(component has to be used inside components or in custom hooks only. React rules for hooks),
  but when a accordion was clicked the answers where not displayed
  so here in the return in the SingleQuestion component, i just do a map in the data array, to find how many
  questions and answers are there, then get the text from the translation file using a counter variable concatenated with the t value passed

  The other solution tried was putting the data array here, retrieving the data to questions and answers from translation file
  and then using the data, all this inside the SingleQuestion component. Wasn't retrieving errors but when you click on a accordion it would not open the answer
*/

export const SingleQuestion = () => {
  const [openedAccordion, setOpenedAccordion] = useState<string[]>([]);

  const { t } = useTranslation();

  const changeAccordionState = (id: string) => {
    data.map((faq) => {
      if (faq.id === id) faq.isOpened = !faq.isOpened;
    });
  };

  let counter = 0;
  return (
    <>
      {data.map((faq) => {
        counter += 1;
        return (
          <Faq key={faq.id}>
            <Accordian
              onClick={(event) => {
                event.preventDefault();
                setOpenedAccordion((prev) => [...prev, faq.id]);
                changeAccordionState(faq.id);
              }}
            >
              {/* {faq.question} */}
              {t("faqSection.faqQuestion" + counter)}
              {faq.isOpened ? (
                <FontAwesomeIcon icon={faChevronDown} size="2xl" />
              ) : (
                <FontAwesomeIcon icon={faAngleUp} size="2xl" />
              )}
            </Accordian>
            <Panel display={faq.isOpened ? "block" : "none"}>
              <Paragraph>
                {/* {faq.answer} */}
                {t("faqSection.faqAnswer" + counter)}
              </Paragraph>
            </Panel>
          </Faq>
        );
      })}
    </>
  );
};
