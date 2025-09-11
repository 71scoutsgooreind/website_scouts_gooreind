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

      {vosogData.sections.map((section) => (
        <Section key={section.title} title={section.title} id={section.title.toLowerCase().replace(/\s/g, "-")}>
          <div className="text-gray-700 space-y-4 max-w-4xl mx-auto">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {section.image ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="flex justify-center">
                <img
                  src={section.image}
                  alt={`Afbeelding voor ${section.title}`}
                  className="rounded-lg shadow-md max-h-96 w-full object-contain"
                />
              </div>
              <div className="text-gray-700 space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ) : (
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