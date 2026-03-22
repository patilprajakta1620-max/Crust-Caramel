import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function TraditionalSweets() {

    return (

        <CategoryLayout
            title="TRADITIONAL INDIAN SWEETS"
            description="Experience the rich taste of authentic Indian mithai prepared with traditional recipes and premium ingredients, perfect for every celebration."
            items={categoryData.traditionalsweets}
        />

    );

}

export default TraditionalSweets;