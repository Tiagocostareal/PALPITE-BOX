import React, { Children } from "react";
import Header from "../Header";
import Footer from "../Footer";


const Layout = ({Children}) => {
    return (
        <div>
            <Header />
            <div className='container mx-auto'>
               {Children}
                </div>
            <Footer />
            </div>
    )
}

export default Layout