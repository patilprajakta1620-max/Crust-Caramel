import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Breads() {
    return (
        <CategoryLayout
            title="BREADS"
            description="Freshly baked breads every day. From traditional baguettes to healthy multigrain loaves, sourdoughs, and more."
            items={categoryData.breads}
        />
    );
}

export default Breads;
