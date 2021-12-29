import {
  Container,
  LogoContainer,
  LogoDemoResidual,
  Frase,
  ContainerBtn,
  BtnSocial,
  CarouselContainer,
  MusicalNotes,
  OtroContainer,
} from "./components/styledComponents";
import Carousel from "./components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactComponent as LogoFace } from "../src/assets/svg/logo_facebook.svg";
import { ReactComponent as LogoYou } from "../src/assets/svg/logo_youtube.svg";
import { ReactComponent as LogoInst } from "../src/assets/svg/logo_instagram.svg";
import { ReactComponent as Clave } from "../src/assets/svg/clave.svg";
import { ReactComponent as Corchea } from "../src/assets/svg/corchea.svg";
import { ReactComponent as SemiCorchea } from "../src/assets/svg/semi_corchea.svg";
import GlobalFonts from "./components/styledComponents";

const App = () => {
  return (
    <Container>
      <GlobalFonts />
      <LogoContainer>
        <LogoDemoResidual />
      </LogoContainer>
      <Frase>
        {`...no hay apuro...
el rock te espera...`}
      </Frase>
      <ContainerBtn>
        <BtnSocial
          href="https://www.facebook.com/Demo-Residual-2295648380525329/?eid=ARAmQYxi87Qc0T773PQ5kGQVeQMImTZJK--ruS3blBbkTrqjcapVZGn9b2Yyj9TfZGUF5V4Sb7os8yyF"
          target="blank"
        >
          <LogoFace />
        </BtnSocial>
        <BtnSocial
          href="https://www.youtube.com/channel/UCi65RllYx54DR2p6DE6jiRw"
          target="blank"
        >
          <LogoYou />
        </BtnSocial>
        <BtnSocial
          href="https://www.instagram.com/demo_residual_mdq/"
          target="blank"
        >
          <LogoInst />
        </BtnSocial>
      </ContainerBtn>
      <CarouselContainer>
        <OtroContainer>
          <Carousel object-fit= 'fill' />
        </OtroContainer>
      </CarouselContainer>
      <MusicalNotes>
        <Clave />
        <Clave />
        <Clave />
        <Corchea />
        <Corchea />
        <Corchea />
        <SemiCorchea />
        <SemiCorchea />
        <SemiCorchea />
      </MusicalNotes>
    </Container>
  );
};

export default App;
