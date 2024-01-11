import React from 'react';
import styled from "styled-components";
import background from "../../../assets/images/IMAGE.png"
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Containeer";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Typewriter from 'typewriter-effect';
export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                    <Icon iconId={"main"} width={"256px"} height={"90px"} viewBox={"0 0 256 90"}/>
                    <MainTitle>Experience the perfect combination of modern housing & natural scenery.</MainTitle>
                    <MainSubtitle>
                        <Typewriter
                            options={{
                                strings: ['Located in Lofoten, norway'],
                                autoStart: true,
                                loop: true,
                                delay: 150,

                            }}/>
                    </MainSubtitle>
                    <Icon iconId={"mouse"}width={"60px"} height={"60px"} viewBox={"0 0 60 60"}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  position: relative;
  background-image: url(${background});
  background-size:100% 100% ;
  width: 100% ;
  min-height: 100vh;
  svg{
    margin-top:150px ;
  }

 }
`


const MainTitle = styled.h1`
  color: #FFF;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 52.8px;
  margin: 35px 0px 35px;
`
const MainSubtitle = styled.p`
  color: #FFF;

  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
`
