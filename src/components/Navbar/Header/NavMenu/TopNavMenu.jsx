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
          <a href='/'>Blog</a>
          <DropdownList>
            <li>
              <a href='/'>Blog Listing</a>
            </li>
            <li>
              <a href='/'>Standart Post</a>
            </li>
            <li>
              <a href='/'>Gallery Post</a>
            </li>
            <li>
              <a href='/'>Video Post</a>
            </li>
            <li>
              <a href='/'>Audio Post</a>
            </li>
          </DropdownList>
        </li>
        <li>
          <a href='/'>Portfolio</a>
          <DropdownList>
            <li>
              <a href='/'>Project List</a>
            </li>
            <li>
              <a href='/'>Project Category</a>
            </li>
          </DropdownList>
        </li>
        <li>
          <a href='/'>Shop</a>
          <DropdownList>
            <li>
              <a href='/'>Shop List</a>
            </li>
            <li>
              <a href='/'>Single Product</a>
            </li>
          </DropdownList>
        </li>
        <li>
          <a href='/'>bbPress</a>
        </li>
        <li>
          <a href='/'>BuddyPress</a>
          <DropdownList>
            <li>
              <a href='/'>Members</a>
            </li>
            <li>
              <a href='/'>Site-Wide Activity</a>
            </li>
          </DropdownList>
        </li>
      </NavListTopLeft>
      <SocialMedia>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href='/'>
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
    position: relative;
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
    transition: color 0.25s ease;
  }

  & li :is(a:hover, a:focus) {
    color: var(--txt-white);
  }

  & :is(li:hover a ~ ul, li:focus a ~ ul) {
    opacity: 1;
    transform: scaleY(1);
    top: 40px;
    z-index: 10;
  }
`

const SocialMedia = styled(NavListTopLeft)`
  flex-grow: 0;  

  & li a {
    padding: 0 15px;
  }
`

const DropdownList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  left: 0;
  top: 40px;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top center;
  transition: all 250ms ease;
  background: rgba(0, 0, 0, 0.9);

  & li:is(li, :first-child) {
    border: none;
    min-width: 200px;
  }

  & li a {
    display: block;
    padding: 11px 20px;
    transition: background-color 250ms ease;
  }

  & li a:hover {
    background-color: var(--bg-blue);
  }
`