import React from "react";
import { verhuurData } from "../assets/verhuur";
import { MdLocationOn, MdEmail, MdEuro } from "react-icons/md";

const Section = ({ title, children, className = "" }) => (
  <section
    className={`my-12 bg-green-50 p-8 rounded-xl shadow-lg ${className}`}
  >
    <h2 className="text-green-900 text-3xl font-bold text-center mb-8">
      {title}
    </h2>
    {children}
  </section>
);

const InfoBlock = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="text-green-700 text-2xl mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  </div>
);

export default function VerhuurPage() {
  const {
    address,
    contact,
    price,
    info,
    directions,
    calendar,
    images,
  } = verhuurData;

  return (
    <>
      <style>{`
        .horizontal-scroll-gallery::-webkit-scrollbar {
          height: 8px;
        }
        .horizontal-scroll-gallery::-webkit-scrollbar-track {
          background: #f0fdf4; /* bg-green-50 */
        }
        .horizontal-scroll-gallery::-webkit-scrollbar-thumb {
          background-color: #166534; /* text-green-800 */
          border-radius: 6px;
        }
        .horizontal-scroll-gallery {
          scrollbar-width: thin;
          scrollbar-color: #166534 #f0fdf4;
        }
      `}</style>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
            Verhuur
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 bg-green-50 p-6 rounded-xl shadow-lg space-y-6">
            <InfoBlock icon={<MdLocationOn />} title={address.title}>
              <p>{address.street}</p>
              <p>{address.city}</p>
            </InfoBlock>
            <InfoBlock icon={<MdEmail />} title={contact.title}>
              <a
                href={`mailto:${contact.email}`}
                className="text-green-700 hover:underline"
              >
                {contact.email}
              </a>
            </InfoBlock>
            <InfoBlock icon={<MdEuro />} title={price.title}>
              <p>{price.description}</p>
            </InfoBlock>
          </div>
          <div className="md:col-span-2 bg-green-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              {info.title}
            </h3>
            <div className="space-y-4 text-gray-700">
              {info.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <Section title="Foto's">
          <div className="horizontal-scroll-gallery flex space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="h-64 w-96 flex-shrink-0 overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs italic text-gray-500">
            Scroll naar rechts voor meer foto's
          </p>
        </Section>

        <Section title={calendar.title}>
          {/* Mobile: Agenda view */}
          <div className="md:hidden relative h-0 pb-[150%]">
            <iframe
              src={calendar.mobileEmbedUrl}
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-md"
              allowFullScreen={true}
              title="Verhuur Kalender (Mobiel)"
            />
          </div>
          {/* Desktop: Month view */}
          <div className="hidden md:block relative h-0 pb-[60%]">
            <iframe
              src={calendar.embedUrl}
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-md"
              allowFullScreen={true}
              title="Verhuur Kalender"
            />
          </div>
        </Section>

        <Section title={directions.title}>
          <div className="max-w-4xl mx-auto space-y-6">
            {directions.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  {section.title}
                </h4>
                <p className="text-gray-700">{section.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
