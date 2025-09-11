import React from "react";
import { Link } from "react-router-dom";

const Section = ({ title, children, id }) => (
  <section id={id} className="bg-green-50 rounded-xl shadow-lg p-8 mb-12 flex flex-col">
    {title && (
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        {title}
      </h2>
    )}
    {children}
  </section>
);

export default function InschrijvenPage() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-50 tracking-tight sm:text-5xl md:text-6xl">
          Inschrijven
        </h1>
      </div>

      <Section id="inschrijvingsinfo">
        <div className="text-gray-700 space-y-4 max-w-4xl mx-auto">
          <p>
            Vanaf 1 september mogen de ouders pas inschrijven op de website.
            Enkel deze inschrijvingen zijn geldig. We beginnen dus met een schone
            lei. Broertjes en zusjes hebben voorrang.
          </p>
          <p>
            Door hier de gegevens van uw kind in te vullen, kan u uw kind
            inschrijven als lid. Voordeel van deze online-inschrijving is dat de
            leiding ineens over de juiste gegevens van uw kind beschikt en dat
            zij u gemakkelijk via mail op de hoogte kunnen houden over bepaalde
            activiteiten.
          </p>
          <p className="font-semibold">
            Let wel op, uw kind is pas echt ingeschreven en verzekerd als het
            lidgeld betaald is! Nieuwe leden kunnen alvast hier hun gegevens
            achterlaten, zodat de leiding met jullie contact kan opnemen.
          </p>
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="Lidgeld" id="lidgeld">
          <div className="flex items-center justify-center flex-grow">
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Eerste kind: <span className="font-bold">€65</span>
              </li>
              <li>
                Tweede kind: <span className="font-bold">€60</span>
              </li>
              <li>
                Derde kind: <span className="font-bold">€55</span>
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Lidgeld op Maat" id="lidgeld-op-maat">
          <div className="flex items-center justify-center flex-grow text-center">
            <p className="text-gray-700 max-w-md mx-auto">
              Indien het lidgeld een zware kost is, kan u beroep doen op 'lidgeld
              op maat'. Hiervoor mag u een e-mail sturen naar de groepsleiding (
              <a
                href="mailto:thomaspreudhomme@outlook.com"
                className="text-green-700 hover:underline"
              >
                thomaspreudhomme@outlook.com
              </a>
              ). Als u hier recht op heeft zal het lidgeld verlaagd worden naar 15
              euro.
            </p>
          </div>
        </Section>
      </div>

      <Section title="Online Inschrijvingsformulier" id="online-inschrijven">
        <div className="flex justify-center">
          <iframe
            src="https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/lidworden?groep=A2571G"
            width="950"
            height="1200"
            frameBorder="0"
            allowFullScreen
            title="Online Inschrijvingsformulier"
            className="max-w-full rounded-lg shadow-md"
          >
          </iframe>
        </div>
      </Section>

      <Section id="privacy">
        <div className="text-center text-gray-700">
          <p>
            Meer informatie over hoe we met je gegevens omgaan vind je{" "}
            <Link to="/gdpr" className="text-green-700 hover:underline font-bold">
              hier
            </Link>
            .
          </p>
        </div>
      </Section>
    </div>
  );
}