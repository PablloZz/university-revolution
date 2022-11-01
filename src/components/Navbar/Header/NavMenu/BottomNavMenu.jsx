import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney, faBookmark, faGraduationCap, faFile, faBolt } from "@fortawesome/free-solid-svg-icons"

function BottomNavMenu() {
  return (
    <NavBottom>
      <LogoWrap>
        <img  src='/images/logo-univeristy-1x.png' width='392' height='80' alt="logo"/>
      </LogoWrap>
      <NavListBottom>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faHouseChimney} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faBookmark} />
            <span>Events</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Courses</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faFile} />
            <span>Pages</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faBolt} />
            <span>Shortcodes</span>
          </a>
        </li>
      </NavListBottom>
    </NavBottom>
  )
}

export default BottomNavMenu

const NavBottom = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;

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

const LogoWrap = styled.div`
  width: 180px;
  height: 40px;
  flex-grow: 1;

  img {
    width: 180px;
    height: 40px;
    object-fit: contain;
  }
`

const NavListBottom = styled.ul`
  display: flex;
  align-items: center;

  & li {
    display: inline-block;
    border-left: solid 1px rgba(255, 255, 255, 0.15);
  }

  & li:first-child {
    border-left: none;
  }

  & li a {
    position: relative;
    height: 80px;
    color: var(--txt-white);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;

    & svg {
      font-size: 11px;
    }

    & span {
      display: inline-block;
      margin-left: 5px;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
    }
  }
`