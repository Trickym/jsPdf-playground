import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Worker, Viewer, ProgressBar } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
function Visualizer({ jsPDFCode, dark }) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    generatePDF();
  }, [jsPDFCode]);

  const generatePDF = () => {
    try {
      const sandbox = { jsPDF: jsPDF }; // Define a sandbox environment
      const context = new Function(...Object.keys(sandbox), `${jsPDFCode};`); // Create a function with the jsPDF code
      const pdfBlob = context.apply(null, Object.values(sandbox)); // Apply the function with the sandbox environment
      const pdfBlobUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfBlobUrl);
      setError("");
    } catch (err) {
      console.log({ err });
      parseError(err);
    }
  };
  const parseError = (err) => {
    const message = err.message || "An error occurred";
    const stack = err.stack || "";
    const lineMatch = stack.match(/<anonymous>:(\d+):\d+/);
    const lineNumber = lineMatch ? lineMatch[1] - 2 : "unknown";
    setError({ message: `${message} on line ${lineNumber}`, stack: stack });
  };

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          Download,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        console.log({ slots });
        return (
          <div className="flex align-middle justify-between w-full">
            <div className="flex space-x-3">
              <div>
                <ShowSearchPopover />
              </div>
              <div>
                <GoToPreviousPage />
              </div>
              <div className="flex items-center">
                <CurrentPageInput /> / <NumberOfPages />
              </div>
              <div>
                <GoToNextPage />
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                <ZoomOut />
              </div>
              <div>
                <Zoom />
              </div>
              <div>
                <ZoomIn />
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                <Download />
              </div>
              <div>
                <Print />
              </div>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      defaultTabs[0], // Bookmarks tab
    ],
    renderToolbar,
  });

  return (
    <div className="w-100">
      <div className="h-dvh border-gray-400 dark:border-gray-500 border border-r-0 border-l-0">
        {error ? (
          <div className="h-full px-2 text-red-800 bg-red-200 dark:bg-zinc-900 dark:text-gray-300 overflow-scroll">
            <p className="text-xl">Error! </p>
            <p>{error?.message}</p>
            <p className="pl-2">{error?.stack}</p>
          </div>
        ) : (
          pdfUrl && (
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                theme={{ theme: dark ? "dark" : "light" }}
                fileUrl={pdfUrl}
                renderLoader={(percentages) => (
                  <div style={{ width: "100%" }}>
                    <ProgressBar progress={Math.round(percentages)} />
                  </div>
                )}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          )
        )}
      </div>
    </div>
  );
}

export default Visualizer;
