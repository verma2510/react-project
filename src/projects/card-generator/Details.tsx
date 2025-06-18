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
                { field: "link", title: "Link [QR]", placeholder: "Enter your link" }
            ],
            className: "flex gap-4"
        }
    ];

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-[#1a365d] mb-6">Business Card Details</h2>
        {detailsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={`${group.className} mb-4`}>
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
          <p className="text-sm font-medium text-gray-700 mb-2">Upload Logo</p>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-[#1a365d] file:text-white hover:file:bg-[#2a466d] file:rounded-lg file:cursor-pointer border border-gray-200 rounded-lg p-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:ring-opacity-50 transition-colors duration-200"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">Recommended: Company logo in PNG or JPG format</p>
        </div>
      </div>
    );
};

export default Details;