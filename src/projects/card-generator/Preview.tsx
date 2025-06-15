import React from "react";

const Preview: React.FC = () => {
  return (
    <div className="border-green-500 flex justify-between items-center border-2 p-4 h-[270px] w-[400px]">
      <div>
        <h1 className="text-2xl font-bold">Name</h1>
        <p className="text-lg font-medium">Designation</p>
        <p className="">Email</p>
        <p className="">Phone</p>
        <p className="">Address</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=20" alt="Logo" />
        <p className="">Company Name</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=Example" alt="QR" />
      </div>
    </div>
  );
};

export default Preview;
