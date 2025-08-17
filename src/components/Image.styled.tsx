import styled from "styled-components";

export const Image = styled.img.attrs(()=>({
    src: "/src/assets/Rectangle 1.png",
    alt: "main-img",
}))`
    max-width: 280px;
    max-height: 170px;
    align-self: center;
`