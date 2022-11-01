import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function TopNavMenu() {
  return (
    <NavTop>
      <NavListTopLeft>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">bbPress</a>
        </li>
        <li>
          <a href="/">BuddyPress</a>
        </li>
      </NavListTopLeft>
      <SocialMedia>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </li>
      </SocialMedia>
    </NavTop>
  )
}

export default TopNavMenu

const NavTop = styled.nav`
  height: 40px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    height: 40px;
    background: var(--bg-blue);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`

const NavListTopLeft = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;

  & li {
    border-right: solid 1px rgba(255, 255, 255, 0.15);
    display: inline-block;
    height: 40px;
  }

  & li:first-child {
    border-left: solid 1px rgba(255, 255, 255, 0.15);
  }

  & li a {
    color: rgba(255, 255, 255, 0.75);
    background: transparent;
    padding: 11px 20px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    line-height: 100%;
    font-size: 13px;
  }
`

const SocialMedia = styled(NavListTopLeft)`
  flex-grow: 0;  

  & li a {
    padding: 0 15px;
  }
`