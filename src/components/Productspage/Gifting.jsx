import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Gifting() {
    return (
        <CategoryLayout
            title="GIFTING"
            description="Beautifully packaged hampers and gift boxes for every special occasion."
            items={categoryData.gifting}
        />
    );
}

export default Gifting;