import React, { useState } from "react";
import Details from "./Details";
import Preview from "./Preview";

const CardGenerator: React.FC = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        designation: "",
        email: "",
        phone: "",
        address: "",
        companyName: "",
        photo: "",
        link: ""
    });

    const handleFormChange = (field: string, value: string) => {
        setFormValues(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center gap-8 p-4 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2">
                <Details formValues={formValues} onFormChange={handleFormChange} />
            </div>
            <div className="w-full lg:w-1/2">
                <Preview formValues={formValues} />
            </div>
        </div>
    );
};

export default CardGenerator;