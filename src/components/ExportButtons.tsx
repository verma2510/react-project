import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface ExportButtonsProps {
  componentRef: React.RefObject<HTMLDivElement | null>;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ componentRef }) => {
  const waitForImages = async (element: HTMLElement) => {
    const images = Array.from(element.getElementsByTagName("img"));
    const promises = images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });
    await Promise.all(promises);
  };

  const exportToPDF = async () => {
    if (componentRef.current) {
      await waitForImages(componentRef.current);
      const canvas = await html2canvas(componentRef.current, {
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
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
      await waitForImages(componentRef.current);
      const canvas = await html2canvas(componentRef.current, {
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
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
    <div className="flex gap-2">
      {exportData.map((button) => (
        <button
          className="border px-2 py-1 font-semibold rounded-md cursor-pointer bg-red-500 text-white"
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
