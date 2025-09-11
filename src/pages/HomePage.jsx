// src/pages/HomePage.jsx
import React from "react";
import { sponsors } from "../assets/sponsors";
import flyerPdf from "../assets/pdfs/flyer sponsoring scouts.pdf";
import trooperImage from "../assets/images/algemeen/Trooper.avif";
import heroImage from "../assets/images/algemeen/GROEPSFOTO.jpeg";

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative rounded-lg overflow-hidden my-8">
      <img
        src={heroImage}
        alt="Groepsfoto Scouts Gooreind"
        className="w-full h-80 object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          WELKOM BIJ SCOUTS GOOREIND
        </h1>
      </div>
    </section>
    
      <section id="bouwproject" className="my-12 bg-green-50 p-8 rounded-xl shadow-lg">
        <h3 className="text-green-900 text-3xl font-bold text-center mb-8">
          Ons Bouwproject
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {sponsors.map((s) => (
            <div
              key={s.img}
              className="flex items-center justify-center w-full h-32 sm:h-40 bg-white border rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={s.img}
                alt={s.name}
                className="min-w-0 max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
          {/* Mobile: Show a download button */}
          <div className="md:hidden text-center">
            <a
              href={flyerPdf}
              download="flyer-sponsoring-scouts.pdf"
              className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-md"
            >
              Download Sponsoring Flyer 
            </a>
            <p className="text-sm text-gray-500 mt-2">
              De PDF-viewer is niet beschikbaar op mobiel.
            </p>
          </div>

          {/* Desktop: Show the embedded PDF viewer */}
          <div className="hidden md:block w-full max-w-4xl mx-auto aspect-[4/5] max-h-[85vh] rounded-lg overflow-hidden shadow-lg">
            <object data={flyerPdf} type="application/pdf" width="100%" height="100%">
              <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p>Je browser ondersteunt het inline bekijken van PDFs niet. <a href={flyerPdf} className="font-bold hover:underline">Download de flyer hier.</a></p>
              </div>
            </object>
          </div>
        </div>
      </section>

      <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <section
          id="social"
          className="flex flex-col rounded-xl bg-green-50 p-8 shadow-lg"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-green-900">
            Sociale media
          </h3>
          <div className="flex flex-grow items-center justify-center gap-8">
            <a
              href="https://www.facebook.com/scoutsgooreind"
              className="text-blue-700 transition hover:text-blue-600"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/scoutsgooreind/"
              className="text-pink-500 transition hover:text-pink-400"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.585-.011-4.85-.069c-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.441-.645 1.441-1.44s-.646-1.44-1.441-1.44z" />
              </svg>
            </a>
          </div>
        </section>

        <section
          id="mission"
          className="rounded-xl bg-green-50 p-8 shadow-lg md:col-span-2"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-green-900">
            Missie van Scouts en Gidsen Vlaanderen
          </h3>
          <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-700">
            Wij zijn scouts en gidsen, meisjes en jongens,<br></br>
                elk met een eigen verhaal. Iedereen kan erbij.<br></br>
                We gaan samen op verkenning en durven tuimelen in het leven.<br></br>
                De natuur is onze troef.<br></br>
                We geloven in onszelf, in elkaar en in iets meer.<br></br>
                We spelen een spel dat niet luchtledig is,<br></br>
                in vrije tijd die niet vrijblijvend is.<br></br>
                Met groot plezier en kleine daden<br></br>
                komen we op voor onze omgeving en<br></br>
                voor een kleurrijk Vlaanderen.<br></br>
                Zo dromen we luidop van gelukkige mensen<br></br>
                in een rechtvaardige wereld.
          </blockquote>
        </section>
      </div>
      <section id="trooper" className="my-12 rounded-xl bg-green-50 p-8 shadow-lg">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="mb-8 text-center text-3xl font-bold text-green-900">
            Trooper
            </h3>
            <p className="text-gray-700">
              Wilt u scouts Gooreind graag financieel een duwtje in de rug geven
              en shopt u soms wel eens online? Dan is Trooper een fantastische
              manier om ons te steunen, zonder dat het u een cent extra kost!
              Klik op de volgende{" "}
              <a
                href="https://www.trooper.be/nl/trooperverenigingen/scoutsgooreind"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-green-700 underline hover:text-green-800"
              >
                link
              </a>{" "}
              en shop via onze Trooper-pagina.
            </p>
          </div>
          <img
            src={trooperImage}
            alt="Trooper"
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
      </section>
    </>
  );
}