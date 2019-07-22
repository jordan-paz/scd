import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import icon from "../images/gatsby-icon.png"
import { FaBars } from "react-icons/fa"

const StyledHeader = styled.header`
  display: grid;
  grid: 90px / 1fr 3fr 1fr;
  background-color: #fff;
`

const StyledImg = styled.img`
  max-height: 70%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledDiv>
      <StyledImg src={icon} />
    </StyledDiv>
    <StyledDiv>{""}</StyledDiv>
    <StyledDiv>
      <button style={{ height: "50%", width: "50%", padding: "0" }}>
        <FaBars style={{ height: "100%", width: "100%", padding: "0" }} />
      </button>
    </StyledDiv>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
