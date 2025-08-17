import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    outlined?: boolean;
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 5px;
    padding: 4px 20px 6px;
    width: 86px;
    height: 30px;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;
    color: #fff;
    background: #4e71fe;

    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid #4e71fe;
        background-color: transparent;
        color: #4e71fe;
    `}
   

`