import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Beverages() {
    return (
        <CategoryLayout
            title="JUICES"
            description="Squeeze the day with a glass of pure fruity freshness."
            items={categoryData.beverages}
        />
    );
}

export default Beverages;