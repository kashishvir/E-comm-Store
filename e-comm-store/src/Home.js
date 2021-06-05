import React from 'react'
import { useStateValue } from './StateProvider';
import './Home.css'
import Product from "./Product";
function Home() {
    
    return (
        <div className="home">
            <div
                className="home_container">
                <img
                    className="home_banner_img"
                    src="https://images.unsplash.com/photo-1556565681-67b9cd907d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="amazon banner image"
                />
                <div
                className="header_search">
                
            </div>
                <div
                    className="home_row">
                    <Product
                        id={1993}
                        title="iPad Pro 2021 — Apple M1 "
                        price={48181.91}
                        rating={4}
                        image="data:image/jpeg;base64,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"/>
                    <Product
                        id={1223}
                        title="New Apple iPhone 11 (128GB) - Purple"
                        price={107400.90}
                        rating={5}
                        image="https://lh3.googleusercontent.com/proxy/c17ktyiCftVan-wkVYT-ladoqAb5h8A3af4z1I-PO7QSMhOOPTizwCxnZJwlin4wOqOEX5Dch0zWEHkUvo9YUI8h1Q4EJXwzZb566FxTGFcC9p7J9lJDKPGQwSJ-T-9QCczVJw"
                    />
                    
                    <Product
                        id={1243}
                        title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
                        price={34990.90}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwN48jiyLtGoX6B39dN6T1keAPR8pEpYEyZ_et5pURMfnMRuSuR332PSL3xt3HJye76jI&usqp=CAU"
                    />
                    <Product
                        id={1221}
                        title="New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
                        price={58999.90}
                        rating={5}
                        image="https://purepng.com/public/uploads/large/apple-watch-pcq.png"
                    />
                </div>
                <div
                    className="home_row">
                    <Product
                        id={1222}
                        title="ONE PLUS 9 PRO - 256GB"
                        price={87899.9}
                        rating={5}
                        image="https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Arcticsky_2080a_euna.png"
                    />
                    <Product
                        id={2223}
                        title="New Apple iPhone 12 - PACIFIC BLUE - 512 GB"
                        price={129900.40}
                        rating={5}
                        image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000"/>
                    <Product
                        id={4223}
                        title="Hapitek iPhone 11 Pro Max Case, iPhone 11 Pro Max Marble Case, Slim Soft Flexible TPU Marble Floral Pattern Protective Cover for Apple iPhone 11 Pro Max 6.5 (Grey Pink)"
                        price={611.08}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71CUGtkAndL._AC_SL1500_.jpg"/>
                    </div>
                <div
                    className="home_row">
                    {/* <Product
                        id={3223}
                        title="Sony X80J 65 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR and Alexa Compatibility KD65X80J- 2021 Model"
                        price={124999.90}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg"/> */}
                </div>
                <div
                    className="home_row">
                    {/* <Product
                        id={1623}
                        title="Maybelline New York Fit Me Blush, Pink, 0.16 fl. oz."
                        price={339.57}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81WD5w1iENL._SL1500_.jpg"/>
                    <Product
                        id={7223}
                        title="MAYBELLINE The Blushed Nudes Eyeshadow Makeup Palette"
                        price={2990}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81TMO14xkdL._SL1500_.jpg"
                    /> */}
                    <Product
                        id={1213}
                        title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey"
                        price={215990.90}
                        rating={4}
                        image="https://www.freepnglogos.com/uploads/macbook-png/macbook-cleanmymac-the-best-mac-cleanup-app-for-macos-get-32.png"
                    />
 
                </div>
                 <div
                    className="home_row">
                    <Product
                        id={1923}
                        title="Apple Pencil First Gen, HD"
                        price={31468.24}
                        rating={4}
                        image="https://imagineonline.store/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc01PIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--38fc00fbf3bcd7a18cabe2b239b28da7067a3b85/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--67fd72b7d81372100065499849b48e0de94bd545/Apple%20Pencil%20for%20ipad%20pro%201_New.png"/>
                    
                    <Product
                        id={12230}
                        title="Lenovo ThinkBook Series, Intel i7-10750H"
                        price={103247.82}
                        rating={4}
                        image="https://www.lenovo.com/medias/lenovo-laptop-thinkbook-series-feature-02-1126.png?context=bWFzdGVyfHJvb3R8MTE4NTA3fGltYWdlL3BuZ3xoMDAvaDA1LzEwNjczMTk5MTg1OTUwLnBuZ3wxYjJjMmMwNjhmNDczNjhlNDk0MmRmMjUyMDMyZGM2ZTY2NmIxNzQ3YTAxYmVjMjJhMjgyMDE3Y2M4NzFkZDkz" />
                    <Product
                        id={1223}
                        title="NIKE SHOES"
                        price={10740.90}
                        rating={5}
                        image="https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG.png"
                    />
                   {/* <Product
                        title=""
                        price=""
                        rating={ }
                        image=""/>*/}
                </div> 
            </div>
        </div>
    )
}

export default Home
