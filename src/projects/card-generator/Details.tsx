import React from "react";
import TextField from "../../components/TextField";

interface DetailsProps {
    formValues: {
        name: string;
        designation: string;
        email: string;
        phone: string;
        address: string;
        companyName: string;
    };
    onFormChange: (field: string, value: string) => void;
}

const Details: React.FC<DetailsProps> = ({ formValues, onFormChange }) => {
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        onFormChange(field, e.target.value);
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
        <div className="border-red-500 border-2 p-2">
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