import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Croissants() {
    return (
        <CategoryLayout
            title="CROISSANT, DANISHES & MUFFINS"
            description="Flaky croissants, fruity danishes, and soft muffins to start your day right."
            items={categoryData.croissants}
        />
    );
}

export default Croissants;
