import React from "react";
import Details from "./Details";
import Preview from "./Preview";

const CardMaker: React.FC = () => {
    return(
        <div className="border p-4 flex justify-between">
            <Details />
            <Preview />
        </div>
    )
};

export default CardMaker;