import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Combos() {
    return (
        <CategoryLayout
            title="COMBOS"
            description="Perfect pairings of our most loved cakes, pastries, and savory treats."
            items={categoryData.combos}
        />
    );
}

export default Combos;