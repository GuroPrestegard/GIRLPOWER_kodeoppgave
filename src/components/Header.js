import styled from "styled-components";

const Header = ({children}) => {
    return (
        <HeaderWrapper>{children}</HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div`
display: flex;
position: relative;
background-color: black ;
width: 100vw ;
height: 100px;
`