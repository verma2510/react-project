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
        companyName: ""
    });

    const handleFormChange = (field: string, value: string) => {
        setFormValues(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="flex justify-center border gap-4 p-4">
            <Details formValues={formValues} onFormChange={handleFormChange} />
            <Preview formValues={formValues} />
        </div>
    );
};

export default CardGenerator;