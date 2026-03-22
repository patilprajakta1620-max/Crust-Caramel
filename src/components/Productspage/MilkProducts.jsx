import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function MilkProducts() {

    return (

        <CategoryLayout
            title="MILK PRODUCTS"
            description="Our milk products are crafted using fresh dairy ingredients to deliver rich flavour, creamy texture and authentic goodness in every bite."
            items={categoryData.milkproducts}
        />

    );

}

export default MilkProducts;