import React from 'react';
import Photo from "../../../assets/images/together.png"
import styled from "styled-components";
import {Container} from "../../../components/Containeer";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Together = () => {
    return (
        <StyledTogether>
            <img src={Photo}/>
        </StyledTogether>
    );
};
const StyledTogether = styled.section`
  img {
    width: 100%;
    object-fit: cover;
  }
  
`
