import React from 'react'
import Navbar from './global/Navbar'
import ProductSlider from '../components/ProductSlider'
import ProductsFeatures from '../components/ProductsFeatures'
import ProductsPrdPic from '../components/ProductsPrdPic'
import Footer from './global/Footer'

function Products() {
    return (
        <>
            <Navbar />
            <ProductSlider />
            <ProductsFeatures />
            <ProductsPrdPic />
            <Footer />
        </>
    )
}

export default Products
