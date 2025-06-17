import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ExportButtonsProps {
  componentRef: React.RefObject<HTMLElement>;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ componentRef }) => {
  const exportToPDF = async () => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('export.pdf');
    }
  };

  const exportToImage = async (format: 'png' | 'jpeg') => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current);
      const image = canvas.toDataURL(`image/${format}`);
      const link = document.createElement('a');
      link.download = `export.${format}`;
      link.href = image;
      link.click();
    }
  };

  return (
    <div className="export-buttons">
      <button onClick={exportToPDF}>Export as PDF</button>
      <button onClick={() => exportToImage('png')}>Export as PNG</button>
      <button onClick={() => exportToImage('jpeg')}>Export as JPEG</button>
    </div>
  );
};

export default ExportButtons;
