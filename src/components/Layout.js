import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import staccLogo from "../../public/stacc_logo_white.png"
import Header from "./Header";
import Link from "next/link";
import Menu from "./Menu";


const Layout = ({children}) => {

    return (
        <Content>
            <Header>
                <Link href={"/"}>
                    <Image src={staccLogo} layout="fill" objectFit="contain"/>
                </Link>
            </Header>
            <Menu>
                <ul>
                    <li>
                        <Link href={"/allPosts"}>
                            Alle poster
                        </Link>
                    </li>
                    <li>
                        <Link href={"/postsByCategory"}>
                           kategorier
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                           Hjem
                        </Link>
                    </li>
                </ul>
            </Menu>
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

  img {
    cursor: pointer;
  }
`

const LayoutWrapper = styled.div`
  display: flex;
  background-color: #F2C9BB;
  height: 100%;
  justify-content: center;
  overflow-y: scroll;
`

