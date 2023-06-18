import React from 'react';
import pic1 from "../../../../images/products/suppl.png";
import pic2 from "../../../../images/products/image_161-removebg-preview 1.png";
import pic3 from "../../../../images/products/omega.png";
import pic4 from "../../../../images/products/suppl copy.png";
import cart from "../../../../images/Icons/Vector.png";
import "./SameProducts.scss";


const products = [
    {title: "Рыбий жир Омега 3", price: "120 сом", image: pic1},
    {title: "Калций 600 мг", price: "120 сом", image: pic2},
    {title: "Рыбий жир Омега 3", price: "120 сом", image: pic3},
    {title: "Калций 600 мг", price: "120 сом", image: pic4},
]


const SameProducts = () => {
    return (
        <div className='same__products flex flex-jc-c flex-fd-c'>
            <h3>Окшош товарлар</h3>
            <div className='products flex flex-fw-w flex-jc-sa'>
                {products.map(product => {
                    return <div className='product flex flex-fd-c flex-jc-c flex-ai-c'>
                                <img alt={product.title} style={{height: "300px"}} src={product.image}/>
                                <p>{product.title}</p>
                                <h5>{product.price}</h5>
                                <button className='round_pink_button'><img src={cart}/></button>
                            </div>
                })}
            </div>
        </div>
    );
};

export default SameProducts;