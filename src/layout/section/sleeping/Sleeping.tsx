import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Containeer";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SleepStyle} from "./sleep/SleepStyle";



export const Sleeping = () => {
    return (
        <StyledSleeping>
            <Container>
                <SectionTitle>Sleeping arrangements.</SectionTitle>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</Subtitle>
                <Wrapper>
                    <FlexWrapper justify={"space-between"}>
                        <SleepStyle iconId={"beds"} title={"Beds"} subtitle={"The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds."}/>
                        <SleepStyle iconId={"bedrooms"} title={"Bedrooms"} subtitle={"Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room."}/>
                        <SleepStyle iconId={"bathrooms"} title={"Bathrooms"} subtitle={"The cabin has three bathrooms, all equipped with showers and one with a bath tub,"}/>
                    </FlexWrapper>
                </Wrapper>
            </Container>
        </StyledSleeping>
    );
};

const StyledSleeping = styled.section`
  background: #FAF8F0;
  padding: 140px 0px 100px;
  
    
`
const Subtitle = styled.p`
  color: #52503B;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 550px;
  margin: 0 auto;
`
const Wrapper = styled.div`
 margin: 32px 0px  ;
`