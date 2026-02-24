// src/pages/HomePage.jsx
import React from "react";
import { sponsors } from "../assets/sponsors";
import trooperImage from "../assets/images/algemeen/Trooper.avif";
import heroImage from "../assets/images/algemeen/GROEPSFOTO.jpeg";
import openingNieuwLokaal from "../assets/pdfs/Uitnodiging_opening.pdf";


export default function HomePage() {
  return (
    <>
      <style>
        {`
          @keyframes fadeInScaleUp {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(10px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          .animate-card {
            opacity: 0;
            animation: fadeInScaleUp 0.5s ease-out forwards;
          }
        `}
      </style>

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
<section
  id="opening-nieuw-lokaal"
  className="my-12 rounded-xl bg-green-50 p-8 shadow-lg"
>
  <h3 className="mb-8 text-center text-3xl font-bold text-green-900">
    Opening nieuw lokaal
  </h3>

  <div className="flex flex-col items-center gap-6">
    <p className="max-w-3xl text-center text-gray-700">
      We nodigen jullie graag uit voor de feestelijke opening van ons nieuw lokaal.
      Klik hieronder om alle praktische informatie te bekijken.
    </p>

    <a
      href={openingNieuwLokaal}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition transform hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white transition-transform group-hover:rotate-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
      Bekijk PDF
    </a>
  </div>
</section>

      {/* <section id="evenementen" className="my-12 rounded-xl bg-green-50 p-8 shadow-lg">
  <h3 className="mb-8 text-center text-3xl font-bold text-green-900">
    Toekomstige evenementen
  </h3>

  <div className="flex justify-center">
    <img
      src={breugelavond}
      alt="breugelavond"
      className="max-w-full h-auto rounded-md shadow-lg"
    />
  </div>

 <div className="mt-8 flex justify-center">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfil3cBHMIbxEzswee7HZsfehGJJ3_yPgQTipGboOcaCoDe_Q/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition transform hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 animate-pulse"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white transition-transform group-hover:rotate-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
    Inschrijven / Meer info
  </a>
</div>

  
</section> */ }  






     
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
            Wij zijn scouts en gidsen, meisjes en jongens,<br />
            elk met een eigen verhaal. Iedereen kan erbij.<br />
            We gaan samen op verkenning en durven tuimelen in het leven.<br />
            De natuur is onze troef.<br />
            We geloven in onszelf, in elkaar en in iets meer.<br />
            We spelen een spel dat niet luchtledig is,<br />
            in vrije tijd die niet vrijblijvend is.<br />
            Met groot plezier en kleine daden<br />
            komen we op voor onze omgeving en<br />
            voor een kleurrijk Vlaanderen.<br />
            Zo dromen we luidop van gelukkige mensen<br />
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
      <section
  id="groepsadministratie"
  className="my-12 rounded-xl bg-green-50 p-8 shadow-lg"
>
  <h3 className="mb-6 text-center text-3xl font-bold text-green-900">
    Groepsadministratie
  </h3>

  <p className="mx-auto max-w-3xl text-center text-gray-700 leading-relaxed">
    Via de Groepsadministratie kunt u zelf
    eenvoudig de contactgegevens en het adres van uw kind beheren. Ook kunt u
    hier terecht voor het downloaden van fiscale attesten.
    <br />
    <br />
    Inloggen doet u met het lidnummer van uw kind. Lukt het inloggen niet? Stuur
    dan gerust een mailtje of een berichtje, we helpen u graag verder!
  </p>
</section>

    </>
  );
}

