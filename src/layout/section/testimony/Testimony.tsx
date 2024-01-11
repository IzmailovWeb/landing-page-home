import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Containeer";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "./Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Past guests.</SectionTitle>
                <SubTitle>Don't take our word for it! Have a look at what our previous guests say<br/> about their stay
                    at the Guest House.</SubTitle>
                <FlexWrapper align={"flex-start"} justify={"space-between"}>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #FAF8F0;
  padding: 140px 0px 100px;
 

`
const SubTitle = styled.p`
  color: #52503B;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`
