import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Containeer";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Escape = () => {
    return (
        <StyledEscape>
            <Container>
                <TextWrapper>
                    <Title>The perfect escape.</Title>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio
                        et faucibus. Nulla rhoncus feugiat eros quis consectetur.</Subtitle>
                </TextWrapper>
                <FlexWrapper justify={"space-between"} >
                    <StyledOffers>
                        <Icon iconId={"stove"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Modern Kitchen Appliances</TitleMini>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </WrapperText>
                    </StyledOffers>
                    <StyledOffers>
                        <Icon iconId={"conditioner"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Air Conditioner</TitleMini>
                            <Text>Nullam scelerisque aliquam odio et faucibus.</Text>
                        </WrapperText>
                    </StyledOffers>
                    <StyledOffers>
                        <Icon iconId={"forest"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Outdoor Paths</TitleMini>
                            <Text>Nulla rhoncus feugiat eros quis consectetur.</Text>
                        </WrapperText>
                    </StyledOffers>
                    <StyledOffers>
                        <Icon iconId={"bag"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Storage Solutions</TitleMini>
                            <Text>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</Text>
                        </WrapperText>
                    </StyledOffers>
                    <StyledOffers>
                        <Icon iconId={"coffee"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Coffee Maker</TitleMini>
                            <Text>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</Text>
                        </WrapperText>
                    </StyledOffers>
                    <StyledOffers>
                        <Icon iconId={"wine"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Cutlery Selection</TitleMini>
                            <Text>Duis tristique sed lorem a vestibulum.</Text>
                        </WrapperText>
                    </StyledOffers>
                    <StyledOffers>
                        <Icon iconId={"Scenery"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Natural Scenery</TitleMini>
                            <Text>Cras commodo consequat orci, in convallis risus egestas non.</Text>
                        </WrapperText>
                    </StyledOffers>
                    <StyledOffers>
                        <Icon iconId={"pizza"} width={"36px"} height={"36px"} viewBox={"0 0 36 36"}/>
                        <WrapperText>
                            <TitleMini>Take-away Options</TitleMini>
                            <Text>Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</Text>
                        </WrapperText>
                    </StyledOffers>
                </FlexWrapper>
            </Container>
        </StyledEscape>
    );
};

const StyledEscape = styled.section`
  padding: 140px 0px 100px;
  }

`
const Title = styled.h3`
  color: #52503B;
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;
  position: relative;


  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: #E08631;
    width: 42px;
    height: 8px;
    top: -30px;
    left: 0;

  }
`

const Subtitle = styled.p`
  color: #52503B;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

`
const TextWrapper = styled.div`
  max-width: 600px;
  margin-bottom: 32px;
`

const WrapperText = styled.div`

  margin: 0px 0px 32px 15px;
`
const TitleMini = styled.h5`
  color: #52503B;
  font-size: 14px;
  font-weight: 400;


`
const Text = styled.p`
  color: #333;
  font-size: 14px;
  font-weight: 400;

`
const StyledOffers = styled.div`
  max-width: 560px;
  width: 100%;
  display: flex;
  


`