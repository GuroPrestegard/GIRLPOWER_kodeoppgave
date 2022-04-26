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
  background-color: black;
  height: 50px;
  color: white;
  align-items: center;
  ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    li {
      :hover {
        opacity: 50%;
      }
      &:first-child{
        padding: 0 1em 0 1em ;
        border-left: none;
      }
      padding: 0 1em 0 1em ;
      list-style: none;
      border-left: solid white 1px;
      
      
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`
