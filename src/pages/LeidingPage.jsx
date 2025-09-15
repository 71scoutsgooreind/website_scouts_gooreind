import React from "react";
import { leidingData } from "../assets/leiding";

// A helper to render contact info as clickable links
const ContactInfo = ({ detail }) => {
  if (detail.includes("@")) {
    return <a href={`mailto:${detail}`} className="text-green-700 hover:underline">{detail}</a>;
  }
  // Regex to match phone numbers
  if (detail.match(/^0[0-9\s/]{8,}/)) {
    return <a href={`tel:${detail.replace(/\s/g, '')}`} className="text-green-700 hover:underline">{detail}</a>;
  }
  return <span>{detail}</span>;
};

export default function LeidingPage() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          Leiding
        </h1>
      </div>

      {leidingData.map((group) => (
        <section key={group.title} id={group.title.toLowerCase().replace(/\s/g, '-')} className="my-16">
          <h2 className="text-3xl font-bold text-green-50 text-center mb-10 border-b-2 border-green-700 pb-2">
            {group.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {group.members.map((member) => (
              <div key={member.name} className="bg-green-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <div className="w-full h-64 bg-green-200 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
                  ) : (
                    <span className="text-green-600"></span>
                  )}
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-green-900">{member.name}</h3>
                  <p className="text-md text-green-700 italic mb-4">{member.scoutsName}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mt-4">
                    {member.details.map((detail, index) => (
                        <li key={index}><ContactInfo detail={detail} /></li>
                        ))}
                  </ul>
                  </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
