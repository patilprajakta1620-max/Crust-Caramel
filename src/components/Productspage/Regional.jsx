import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Regional() {
    return (
        <CategoryLayout
            title="STREET FOODS"
            description="Enjoy the vibrant flavors of classic street food favorites made fresh and full of taste. From crispy snacks to savory delights, every bite brings the authentic charm of street-side treats."
            items={categoryData.teacakes}
        />
    );
}

export default Regional;