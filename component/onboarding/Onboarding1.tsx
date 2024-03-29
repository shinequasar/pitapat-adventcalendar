import styled from "styled-components";
import { GreenButton } from "../../styles/styledComponentModule";

const OnboardingContainer = styled.div`
  display: ${({ pageNumber, showPage }) =>
    pageNumber === showPage ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
`;

const Text = styled.div`
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  border-radius: 5px;
  
  @media screen and (min-width: 1024px) {
    font-size: 36px;
    color: #ffffff;
  }
`;

const TextRed = styled.span`
  color: #ac473d;
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Image = styled.img`
  width: 252px;
  margin-bottom: 60px;
`;

const NextBtn = styled(GreenButton)`
  margin-top: 30px;
`;

export const Onboarding1 = ({ showPage }) => {
  const pageNumber = 1;

  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Image src="/assets/image/onboarding/deer_head.png" />
      <Text>
        모두가 행복한 빨간 <TextRed>코</TextRed> 루돌프 마을
      </Text>
      <NextBtn>다음으로</NextBtn>
    </OnboardingContainer>
  );
};
