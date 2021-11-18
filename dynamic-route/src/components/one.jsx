import styled from "styled-components";
import {Link} from "react-router-dom";

const One = ({data}) => {
    const Wrapper = styled.div`
        width: 100%;
        padding: 20px;
        border: 1px solid black;
        box-shadow: 0px 1px 4px #E5E9F2;
    `
    const Image_container = styled.div`
        width: 100%;
        height: 240px;
        // border: 1px solid black;
    `
    const Image = styled.img`
        width: 100%;
        height: 100%;
    `
    const Text_container = styled.div`
        width: 100%;
        padding: 20px;
        display: flex;


    `

    const Name_rate = styled.div`

    `
    const Rating = styled.div`
    
    `
    const Price = styled.div`
    
    `

    return (
        <Wrapper>
            <Image_container>
                <Image src = {data.image} alt = "Something" />
            </Image_container>
            <Text_container>
                <Name_rate>
                    <Rating>{data.name}</Rating>
                    <Rating style = {{padding: "3px", backgroundColor: "green", color: "white", fontWeight: "bold", width: "140px"}}>{data.rating} * * * * * * * </Rating>

                </Name_rate>
                <Price style = {{fontWeight: "bolder", paddingLeft: "10px"}}>Price :- {data.price}</Price>
            </Text_container>
            <Link to = {`/products/${data.id}`} >View details</Link>
        </Wrapper>
    )
}

export {One};