import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import staccLogo from "../../public/stacc_logo_white.png"
import Header from "./Header";
import Head from "next/head";


const Layout = ({children}) => {

    return (
        <Content>
          <Header>
            <Image src={staccLogo} layout="fill" objectFit="contain" />
          </Header>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        </Content>
    )
}
export default Layout

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const LayoutWrapper = styled.div`
  display: flex;
  background-color: pink;
  height: 100%;
  justify-content: center;
  overflow-y: scroll;
`

