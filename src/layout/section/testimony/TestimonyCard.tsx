import {Icon} from "../../../components/icon/Icon";
import React from "react";
import styled from "styled-components";

export const Card = () =>{
    return (
        <TestimonyCard>
            <Wrapper>
                <Icon iconId={"star"} width={"18px"} height={"18px"} viewBox={" 0 0 18 18"}/>
                <Icon iconId={"star"} width={"18px"} height={"18px"} viewBox={" 0 0 18 18"}/>
                <Icon iconId={"star"} width={"18px"} height={"18px"} viewBox={" 0 0 18 18"}/>
                <Icon iconId={"star"} width={"18px"} height={"18px"} viewBox={" 0 0 18 18"}/>
                <Icon iconId={"star"} width={"18px"} height={"18px"} viewBox={" 0 0 18 18"}/>
            </Wrapper>
            <CardTitle>We had an amazing stay at the Guest House!</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
            </CardText>
            <UserName>Nate Davidsson</UserName>
        </TestimonyCard>
    );
};

 const TestimonyCard = styled.div`
  padding: 30px 50px 30px 30px;
  border-radius: 4px;
  border: 1px solid rgba(82, 80, 59, 0.10);
  background: #FFF;
  max-width: 550px;
  margin: 32px 20px 0px 20px;
`
const CardTitle = styled.h5`
  margin-top: 10px;
`
const CardText = styled.p`
  margin: 10px 0 20px;
`
const UserName = styled.span`


  margin-left: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 20px;
    background-color: #E08631;
    left: -10px;
  }
`
const Wrapper = styled.div`
display: flex;
`

