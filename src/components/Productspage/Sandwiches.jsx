import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Sandwiches() {
    return (
        <CategoryLayout
            title="SANDWICHES & SAVOURIES"
            description="Delicious and hearty sandwiches, quiches, and puffs for a quick bite or a satisfying meal."
            items={categoryData.sandwiches}
        />
    );
}

export default Sandwiches;