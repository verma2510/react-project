import React, { useEffect, useRef } from "react";
import ExportButtons from "../../components/ExportButtons";

interface PreviewProps {
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
}

const Preview: React.FC<PreviewProps> = ({ formValues }) => {
  const { name, designation, email, phone, address, companyName, photo, link } =
    formValues;
  const linkUrl = link ? link : "https://github.com/verma2510";
  const componentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("ComponentRef:", componentRef.current);
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div
        ref={componentRef}
        className="flex text-[#000] bg-[rgb(255,255,255)] justify-between items-center border-2 px-4 h-[270px] w-[400px]"
      > 
        <div>
          <h1 className="text-2xl font-bold">{name || "Name"}</h1>
          <p className="text-lg font-medium">{designation || "Designation"}</p>
          <p className="">{email || "Email"}</p>
          <p className="">{phone || "Phone"}</p>
          <p className="">{address || "Address"}</p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img
            src={
              photo || "https://avatars.githubusercontent.com/u/162727802?v=4"
            }
            alt="Profile"
            className="w-20 h-20 object-cover rounded-full mb-2"
          />
          <p className="">{companyName || "Company Name"}</p>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${linkUrl}&size=220x220&margin=0`}
            alt="QR"
            className="w-20 h-20"
          />
        </div>
      </div>
      <ExportButtons componentRef={componentRef} />
    </div>
  );
};

export default Preview;
