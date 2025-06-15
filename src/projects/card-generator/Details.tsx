import React, { useState } from "react";
import TextField from "../../components/TextField";

const Details: React.FC = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        designation: "",
        email: "",
        phone: "",
        address: "",
        companyName: ""
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [field]: e.target.value
        }));
        console.log(`${field}: `, e.target.value);
    }

    const detailsData = [
        { field: "name", title: "Name", placeholder: "Enter your name" },
        { field: "designation", title: "Designation", placeholder: "Enter your designation" },
        { field: "email", title: "Email", placeholder: "Enter your email" },
        { field: "phone", title: "Phone", placeholder: "Enter your phone number" },
        { field: "address", title: "Address", placeholder: "Enter your address" },
        { field: "companyName", title: "Company Name", placeholder: "Enter your company name" },
    ];

    return (
        <div className="border-red-500 border-2">
            {detailsData.map((item) => (
                <div key={item.field} className="mb-3 w-full">
                    <TextField 
                        title={item.title} 
                        placeholder={item.placeholder}
                        onChange={handleChange(item.field)}
                        value={formValues[item.field]}
                    />
                </div>
            ))}
        </div>
    )
};

export default Details;