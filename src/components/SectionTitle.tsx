import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: #52503B;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 36px; 
  margin: 0px 0px 15px;
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
  }
`