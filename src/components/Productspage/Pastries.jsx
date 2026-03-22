import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Pastries() {
    return (
        <CategoryLayout
            title="PASTRIES"
            description="Indulge in our exquisite range of pastries, crafted to perfection for every craving."
            items={categoryData.pastries}
        />
    );
}

export default Pastries;
