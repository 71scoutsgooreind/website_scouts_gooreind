import React from "react";
import { vosogData } from "../assets/vosog";

const Section = ({ title, children, id }) => (
  <section id={id} className="bg-green-50 rounded-xl shadow-lg p-8 mb-12">
    <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">{title}</h2>
    {children}
  </section>
);

export default function VOSOGPage() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          {vosogData.title}
        </h1>
      </div>

      {vosogData.sections.map((section, index) => (
        <Section
          key={section.title}
          title={section.title}
          id={section.title.toLowerCase().replace(/\s/g, "-")}
        >
          {/* Als er een afbeelding is, toon tekst & afbeelding naast elkaar */}
          {section.image ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mt-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* ✅ Afbeelding links */}
              <div className="flex justify-center order-1 md:order-1">
                <img
                  src={section.image}
                  alt={`Afbeelding voor ${section.title}`}
                  className="rounded-lg shadow-md max-h-96 w-full object-contain"
                />
              </div>

              {/* ✅ Tekst rechts */}
              <div className="text-gray-700 space-y-4 order-2 md:order-2">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ) : (
            // Geen afbeelding? Alleen tekst
            <div className="text-gray-700 space-y-4 max-w-4xl mx-auto">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </Section>
      ))}
    </div>
  );
}
