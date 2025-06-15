import React from "react";
import TextField from "../../components/TextField";

const Details: React.FC = () => {

    const detailsData = [
      { title: "Name", placeholder: "Enter your name" },
      { title: "Designation", placeholder: "Enter your designation" },
      { title: "Email", placeholder: "Enter your email" },
      { title: "Phone", placeholder: "Enter your phone number" },
      { title: "Address", placeholder: "Enter your address" },
      { title: "Company Name", placeholder: "Enter your company name" },
    ];
    return (
        <div className="w-full">
            {detailsData.map((items, index) => (
                <div key={index} className="mb-3 w-full">
                    <TextField 
                        title={items.title} 
                        placeholder={items.placeholder}
                    />
                </div>
            ))}
        </div>
    )
};

export default Details;