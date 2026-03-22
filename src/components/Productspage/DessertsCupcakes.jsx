import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function DessertsCupcakes() {
    return (
        <CategoryLayout
            title="DESSERTS & CUPCAKES"
            description="A meal that ends with dessert is a celebration in itself! Pick a treat from our range of desserts including tarts, tiramisu cup, banoffee high and cupcakes."
            items={categoryData.desserts}
        />
    );
}

export default DessertsCupcakes;