import React from 'react';
import Header from '../../components/header/Header';
import ProductCard from '../../components/productcard/ProductCard';
import { SliderData } from '../../data/SliderData';
const Home=()=>{
    return(
    <div>
        <Header slides={SliderData}/>
        <ProductCard/>
    </div>
    )
}
export default Home