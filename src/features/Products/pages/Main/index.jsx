import React from 'react';
import ListProduct from '../../components/ListProduct';

const Main = () => {
    const products = [1,2,3,4,5,6,7,8,9];
    return (
        <ListProduct products={products}/>
    );
}

export default Main;