import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import styled from 'styled-components'

function Dropdown() {
  return (
    <li>
      <a href='/'>
        <FontAwesomeIcon icon={faBolt} />
        <span>Shortcodes</span>
      </a>
      <DropdownList>
        <li>
          <ul>
            <li><a href="/">Elements</a></li>
            <li><a href="/">Tabs</a></li>
            <li><a href="/">Tour</a></li>
            <li><a href="/">Accordings</a></li>
            <li><a href="/">Toggles</a></li>
            <li><a href="/">Textbox</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href="/">Elements</a></li>
            <li><a href="/">Buttons</a></li>
            <li><a href="/">Headings</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">Countdown</a></li>
            <li><a href="/">Media</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href="/">Contents</a></li>
            <li><a href="/">Carousel - Course</a></li>
            <li><a href="/">Carousel - Event</a></li>
            <li><a href="/">Carousel - Post</a></li>
            <li><a href="/">Grid - Course</a></li>
            <li><a href="/">Grid - Event</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href="/">Contents</a></li>
            <li><a href="/">Grid - Post</a></li>
            <li><a href="/">Course List Classic</a></li>
            <li><a href="/">Event List Classic</a></li>
            <li><a href="/">Post List Classic</a></li>
            <li><a href="/">Course Table</a></li>
          </ul>
        </li>
      </DropdownList>
    </li>
  )
}

export default Dropdown

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: auto;
  min-height: 200px;
  display: flex;
  grid-template-columns: repeat(4, 200px);
  justify-content: space-between;
  padding: 15px calc((100vw - 1140px) / 2) 9px;
  transform: scaleY(0);
  opacity: 0;
  transform-origin: top center;
  transition: all 250ms ease;

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: -1;
  }

  & li {
    flex: 0 0 25%;

    & ul {
      display: flex;
      flex-flow: column wrap;
    }

    & ul li a {
      color: var(--txt-darkgray);
      background: transparent;
      padding: 10px 15px;
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

    & ul li a:hover {
      background-color: var(--bg-blue);
      color: var(--txt-white);
    }

    & ul > :first-child a {
      color: white;
      position: relative;
    }

    & ul > :first-child a::after {
      content: "";
      position: absolute;
      width: 80%;
      top: 100%;
      border-bottom: solid 1px rgba(255, 255, 255, 0.15);
    }
  }

  & li:is(li, :first-child) {
    border: none;
  }
`
