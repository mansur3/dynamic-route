import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";


function NavBar({children}) {
  const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: gray;
    color: white;
    font-weight: bolder;
  `
  const Container = styled.div`
    display: flex;
    flex-wrap : wrap;
    margin-left: 760px;
    align-content : space-between;
  `

  return (
    <>
    {/* <Wrapper>
        <Container> */}
          {children}
        {/* </Container>
    </Wrapper> */}
    </>
  )
}

export default NavBar
