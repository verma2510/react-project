import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface ExportButtonsProps {
  componentRef: React.RefObject<HTMLDivElement | null>;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ componentRef }) => {
  const exportToPDF = async () => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("export.pdf");
    }
  };

  const exportToImage = async (format: "png" | "jpeg") => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current);
      const image = canvas.toDataURL(`image/${format}`);
      const link = document.createElement("a");
      link.download = `export.${format}`;
      link.href = image;
      link.click();
    }
  };

  const exportData = [
    { onClick: exportToPDF, text: "Export as PDF", format: "pdf" },
    {
      onClick: () => exportToImage("png"),
      text: "Export as PNG",
      format: "png",
    },
    {
      onClick: () => exportToImage("jpeg"),
      text: "Export as JPEG",
      format: "jpeg",
    },
  ];

  return (
    <div className="export-buttons">
      {exportData.map((button) => (
        <button
          className="border mr-2 px-2 py-1 rounded-md cursor-pointer bg-red-500 text-white"
          key={button.format}
          onClick={button.onClick}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ExportButtons;
