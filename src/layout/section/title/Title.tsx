import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Containeer";
import ofice from "../../../assets/images/ofice.png"
 export const Title = () => {
    return (
        <StyledTitle>
            <Container>
                <BigTitle>
                    The Guest House is the perfect weekend getaway cabin.
                </BigTitle>
            </Container>
            <img src={ofice}/>
        </StyledTitle>
    );
};

const StyledTitle = styled.section`
    img{
      width: 100%;
      object-fit: cover;
    }
`
const BigTitle = styled.h2`
  color: #52503B;
  text-align: center;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 96px;
  margin: 140px 0px 140px ;
  
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