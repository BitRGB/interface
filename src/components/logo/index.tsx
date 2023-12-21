import styled from "styled-components";
import { RGB_LOGO } from "../../assets";

export const Logo = () => {
    const handleClick = () => {

    }
    return (
        <LogoImage src={RGB_LOGO} onClick={handleClick} />
    )
}

const LogoImage = styled.img`
    height:40px;
    cursor: pointer;
`