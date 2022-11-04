import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney, faBookmark, faGraduationCap, faFile } from "@fortawesome/free-solid-svg-icons"
import Dropdown from "./DropdownList/Dropdown"

function BottomNavMenu() {
  return (
    <NavBottom>
      <LogoWrap>
        <img
          src='/images/logo-univeristy-1x.png'
          width='392'
          height='80'
          alt='logo'
        />
      </LogoWrap>
      <NavListBottom>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faHouseChimney} />
            <span>Home</span>
          </a>
          <DropdownList>
            <li>
              <a href='/'>Homepage V1</a>
            </li>
            <li>
              <a href='/'>Homepage V2</a>
            </li>
            <li>
              <a href='/'>Homepage V3</a>
            </li>
            <li>
              <a href='/'>Homepage V4</a>
            </li>
            <li>
              <a href='/'>Homepage V5</a>
            </li>
            <li>
              <a href='/'>Homepage V6</a>
            </li>
            <li>
              <a href='/'>Homepage V7</a>
            </li>
            <li>
              <a href='/'>Homepage V8</a>
            </li>
            <li>
              <a href='/'>Homepage V9</a>
            </li>
          </DropdownList>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faBookmark} />
            <span>Events</span>
          </a>
          <DropdownList>
            <li>
              <a href='/'>Event Grid</a>
            </li>
            <li>
              <a href='/'>Event Carousel</a>
            </li>
            <li>
              <a href='/'>Event Calendar</a>
            </li>
            <li>
              <a href='/'>Single Event V1</a>
            </li>
          </DropdownList>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Courses</span>
          </a>
          <DropdownList>
            <li>
              <a href='/'>Course List Classic</a>
            </li>
            <li>
              <a href='/'>Course Grid</a>
            </li>
            <li>
              <a href='/'>Course List In Table</a>
            </li>
            <li>
              <a href='/'>Single Course</a>
            </li>
            <li>
              <a href='/'>A LearnDash Course</a>
            </li>
          </DropdownList>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faFile} />
            <span>Pages</span>
          </a>
          <DropdownList>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Gallery Post</a>
            </li>
            <li>
              <a href='/'>Standart Post</a>
            </li>
            <li>
              <a href='/'>Video Post</a>
            </li>
            <li>
              <a href='/'>Members</a>
            </li>
            <li>
              <a href='/'>Members Details</a>
            </li>
            <li>
              <a href='/'>Portfolio</a>
            </li>
            <li>
              <a href='/'>Shop</a>
            </li>
            <li>
              <a href='/'>Single Product</a>
            </li>
            <li>
              <a href='/'>404</a>
            </li>
            <li>
              <a href='/'>Contuct Us</a>
            </li>
            <li>
              <a href='/'>LearnDash Profile</a>
            </li>
          </DropdownList>
        </li>
        <Dropdown />
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
    position: relative;
  }

  & li:last-child {
    position: static;
  }

  & li:first-child {
    border-left: none;
  }

  & li:hover a ~ ul {
    opacity: 1;
    transform: scale(1);
  }

  & li a {
    position: relative;
    height: 80px;
    color: var(--txt-white);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    transition: color 0.25s ease;

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

  & li:hover > a {
    color: var(--txt-blue);
  }
`

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  transform-origin: top center;
  transition: all 250ms ease;
  background: rgba(0, 0, 0, 0.9);
  min-width: 200px;
  min-height: 100px;
  transform: scaleY(0);
  opacity: 0;

  & li {
    border: none;
    display: flex;
  }

  & li a {
    color: var(--txt-darkgray);
    background: transparent;
    padding: 10px 20px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex: 0 0 100%;
    align-items: center;
    justify-content: flex-start;
    line-height: 100%;
    font-size: 13px;
    white-space: nowrap;
    transition: all 250ms ease;
  }

  & li a:hover {
    background-color: var(--bg-blue);
    color: var(--txt-white);
  }
`