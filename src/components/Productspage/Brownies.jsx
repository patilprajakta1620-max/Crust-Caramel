import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Brownies() {
    return (
        <CategoryLayout
            title="BROWNIES"
            description="Enjoy our dense, fudgy and gooey brownies, the ultimate comfort food. We bake with care and love to offer a unique and decadent experience."
            items={categoryData.brownies}
        />
    );
}

export default Brownies;
