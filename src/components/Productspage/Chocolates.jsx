import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Chocolates() {
    return (
        <CategoryLayout
            title="CHOCOLATES"
            description="Handcrafted artisanal chocolates in a variety of exquisite flavors."
            items={categoryData.chocolates}
        />
    );
}

export default Chocolates;