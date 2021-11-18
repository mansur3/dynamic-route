
import {useState, useEffect} from "react";
import styled from "styled-components";
// import axios from "axios";
import {products} from "../utils/request";


import {One} from "./one";

const Products = () => {

    const [product, setProduct] = useState([]);
    // const getProduct = async () => {

    //     const {data} =   await products.get("/monitors");
    //     setProduct(data);
    // }

    useEffect( async () => {
        const {data} =   await products.get("/monitors");
        setProduct(data);
        // getProduct();

    }, [])

   
    const Wrapper = styled.div`
        display : grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 5%;
        border: 1px solid black;
    `

    return (
        <Wrapper>
            {
                product.map((e) => (
                    <One data = {e} />
                ))
            }
            
        </Wrapper>
    )
}

export {Products};