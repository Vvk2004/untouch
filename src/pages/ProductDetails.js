import React from 'react'
import Navbar from './global/Navbar'
import ProductDetailsPrd from '../components/ProductDetailsPrd'
import ProductDetailsDec from '../components/ProductDetailsDec'
import ProductDetailsSimilar from '../components/ProductDetailsSimilar'
import Footer from './global/Footer'

function ProductDetails() {
    return (
        <>
            <Navbar />
            <ProductDetailsPrd />
            <ProductDetailsDec />
            <ProductDetailsSimilar />
            <Footer />
        </>
    )
}

export default ProductDetails
