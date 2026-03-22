import React from "react";
import CategoryLayout from "./CategoryLayout";
import { categoryData } from "./CategoryData";

function Cookies() {
    return (
        <CategoryLayout
            title="BISCUITS, COOKIES & CRACKERS"
            description="Enjoy our selection of crunchy biscuits, soft cookies, and savoury crackers."
            items={categoryData.cookies}
        />
    );
}

export default Cookies;
