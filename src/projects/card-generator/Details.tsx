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
        photo: string;
        link: string;
    };
    onFormChange: (field: string, value: string) => void;
}

const Details: React.FC<DetailsProps> = ({ formValues, onFormChange }) => {
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        onFormChange(field, e.target.value);
    }

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onFormChange('photo', reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const detailsGroups = [
        {
            groupFields: [
                { field: "name", title: "Name", placeholder: "Enter your name" },
                { field: "designation", title: "Designation", placeholder: "Enter your designation" }
            ],
            className: "flex gap-4"
        },
        {
            groupFields: [
                { field: "email", title: "Email", placeholder: "Enter your email" },
                { field: "phone", title: "Phone", placeholder: "Enter your phone number" }
            ],
            className: "flex gap-4"
        },
        {
            groupFields: [
                { field: "address", title: "Address", placeholder: "Enter your address" }
            ],
            className: "w-full"
        },
        {
            groupFields: [
                { field: "companyName", title: "Company Name", placeholder: "Enter your company name" },
                { field: "link", title: "Link", placeholder: "Enter your link" }
            ],
            className: "flex gap-4"
        }
    ];

    return (
      <div className="border-red-500 border-2 p-2 space-y-3">
        {detailsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={group.className}>
            {group.groupFields.map((item) => (
              <div key={item.field} className="flex-1">
                <TextField
                  title={item.title}
                  placeholder={item.placeholder}
                  onChange={handleChange(item.field)}
                  value={formValues[item.field]}
                />
              </div>
            ))}
          </div>
        ))}
        <div className="w-full">
          <p className="mb-1 font-medium">Photo</p>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full border border-gray-300 rounded-lg bg-white p-2"
          />
        </div>
      </div>
    );
};

export default Details;