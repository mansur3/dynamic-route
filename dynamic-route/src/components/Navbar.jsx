
import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {


    const Wrapper = styled.div`
        width: 1240px;
        height: 50px;
        background-color: gray;
        color: white;
        font-weight: bolder;
    `
    const Container = styled.div`
        height: 100%;
        display: flex;
        align-content : space-between;
        margin-left: 400px;

    `



    return (
        <Wrapper>
            <Container>
                <Link style = {{marginLeft: "140px", color: "white", textDecoration: "none", marginTop: "10px"}} to = "/">HOME</Link>
                <Link  style = {{marginLeft: "140px", color: "white", textDecoration: "none", marginTop: "10px"}} to = "/products">ALL Products</Link>

            </Container>
        </Wrapper>
    )
}

export {Navbar};