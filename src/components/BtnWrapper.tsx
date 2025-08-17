import {StyledBtn} from "./Buttons.styled.tsx";
import styled from "styled-components";

export function BtnWrapper() {
    return (
        <Wrapper>
            <StyledBtn>See more</StyledBtn>
            <StyledBtn outlined>Save</StyledBtn>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`