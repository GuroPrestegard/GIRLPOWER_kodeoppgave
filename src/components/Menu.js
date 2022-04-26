import styled from "styled-components";

const Menu = ({children}) => {
    return (
        <HeaderWrapper>
            {children}
        </HeaderWrapper>
    )
}

export default Menu

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: black;
  width: 100vw;
  height: 100px;
  color: white;
`
