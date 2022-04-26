import React from "react";
import styled from "styled-components";
import Image from 'next/image'


const Layout = ({children}) => {

    return (
        <LayoutWrapper>

            {children}
        </LayoutWrapper>
    )
}
export default Layout

const LayoutWrapper = styled.div`
  display: flex;
`

const Header = styled.img`
  display: flex;
`