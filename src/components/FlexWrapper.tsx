import styled from "styled-components";

type FlexWrapperPropsType = {
    align?:string,
    justify?:string,
    wrap?:string,
    direction?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
 display: flex;
 align-items: ${props =>props.align || "stretch"};
  justify-content: ${props => props.justify || "flex-start"};
  flex-wrap: ${props => props.wrap || "wrap"};
  flex-direction: ${props => props.direction || "row"};
  height: 100%;
`