import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";

type SleepPropsType = {
    iconId: string,
    title: string,
    subtitle: string,
}

export const SleepStyle = (props: SleepPropsType) => {
    return (
        <Sleep>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} width={"64px"} height={"64px"} viewBox={" 0 0 64 64"}/>
                <Titlle>{props.title}</Titlle>
                <Subtitle>{props.subtitle}</Subtitle>
            </FlexWrapper>
        </Sleep>
    );
};
const Sleep = styled.div`
  max-width: 350px;

  }

`
const Titlle = styled.h5`
  padding-top: 12px;
  color: #52503B;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`
const Subtitle = styled.p`
  color: #52503B;
  text-align: center;
  font-size: 14px;
  font-weight: 400;


`