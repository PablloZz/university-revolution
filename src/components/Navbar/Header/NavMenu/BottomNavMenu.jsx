import React from "react"
import styled from "styled-components"

function BottomNavMenu() {
  return <NavBottom>Bottom</NavBottom>
}

export default BottomNavMenu

const NavBottom = styled.nav`
  height: 80px;

  &::before {
    content: "";
    height: 80px;
    background: var(--bg-black);
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    z-index: -1;
  }
`