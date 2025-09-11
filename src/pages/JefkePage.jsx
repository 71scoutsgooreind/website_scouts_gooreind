// src/pages/JefkePage.jsx
import React from "react";
import jefkePdf from "../assets/pdfs/Jefke maart en april.pdf";

export default function JefkePage() {
  return (
    <>
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          Activiteiten
        </h1>
      </div>
      <section id="jefke" className="my-12 bg-green-50 p-8 rounded-xl shadow-lg">
        <h3 className="text-green-900 text-3xl font-bold text-center mb-8">
          Jefke - Maart & April
        </h3>
        <div className="t-12">
          {/* Mobile: Show a download button */}
          <div className="md:hidden text-center">
            <a
              href={jefkePdf}
              download="jefke-pdf.pdf"
              className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-md"
            >
              Download Jefke
            </a>
            <p className="text-sm text-gray-500 mt-2">
              De PDF-viewer is niet beschikbaar op mobiel.
            </p>
          </div>

          {/* Desktop: Show the embedded PDF viewer */}
          <div className="hidden md:block w-full max-w-4xl mx-auto aspect-[4/5] max-h-[85vh] rounded-lg overflow-hidden shadow-lg">
            <object data={jefkePdf} type="application/pdf" width="100%" height="100%">
              <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p>Je browser ondersteunt het inline bekijken van PDFs niet. <a href={jefkePdf} className="font-bold hover:underline">Download het jefke hier.</a></p>
              </div>
            </object>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
