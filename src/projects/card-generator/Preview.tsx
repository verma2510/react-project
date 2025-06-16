import React from "react";

interface PreviewProps {
  formValues: {
    name: string;
    designation: string;
    email: string;
    phone: string;
    address: string;
    companyName: string;
  };
}

const Preview: React.FC<PreviewProps> = ({ formValues }) => {
  const { name, designation, email, phone, address, companyName } = formValues;
  
  return (
    <div className="border-green-500 flex justify-between items-center bg- border-2 px-4 h-[270px] w-[400px]">
      <div>
        <h1 className="text-2xl font-bold">{name || "Name"}</h1>
        <p className="text-lg font-medium">{designation || "Designation"}</p>
        <p className="">{email || "Email"}</p>
        <p className="">{phone || "Phone"}</p>
        <p className="">{address || "Address"}</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=20" alt="Logo" />
        <p className="">{companyName || "Company Name"}</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=Example" alt="QR" />
      </div>
    </div>
  );
};

export default Preview;
