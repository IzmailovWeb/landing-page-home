import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Allredy = () => {
    return (
        <AllredyStyled>
            <FlexWrapper direction={"column"} align={"center"} justify={"space-between"}>
                <SectionTitle>We're already booked up for the spring — hurry up & secure your stay for the summer.</SectionTitle>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</Text>
                <Box>
                    <StyledBtn>Contact</StyledBtn>
                    <StyledBtn>Book now</StyledBtn>
                </Box>
            </FlexWrapper>
        </AllredyStyled>
    );
};

const AllredyStyled = styled.section`
padding: 100px 0px 100px;
 
  
  ${FlexWrapper}{
    max-width: 660px;
    margin: 0 auto;
    padding: 30px;
  }

`

const Text = styled.p`
  color: #52503B;
  text-align: center;
  font-size: 16px;
  font-weight: 400;

`
const Box = styled.div`
  margin-top: 30px;
`
const StyledBtn = styled.a`
  color: #52503B;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
  border: 4px solid #52503B;
  padding: 16px 26px;
  margin-right: 20px;
  transition: 0.5ms;
  
  &:hover{
    border-radius: 6px;
    background: #52503B;
    color: #FFF;
  }
  
`
