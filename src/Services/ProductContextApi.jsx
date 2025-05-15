import React, { createContext, useContext, useEffect, useState } from 'react'
//step1 create the context
const ProductContext = createContext();
//step2 create provider
export const ProductProvider = ({children}) => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
        async function getP() {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Swati27-mathur/a8e35026df259073d5e1d19c9e46df46/raw/511ed29c907c6f8dbc8635a46312b3bbfe1a8dc9/productdata.json');
                if (response.ok) {
                    const data = await response.json();
                    setproduct(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getP()
    }, [])
    return (
        //step3 pass the global data to the children component
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}
//step4 creating custum hook to get product
export const useProduct = ()=>useContext(ProductContext)



