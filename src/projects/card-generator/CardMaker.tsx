import React from "react";
import Details from "./Details";
import Preview from "./Preview";

const CardMaker: React.FC = () => {
    return(
        <div className="border py-4 px-8 flex justify-center gap-6 items-center">
            <Details />
            <Preview />
        </div>
    )
};

export default CardMaker;