

// import React from 'react';
import { Product } from "./Product";

export const Products = ({data}) => {

return(<>
    {/* <h3>Products</h3> */}
    {
        data['DSACARDS'].map((singleCourse)=><Product key ={singleCourse.id} data ={singleCourse}/>)
    }
</>)
};

// export default Products;