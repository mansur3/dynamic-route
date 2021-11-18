import {useState, useEffect} from "react";
import styled from "styled-components";
// import axios from "axios";
import {products} from "../utils/request";
import {useParams} from "react-router-dom";


const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const getProduct = async () => {
        


        const {data} =   await products.get(`/monitors/${id}`);
        // setPost(data);
        setProduct(data); //
    }

    useEffect(async () => {

        
        getProduct();

    }, [])

    const Wrapper = styled.div`
        width: 1240px;
        // border: 1px solid black;
        display: flex;
        grid-template-colomns: 60% 35%;
        grid-gap: 5%;

    `
    const Image_container = styled.div`
        // border: 1px solid black;
        width: 600px;
        heigth: 400px;
        // float: left;
       
    `
    const Image = styled.img`
        width: 80%;
        height: 100%;
    `
    const Details = styled.div`
    
        // border: 1px solid black;
        // float: left;
        
    `

    return (
        <Wrapper>
            <Image_container>
                <Image src = {product.image} alt = "check" />
            </Image_container>
            <Details>
                <h3>{product.name}</h3>
                <div>Rating :- <span style = {{fontWeight: "bold", color: "white", backgroundColor : "green"}}>{product.rating}******</span></div>
                <div>Price <span style={{fontWeight: "bold"}}>INR {product.price}</span></div>
                <div style = {{backgroundColor: "blue", color: "white", fontWeight: "bolder", fontSize: "40px", marginTop : "30px", borderRadius: "10px"}}>Are you Interested to see More..</div>
            </Details>
        </Wrapper>
    )
}
export {Product};