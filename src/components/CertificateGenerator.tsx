import { UserData } from "../types/quiz";

export const generateCertificatePDF = (
  userData: UserData,
  score: number,
  totalQuestions: number,
  level: string
) => {
  // Dynamically import jsPDF
  import("jspdf").then((jsPDFModule) => {
    const jsPDF = jsPDFModule.default;
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Background
    doc.setFillColor(240, 245, 255);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Border
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(2);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

    // Inner border
    doc.setDrawColor(99, 102, 241);
    doc.setLineWidth(0.5);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

    // Title
    doc.setFontSize(32);
    doc.setTextColor(30, 64, 175);
    doc.text("CERTIFICATE OF COMPLETION", pageWidth / 2, 40, {
      align: "center",
    });

    // Subtitle
    doc.setFontSize(18);
    doc.setTextColor(67, 56, 202);
    doc.text("Cybersecurity Awareness Quiz", pageWidth / 2, 52, {
      align: "center",
    });

    // Decorative line
    doc.setDrawColor(147, 197, 253);
    doc.setLineWidth(0.5);
    doc.line(60, 58, pageWidth - 60, 58);

    // "This is to certify that"
    doc.setFontSize(14);
    doc.setTextColor(71, 85, 105);
    doc.text("This is to certify that", pageWidth / 2, 75, { align: "center" });

    // Name
    doc.setFontSize(28);
    doc.setTextColor(15, 23, 42);
    doc.text(userData.name, pageWidth / 2, 90, { align: "center" });

    // Underline for name
    const nameWidth = doc.getTextWidth(userData.name);
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.3);
    doc.line(
      pageWidth / 2 - nameWidth / 2,
      92,
      pageWidth / 2 + nameWidth / 2,
      92
    );

    // Achievement text
    doc.setFontSize(14);
    doc.setTextColor(71, 85, 105);
    doc.text(
      "has successfully completed the Cybersecurity Awareness Quiz",
      pageWidth / 2,
      105,
      { align: "center" }
    );

    // Score box
    doc.setFillColor(219, 234, 254);
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(1);
    doc.roundedRect(pageWidth / 2 - 35, 115, 70, 25, 3, 3, "FD");

    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text("Score Achieved", pageWidth / 2, 125, { align: "center" });

    doc.setFontSize(24);
    doc.setTextColor(37, 99, 235);
    doc.text(
      `${score} / ${totalQuestions}`,
      pageWidth / 2,
      135,
      { align: "center" }
    );

    // Performance level
    doc.setFontSize(16);
    doc.setTextColor(67, 56, 202);
    doc.text(`Level: ${level}`, pageWidth / 2, 150, { align: "center" });

    // Date
    doc.setFontSize(12);
    doc.setTextColor(100, 116, 139);
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    doc.text(`Date: ${date}`, pageWidth / 2, 165, { align: "center" });

    // Contact info
    doc.setFontSize(10);
    doc.setTextColor(148, 163, 184);
    doc.text(`Contact: ${userData.phone}`, pageWidth / 2, 175, {
      align: "center",
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text(
      "Keep learning and stay secure in the digital world!",
      pageWidth / 2,
      pageHeight - 20,
      { align: "center" }
    );

    // Save the PDF
    doc.save(`Cybersecurity_Certificate_${userData.name.replace(/\s+/g, "_")}.pdf`);
  });
};
