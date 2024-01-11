import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Containeer";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <a><Icon iconId={"logo"} width={"128px"} height={"45px"} viewBox={"0 0 128 45"}/></a>
                    <HeaderMenu>
                        <MenuList>
                            <ListItem>
                                <Link>Start</Link>
                            </ListItem>
                            <ListItem>
                                <Link>Contact</Link>
                            </ListItem>
                            <ListItem>
                                <Link>Our history</Link>
                            </ListItem>
                        </MenuList>
                    </HeaderMenu>
                    <HeaderButton>Book now</HeaderButton>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #52503B;
  padding: 10px;


`
const HeaderMenu = styled.nav`

`
const MenuList = styled.ul`
  display: flex;
  gap: 25px;
`
const ListItem = styled.li`
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  
  &:hover{
    transform: translateY(-1.5px);
  }
`
const Link = styled.a`

`
const HeaderButton = styled.button`
  width: 117px;
  height: 42px;
  border-radius: 6px;
  background: #FFF;


  &:hover{
    transform: translateY(-1.5px);
  }

`