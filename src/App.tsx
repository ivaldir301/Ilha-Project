import { Nav } from "./components/Common/Navbar/NavbarWithoutLogin";
import { GlobalStyle } from "./components/Common/Global.styles";
import { FirstPageSection } from "./components/MainPageWithoutLogin/FirstPageSection/FirstPageSection";
import { SecondPageSection } from "./components/MainPageWithoutLogin/SecondPageSection/SecondPageSection";
import { ThirdPageSection } from "./components/MainPageWithoutLogin/ThirdPageSection/ThirdPageSection";
import { FourthPageSection } from "./components/MainPageWithoutLogin/FourthPageSection/FourthPageSection";
import { PageImageGridSection } from "./components/MainPageWithoutLogin/PageImageGrid/PageImageGridSection";
import { FifthPageSection } from "./components/MainPageWithoutLogin/FifthPageSection/FithPageSection";
import { SixthPageSection } from "./components/MainPageWithoutLogin/SixthPageSection/SixthPageSection";
import { SeventhPageSection } from "./components/MainPageWithoutLogin/SeventhPageSection/SeventhPageSection";
import { FaqSection } from "./components/MainPageWithoutLogin/FaqSection/FaqSection";
import { PageFooter } from "./components/Common/Footer/PageFooter";
import { useState } from "react";
import MenuMobile from "./components/Common/MenuMobile/MenuMobile";

function App() {
  const [responsiveMenuState, setResponsiveMenuState] = useState<boolean>(false)

  return (
    <>
      <GlobalStyle />
      <MenuMobile
        menuIsVisible={responsiveMenuState}
        setMenuIsVisible={setResponsiveMenuState}
      />
      <Nav
        menuIsVisible={responsiveMenuState}
        setMenuIsVisible={setResponsiveMenuState}  
      />
      <FirstPageSection />
      <PageImageGridSection />
      <SecondPageSection />
      <ThirdPageSection />
      <FourthPageSection />
      <FifthPageSection />
      <SixthPageSection />
      <SeventhPageSection />
      <FaqSection />
      <PageFooter />
    </>
  );
}

export default App;
