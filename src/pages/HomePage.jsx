// src/pages/HomePage.jsx
import React from "react";
import { sponsors } from "../assets/sponsors";
import trooperImage from "../assets/images/algemeen/Trooper.avif";
import heroImage from "../assets/images/algemeen/GROEPSFOTO.jpeg";
import jaarkalender from "../assets/pdf/jaarkalender.pdf"; // PDF importeren

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

      {/* 🔽 Toegevoegde sectie: Toekomstige evenementen */}
      <section
        id="evenementen"
        className="my-12 rounded-xl bg-green-50 p-8 shadow-lg"
      >
        <h3 className="mb-8 text-center text-3xl font-bold text-green-900">
          Toekomstige evenementen
        </h3>
        <p className="text-gray-700 text-center mb-4">
          Download hier onze meest recente jaarkalender of bekijk hem direct in je browser.
        </p>
        <div className="flex justify-center">
          <a
            href={jaarkalender}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-800 transition"
          >
            Bekijk of download PDF
          </a>
        </div>
      </section>

      {/* Sociale media en missie */}
      <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <section
          id="social"
          className="flex flex-col rounded-xl bg-green-50 p-8 shadow-lg"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-green-900">
            Sociale media
          </h3>
          <div className="flex flex-grow items-center justify-center gap-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/scoutsgooreind"
              className="text-blue-700 transition hover:text-blue-600"
              aria-label="Facebook"
            >
              {/* SVG */}
              ...
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/scoutsgooreind/"
              className="text-pink-500 transition hover:text-pink-400"
              aria-label="Instagram"
            >
              {/* SVG */}
              ...
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
    </>
  );
}
