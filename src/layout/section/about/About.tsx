import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

 export const About = () => {
    return (
        <StyledAbout>
            <StyledWrapper>
                <FlexWrapper  justify={"center"}>
                    <Text>
                        The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago, Lofoten, it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
                    </Text>
                    <div>
                        <Text>
                            Below you'll find information about the accommodation and what's included in the price. Don't hesitate to reach out to us vi the contact page if you have any questions around your stay.
                        </Text>
                        <AboutButton>Book now</AboutButton>
                    </div>
                </FlexWrapper>
            </StyledWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
 background-color: #FAF8F0;
  position: relative;
  
  
  &::before{
    content: "";
    display: inline-block;
    width: 42px;
    height: 8px;
    background-color: #E08631;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
`
const StyledWrapper = styled.div`
max-width: 770px;
  margin: 0 auto;
  ${FlexWrapper}{
    gap: 40px;
  }
`

const Text = styled.p`
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

`
const AboutButton = styled.button`
  border-radius: 6px;
  background: #52503B;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; 
  padding: 11px 18px;
  margin-top: 53px;
`