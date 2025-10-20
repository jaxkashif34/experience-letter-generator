import React, { useState, useRef } from "react";
import { EditableField } from "./components/EditableField";
import { CompanyLogo } from "./components/CompanyLogo";
import {
  BoldIcon,
  PrintIcon,
  GithubIcon,
  LinkedinIcon,
} from "./components/Icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

interface LetterContent {
  recipientName: string;
  recipientTitle: string;
  recipientAddress: string;
  date: string;
  bodyParagraphs: string[];
  senderName: string;
  senderSignature: string;
  senderTitle: string;
  senderPhone: string;
  senderEmail: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
}

const AppFooter: React.FC = () => {
  const AUTHOR_NAME = "Kashif Ali";
  const GITHUB_LINK = "https://github.com/jaxkashif34";
  const LINKEDIN_LINK = "https://linkedin.com/in/jaxkashif34";

  return (
    <footer className="w-full max-w-4xl mt-8 py-4 text-center text-gray-400 print:hidden">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm">
          Made with ❤️ by{" "}
          <span className="font-semibold text-gray-600">{AUTHOR_NAME}</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-500 hover:text-[#282828] transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-500 hover:text-[#0077B5] transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [letterContent, setLetterContent] = useState<LetterContent>({
    recipientName: "Kashif Ali",
    recipientTitle: "Lead Frontend Developer",
    recipientAddress: "SOS Children's Village Gatwala Faisalabad, Pakistan.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    bodyParagraphs: [
      "This is to formally confirm that <strong>Kashif Ali</strong> was employed at <strong>Jazee-Automation</strong> as a <strong>Lead Front-End Developer</strong> from <strong>March 2024</strong> to <strong>March 2026</strong>. During his tenure, he played a key role in the modernization of our company’s CRM Finance system, leading the transition from a legacy desktop application to a modern web-based solution using React.js. He also collaborated closely with the backend team during the migration from Java to Python, ensuring seamless system integration.",
      "He was responsible for the overall front-end architecture and implementation, focusing on creating a responsive and efficient user experience. His technical expertise and leadership contributed significantly to improving system performance and business productivity. Throughout his service, he consistently demonstrated professionalism, strong analytical ability, and a high level of technical competence.",
      "He has been an asset to our organization, and we wish him continued success in his professional career.",
    ],
    senderName: "Muhammad Talha bin Ijaz",
    senderSignature: null, // Initial state is null, no signature uploaded
    senderTitle: "CEO & Manager",
    senderPhone: "P: (039) 391-348-1194",
    senderEmail: "E: talhaijaz@jazeeautomation.com ",
    companyAddress: "Viale Molise, 57, 20137 Milan, Italy",
    companyPhone: "P: (039) 391-348-1194",
    companyEmail: "E: info@jazeeautomation.com",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [signatureOption, setSignatureOption] = useState<"digital" | "manual">(
    "digital"
  );
  const blurTimeoutRef = useRef<number | null>(null);

  const handleContentChange = <K extends keyof LetterContent>(
    field: K,
    value: LetterContent[K]
  ) => {
    setLetterContent((prev) => ({ ...prev, [field]: value }));
  };

  const handleParagraphChange = (index: number, value: string) => {
    const newParagraphs = [...letterContent.bodyParagraphs];
    newParagraphs[index] = value;
    handleContentChange("bodyParagraphs", newParagraphs);
  };

  // 1. Create a ref to attach to the content we want to convert
  const letterRef = useRef<HTMLDivElement>(null);
  const signatureInputRef = useRef<HTMLInputElement>(null);

  const handleGeneratePdf = async () => {
    const input = letterRef.current;
    console.log("here", input);

    if (input) {
      // 2. Hide the button and unnecessary UI before taking the canvas snapshot
      const button = document.getElementById("pdf-button");
      if (button) button.style.display = "none";

      // 3. Convert the HTML content to a canvas (the "screenshot")
      const canvas = await html2canvas(input, {
        scale: 2, // Higher scale for better quality/resolution
        useCORS: true, // Important if you use external images/SVGs
        logging: true,
      });

      // 4. Determine the dimensions for the PDF
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // 'p' for portrait, 'mm' for units, 'a4' size

      // Dimensions of A4 page in mm (210 x 297)
      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Calculate height proportionally

      // 5. Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // 6. Save the PDF file
      pdf.save("Experience_Letter.pdf");

      // 7. Restore the button display after the process is complete
      if (button) button.style.display = "block";
    }
  };

  const handleSignatureUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleContentChange("senderSignature", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditorFocus = () => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }
    setIsEditing(true);
  };

  const handleEditorBlur = () => {
    // Delay hiding the toolbar to allow clicks on it
    blurTimeoutRef.current = window.setTimeout(() => {
      setIsEditing(false);
    }, 200);
  };

  const handleBoldClick = () => {
    document.execCommand("bold");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <header className="w-full max-w-4xl mb-6 print:hidden">
        <h1 className="text-3xl font-bold text-gray-800">
          Experience Letter Generator
        </h1>
        <p className="text-gray-600 mt-1">
          Click on any text below to edit the content. <code className="bg-[#ef782a] text-white text-sm font-medium rounded-md p-1">Ctrl + B</code> to bold, and choose your signature option: upload a digital signature or leave space for a manual one. When ready, save as a PDF.
        </p>
      </header>

      <div className="w-full max-w-4xl flex justify-end items-center gap-2 mb-4 print:hidden">
        <div className="flex items-center gap-2 mt-4 print:hidden">
          {isEditing && (
            <button
              onClick={handleBoldClick}
              onMouseDown={(e) => e.preventDefault()} // Prevents the editor from losing focus
              className="px-3 py-1 text-sm font-medium rounded-md transition-colors bg-[#ef782a] text-white shadow"
              aria-label="Bold"
              title="Bold (Ctrl+B)"
            >
              <BoldIcon className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleGeneratePdf}
            id="pdf-button" // ID for hiding/showing
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors bg-[#ef782a] text-white shadow`}
          >
            Save as PDF
          </button>
        </div>
      </div>

      <div className="relative">
        <main
          id="experience-letter-content"
          ref={letterRef}
          className="w-[210mm] h-[297mm] bg-white shadow-lg rounded-md overflow-hidden relative text-[#282828] print:shadow-none print:rounded-none"
        >
          {/* Decorative Shapes */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gray-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-[#ef782a] rounded-full z-10"></div>
          <div className="absolute -bottom-48 -right-10 w-96 h-96 bg-[#282828] rounded-full z-0"></div>

          <div className="relative z-20 p-16 h-full flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-start border-b pb-8 border-gray-200">
              <CompanyLogo
                address={letterContent.companyAddress}
                phone={letterContent.companyPhone}
                email={letterContent.companyEmail}
                onAddressChange={(val) =>
                  handleContentChange("companyAddress", val)
                }
                onPhoneChange={(val) =>
                  handleContentChange("companyPhone", val)
                }
                onEmailChange={(val) =>
                  handleContentChange("companyEmail", val)
                }
                onFocus={handleEditorFocus}
                onBlur={handleEditorBlur}
              />
            </header>

            {/* Recipient & Date */}
            <section className="flex justify-between items-start mt-12">
              <div className="text-sm leading-relaxed">
                <p className="font-bold">TO:</p>
                <EditableField
                  html={letterContent.recipientName}
                  onChange={(val) => handleContentChange("recipientName", val)}
                  className="font-bold text-base"
                  onFocus={handleEditorFocus}
                  onBlur={handleEditorBlur}
                />
                <EditableField
                  html={letterContent.recipientTitle}
                  onChange={(val) => handleContentChange("recipientTitle", val)}
                  onFocus={handleEditorFocus}
                  onBlur={handleEditorBlur}
                />
                <EditableField
                  html={letterContent.recipientAddress}
                  onChange={(val) =>
                    handleContentChange("recipientAddress", val)
                  }
                  onFocus={handleEditorFocus}
                  onBlur={handleEditorBlur}
                />
              </div>
              <div className="text-sm">
                <EditableField
                  html={letterContent.date}
                  onChange={(val) => handleContentChange("date", val)}
                  className="font-bold"
                  onFocus={handleEditorFocus}
                  onBlur={handleEditorBlur}
                />
              </div>
            </section>

            <p className="mt-12 font-bold">
              Dear{" "}
              <EditableField
                tagName="span"
                html={letterContent.recipientName}
                onChange={(val) => handleContentChange("recipientName", val)}
                onFocus={handleEditorFocus}
                onBlur={handleEditorBlur}
              />
              ,
            </p>

            {/* Body */}
            <article className="mt-6 text-sm leading-7 space-y-4 flex-grow">
              {letterContent.bodyParagraphs.map((p, i) => (
                <EditableField
                  key={i}
                  tagName="p"
                  html={p}
                  onChange={(val) => handleParagraphChange(i, val)}
                  onFocus={handleEditorFocus}
                  onBlur={handleEditorBlur}
                />
              ))}
            </article>

            {/* Footer/Signature */}
            <footer className="mt-12">
              <p>Regards,</p>

              {signatureOption === "digital" ? (
                <div
                  className={`mt-2 h-16 w-48 cursor-pointer transition-colors ${
                    !letterContent.senderSignature
                      ? "border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                      : ""
                  }`}
                  onClick={() => signatureInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      signatureInputRef.current?.click();
                  }}
                  aria-label={
                    letterContent.senderSignature
                      ? "Change signature image"
                      : "Upload signature image"
                  }
                >
                  <input
                    type="file"
                    ref={signatureInputRef}
                    onChange={handleSignatureUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  {letterContent.senderSignature ? (
                    <img
                      src={letterContent.senderSignature}
                      alt="Sender's signature"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm px-2 text-center">
                      Click to upload signature
                    </span>
                  )}
                </div>
              ) : (
                <div className="mt-2 h-16 w-48 flex items-center justify-center">
                  <span className="text-gray-500 text-sm px-2 text-center print:hidden italic"></span>
                </div>
              )}

              <EditableField
                html={letterContent.senderName}
                onChange={(val) => handleContentChange("senderName", val)}
                className="font-bold mt-2"
                onFocus={handleEditorFocus}
                onBlur={handleEditorBlur}
              />
              <EditableField
                html={letterContent.senderTitle}
                onChange={(val) => handleContentChange("senderTitle", val)}
                className="text-sm"
                onFocus={handleEditorFocus}
                onBlur={handleEditorBlur}
              />
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                <EditableField
                  html={letterContent.senderPhone}
                  onChange={(val) => handleContentChange("senderPhone", val)}
                  className="m-0 p-0"
                  onFocus={handleEditorFocus}
                  onBlur={handleEditorBlur}
                />
                <EditableField
                  html={letterContent.senderEmail}
                  onChange={(val) => handleContentChange("senderEmail", val)}
                  className="m-0 p-0"
                  onFocus={handleEditorFocus}
                  onBlur={handleEditorBlur}
                />
              </div>
            </footer>
          </div>
        </main>
        <div className="flex absolute rotate-90 bottom-32 -left-40 gap-2 mt-4 print:hidden">
          <button
            onClick={() => setSignatureOption("digital")}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
              signatureOption === "digital"
                ? "bg-[#ef782a] text-white shadow"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Digital Signature
          </button>
          <button
            onClick={() => setSignatureOption("manual")}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
              signatureOption === "manual"
                ? "bg-[#ef782a] text-white shadow"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Manual Signature
          </button>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default App;
