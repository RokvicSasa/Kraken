import React from "react";
import styled, {useTheme} from "styled-components";
// Assets
import BellIcon from "../../assets/svg/bellIcon";

const EmptyNotification = () => {
  const currentTheme = useTheme();
  return (
    <Wrapper className="flexNullCenter flexColumn">
      <BellIcon color={currentTheme.main} width="47" height="52" />
      <TitleP className="font20 semibold">No Notices Right Now!</TitleP>
      <SubtitleP className="font15">You're up-to-date!</SubtitleP>
    </Wrapper>
  );
};

export default EmptyNotification;

const Wrapper = styled.div`
  padding: 20px 10px;
`;
const TitleP = styled.p`
  color: ${(props) => props.theme.white};
  padding: 20px 0;
`;
const SubtitleP = styled.p`
  color: ${(props) => props.theme.lightText};
`;