import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ sectie, color }) => {
  const accordionItems = [
    {
      id: 1,
      section: 1,
      title: "Lees hier waarom een EPC-certificaat nodig is",
      body: [
        {
          id: 1,
          text: "Het Energie Prestatie Certificaat (EPC) berekent op een gestandaardiseerde manier hoeveel energie per kubieke meter nodig is om de woning te verwarmen. Zo krijgt de koper een objectieve indicatie hoe energiezuinig (of energieverslindend) de woning is.",
        },
        {
          id: 2,
          text: "Na isolatiewerken, het plaatsen van nieuwe ramen of een cv-ketel kan het EPC-label van de woning een forse upgrade krijgen. In zo'n geval loont het de moeite om een nieuwe EPC-keuring aan te vragen, om de gestegen waarde van je woning te kunnen valoriseren.",
        },
        {
          id: 3,
          text: "Een EPC-certificaat is wettelijk verplicht bij elke verkoop of verhuur van een woning die wordt geadverteerd (er zijn boetes van 500 tot 5.000 euro bij niet-naleving). Het certificaat blijft 10 jaar geldig.",
        },
      ],
    },
    {
      id: 2,
      section: 2,
      title: "EPC Labelpremie",
      body: [
        {
          id: 1,
          text: "Hebt u een woning met een slechte energieprestatie? Als u de woning binnen de 5 jaar zo grondig renoveert dat het EPC-label aanzienlijk verbetert, dan kunt u sinds 2021 een premie tot 5000 krijgen.",
        },
      ],
    },
    {
      id: 3,
      section: 2,
      title: "Renteloos renovatiekrediet",
      body: [
        {
          id: 1,
          text: "Wie een woning of appartement met een slechte energieprestatie koopt (notariële akte) én dat pand binnen de 5 jaar grondig renoveert, kan bij de kredietgever naast de hypothecaire lening voor de verwerving van het pand ook een renovatiekrediet aangaan. De rente die u voor dat renovatiekrediet betaalt, wordt door de Vlaamse overheid terugbetaald (rentesubsidie).",
        },
      ],
    },
    {
      id: 4,
      section: 2,
      title: "Zicht op impact",
      body: [
        {
          id: 1,
          text: "Aan de hand van het EPC-label weet u met onze simulaties op voorhand welke impact bepaalde werken zullen hebben die u wenst uit te voeren.",
        },
      ],
    },
    {
      id: 5,
      section: 2,
      title: "Zicht op de toekomst",
      body: [
        {
          id: 1,
          text: "Aan de hand van het EPC-label en onze simulaties, weet u of uw werken zullen voldoen aan de normen van 2050.",
        },
      ],
    },
    {
      id: 6,
      section: 2,
      title: "Bespaar geld",
      body: [
        {
          id: 1,
          text: "Bespaar geld door efficiënt te verbouwen. Efficiënt verbouwen doet u door een duidelijk zicht te hebben op de energie prestatie van uw woning.",
        },
      ],
    },
    {
      id: 7,
      section: 2,
      title: "Nog meer premies!",
      body: [
        {
          id: 1,
          text: "Al deze voordelen zijn bovendien nog eens combineerbaar met de individuele energiepremies van Fluvius.",
        },
      ],
    },
    {
      id: 8,
      section: 3,
      title: "Verslaggeving",
      body: [
        {
          id: 1,
          text: "In ons kort verslag geven we advies, aanbevelingen en tips met betrekking tot de werken (schil van het gebouw) die u wilt uitvoeren waar u zeker op moet letten (vermelding op faktuur, dikte isolatie, advies i.v.m. de offerte die u hebt, enz.)",
        },
      ],
    },
    {
      id: 9,
      section: 3,
      title: "Betalingen",
      body: [
        {
          id: 1,
          text: "Betalingen zijn mogelijk bij plaatsbezoek door behulp van instant storting of cash",
        },
        {
          id: 2,
          text: "Na ontvangst of betalingsbewijs van factuurbetaling ontvangt u meteen het EPC-attest via mail. Via post mogelijk op aanvraag.",
        },
      ],
    },
    {
      id: 10,
      section: 3,
      title: "Elektriciteitskeuringen",
      body: [
        {
          id: 1,
          text: "Bij ons kan u ook terecht voor elektriciteitskeuringen voor 175.",
        },
      ],
    },
  ];

  return (
    <div
      className="accordion"
      style={{ marginTop: "20px 0", borderBottom: `1px solid ${color}` }}
    >
      {accordionItems
        .filter((item) => item.section == sectie)
        .map((item) => (
          <AccordionItem key={item.id} item={item} color={color} />
        ))}
    </div>
  );
};

export default Accordion;
