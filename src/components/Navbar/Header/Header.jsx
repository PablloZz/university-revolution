import React from "react"
import styled from "styled-components"
import TopNavMenu from "./NavMenu/TopNavMenu"
import BottomNavMenu from "./NavMenu/BottomNavMenu/BottomNavMenu"

function Header() {
  return (
    <HeaderBlock>
      <Container>
        <TopNavMenu />
        <BottomNavMenu />
      </Container>
    </HeaderBlock>
  )
}

export default Header

const HeaderBlock = styled.header`
  height: 120px;
  width: 100%;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
`
