import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Cakes() {
    return (
        <CategoryLayout
            title="CAKES"
            description="Celebrate your special moments with our wide range of delicious and beautiful cakes."
            items={categoryData.cakes}
        />
    );
}

export default Cakes;
