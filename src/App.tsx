import './App.css'
import styled from "styled-components";
import {Image} from "./components/Image.styled.tsx";
import {Headline} from "./components/Headline.styled.tsx";
import {Content} from "./components/Content.styled.tsx";
import {BtnWrapper} from "./components/BtnWrapper.tsx";

function App() {

    return (
        <>
            <Card>
                <Image/>
                <Headline>Headline</Headline>
                <Content>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.
                </Content>
                <BtnWrapper/>
            </Card>
        </>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px 22px;
    border-radius: 15px;
    max-width: 300px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`

export default App
