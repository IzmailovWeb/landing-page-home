import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Containeer";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooteer>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"nowrap"}>
                    <NavBox>
                        <NavTitle>Pages</NavTitle>
                        <NavList>
                            <ListItem>Start</ListItem>
                            <ListItem>Contact</ListItem>
                            <ListItem>Our history</ListItem>
                            <ListItem>Licenses</ListItem>
                            <ListItem>Instructions</ListItem>
                            <ListItem>Style guide</ListItem>
                        </NavList>
                    </NavBox>
                    <SocialBox>
                        <SociaTitle>Social Media</SociaTitle>
                        <IconBox>
                            <Icon iconId={"media"} width={"32px"} height={"32px"} viewBox={"0 0 32 32"}/>
                            <Icon iconId={"f"} width={"32px"} height={"32px"} viewBox={"0 0 32 32"}/>
                            <Icon iconId={"inst"} width={"32px"} height={"32px"} viewBox={"0 0 32 32"}/>
                        </IconBox>
                    </SocialBox>
                    <InputBox>
                        <InpuTitle>Newsletter</InpuTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                            elementum tristique.</Text>
                        <input placeholder={"Email"}/>
                        <InputBtn>Submit</InputBtn>
                    </InputBox>
                </FlexWrapper>
                <FlexWrapper justify={"center"}>
                    <LogoBox>
                        <Icon iconId={"logoFooter"} width={"200px"} height={"70px"} viewBox={"0 0 200 70"}/>
                        <Copyright>© Guest House, LLC. All rights reserved. Powered by Webflow</Copyright>
                        <Copyright>+47 (0) 702 88 12 34 — example@webflow.io — Klubbvika 12, 8310 Kabelvag,
                            Norway</Copyright>
                    </LogoBox>
                </FlexWrapper>
            </Container>
        </StyledFooteer>
    );
};


const StyledFooteer = styled.footer`
    background-color: #52503B;
    padding: 100px 0px 100px;
    color: #FFF;
`

const NavBox = styled.div`
    width: 280px;
`

const NavTitle = styled.h6`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
`
const NavList = styled.ul`

`
const ListItem = styled.li`
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    & + li {
        margin-top: 10px;
    }

    &:hover {
        transform: translateX(10px);
    }
`

const SocialBox = styled.div`
    width: 280px;
`
const SociaTitle = styled.h6`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
`
const IconBox = styled.div`

    display: flex;
    column-gap: 20px;

    input {
        border-radius: 8px;
        border: 1px solid red;
        background: #F9FAFB;
        width: 100%;
    }
`

const InputBox = styled.div`
    width: 580px;
    position: relative;

    input {
        border-radius: 8px;
        border: 1px solid #E5E7EB;;
        background: #F9FAFB;
        width: 100%;
        padding: 16px 0px 16px 30px;
    }
`

const InpuTitle = styled.h6`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 10px;
`
const InputBtn = styled.button`
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
    background: #52503B;
    width: 61px;
    height: 30px;
    color: #FFF;
    position: absolute;
    right: 7px;
    bottom: 71.5px;
`


const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const Copyright = styled.small`
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`