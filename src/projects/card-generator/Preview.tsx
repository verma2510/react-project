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
        className="relative flex bg-[#1a365d] text-[#e5b45b] h-[270px] w-[480px] overflow-hidden rounded-lg shadow-xl"
      >
        <div className="absolute top-0 left-0 w-[55%] h-full bg-[#1a365d] transform -skew-x-12 origin-top-left z-10"></div>
        <div className="relative z-20 w-[50%] p-8 flex flex-col justify-center items-center">
          <div className="mb-6 flex flex-col justify-center items-center">
            <img
              src={
                photo || "https://avatars.githubusercontent.com/u/162727802?v=4"
              }
              alt="Company Logo"
              className="w-40 h-20 object-contain mb-2"
            />
            <p className="text-md font-semibold">{companyName || "Nextgen"}</p>
          </div>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${linkUrl}&size=220x220&margin=0&color=e5b45b&bgcolor=1a365d`}
            alt="QR"
            className="w-16 h-16"
          />
        </div>
        <div className="relative z-20 flex-1 p-8 flex flex-col justify-center items-start">
          <h1 className="text-2xl font-bold tracking-wider mb-1">{name || "AMAN VERMA"}</h1>
          <p className="text-lg font-medium mb-6">{designation || "Full Stack Developer"}</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#e5b45b] rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1a365d]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <p className="text-sm">{phone || "+91 9167682410"}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#e5b45b] rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1a365d]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <p className="text-sm">{email || "verma.aman1008@gmail.com"}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#e5b45b] rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1a365d]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm">{address || "Mumbai, India"}</p>
            </div>
          </div>
        </div>
      </div>
      <ExportButtons componentRef={componentRef} />
    </div>
  );
};

export default Preview;
