import React, { useState } from "react";

import styles from "./../styles/AppMain.module.css";
import Hero from "./Hero";

import EPC_Illustratie from "./../assets/images/EPC_illustratie.png";
import Appartement from "./../assets/images/appartement.png";
import Duplex from "./../assets/images/duplex.png";
import Rijhuis from "./../assets/images/rijhuis.png";
import HOB from "./../assets/images/half_open_bebouwing.png";
import OpenBebouwing from "./../assets/images/open_bebouwing.png";
import WP250 from "./../assets/images/woning_plus_250.png";
import GD14App from "./../assets/images/gemeenschappelijke_delen_1_4_app.png";
import GD514App from "./../assets/images/gemeenschappelijke_delen_5_14_app.png";
import GDP15pp from "./../assets/images/gemeenschappelijke_delen_plus_15_app.png";
import Renovatie from "./../assets/images/renovatie.png";
import KNR from "./../assets/images/klein_niet_residentieel.png";
import MeerdereEenheden from "./../assets/images/meerdere_eenheden.png";

import Accordion from "./Accordion";
import TypeWoning from "./TypeWoning";

const AppMain = () => {
  const [typesWoningen, setTypesWoningen] = useState([
    {
      id: 1,
      name: "Appartement",
      price: 165,
      image: Appartement,
      delayAnim: 0,
    },
    {
      id: 2,
      name: "Duplex",
      price: 195,
      image: Duplex,
      delayAnim: 1,
    },
    {
      id: 3,
      name: "Rijhuis",
      price: 195,
      image: Rijhuis,
      delayAnim: 2,
    },
    {
      id: 4,
      name: "Half-open bebouwing",
      price: 215,
      image: HOB,
      delayAnim: 3,
    },
    {
      id: 5,
      name: "Open bebouwing",
      price: 235,
      image: OpenBebouwing,
      delayAnim: 0,
    },
    {
      id: 6,
      name: "Woning +250m²",
      price: 275,
      image: WP250,
      delayAnim: 1,
    },
    {
      id: 7,
      name: "Gemeenschappelijke delen 1-4 appartementen",
      price: 295,
      image: GD14App,
      delayAnim: 2,
    },
    {
      id: 8,
      name: "Gemeenschappelijke delen 5-14 appartementen",
      price: 395,
      image: GD514App,
      delayAnim: 3,
    },
    {
      id: 9,
      name: "Gemeenschappelijke delen +15 appartementen",
      image: GDP15pp,
      delayAnim: 0,
    },
    {
      id: 10,
      name: "Renovatie (labelpremie bij start E, F, G en einde minimaal C)",
      price: 375,
      image: Renovatie,
      delayAnim: 1,
    },
    {
      id: 11,
      name: "Klein Niet-Residentieel (KNR)",
      price: 225,
      image: KNR,
      delayAnim: 2,
    },
    {
      id: 12,
      name: "Meerdere eenheden",
      image: MeerdereEenheden,
      delayAnim: 3,
    },
  ]);

  return (
    <main>
      <Hero />
      <div className={styles.epcBelang}>
        <div className={styles.content}>
          <section>
            <img className={styles.epc} src={EPC_Illustratie} />
            <div>
              <h2>Waarom is een EPC-certificaat nodig?</h2>
              <p>
                Een goede EPC-score van je woning is vandaag een stevig
                verkoopsargument, want het verhoogt de waarde van je woning.
              </p>
            </div>
          </section>
          <section>
            <Accordion sectie={1} color="transparent" />
            <div className={styles.impNote}>
              <em>
                <strong>Belangrijk!</strong> <br />
                Sinds 2022 moet elk appartementsgebouw ook over een
                EPC-certificaat voor de gemeenschappelijke delen beschikken!
              </em>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.epcAttest}>
        <div className={styles.content}>
          <h2>Een EPC attest per type woning.</h2>
          <div className={styles.typeWoningen}>
            {typesWoningen.map((typeWoning) => (
              <TypeWoning
                key={typeWoning.id}
                type={typeWoning.name}
                price={typeWoning.price}
                image={typeWoning.image}
                delay={typeWoning.delayAnim}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.epcVoordelen}>
        <div className={styles.content}>
          <h2>
            Voordelen bij verbouwen? <br /> Zeker en vast!
          </h2>
          <Accordion sectie={2} color="#fff" />
        </div>
      </div>
      <div className={styles.epcGoedOmTeWeten}>
        <div className={styles.content}>
          <h2>Goed om te weten...</h2>
          <Accordion sectie={3} color="#000" />
        </div>
      </div>
      <div className={styles.epcNuttigeDocumenten}>
        <div className={styles.content}>
          <h2>Nuttige documenten</h2>
          <p>Deze documenten zijn nuttig bij de opmaak van een EPC:</p>
          <ul>
            <li>Plannen van de woning</li>
            <li>Vorig EPC attest</li>
            <li>
              Facturen van aannemers (m.b.t. isolatiewerken, schrijnwerk/ramen,
              zonnepanelen, verwarming, ..)
            </li>
            <li>Facturen van bouwmaterialen (merk/type/dikte/..)</li>
            <li>Goedgekeurde premie aanvragen</li>
            <li>Post-interventie dossier/lastenboek</li>
            <li>EPB-aangifte</li>
            <li>Foto's</li>
          </ul>
        </div>
      </div>
      <div className={styles.epcSterkePunten}>
        <div className={styles.content}>
          <h2>Onze sterke punten</h2>
          <ul>
            <li>
              Gecertificeerd energiedeskundige type A (Erkend door het VEKA)
            </li>
            <li>
              Binnen 24u na aanvraag contacteren we je voor een afspraak/offerte
            </li>
            <li>
              Binnen 48u na plaatsbezoek je EPC attest via mail (indien alle
              nodige documenten ter beschikking)
            </li>
            <li>Plaatsbezoeken binnen de week</li>
            <li>Ook via WhatsApp bereikbaar</li>
            <li>Alle prijzen steeds inclusief BTW & verplaatsingskosten</li>
            <li>Avond-/Weekendafspraken zijn mogelijk (meerprijs van 25)</li>
          </ul>
        </div>
      </div>
      <div className={styles.epcProcedure}>
        <div className={styles.content}>
          <h2>Onze procedure</h2>
          <ol>
            <li>Wij komen ter plaatse opmeten & vaststellingen doen</li>
            <li>Wij verzamelen alle nodige bewijsstukken</li>
            <li>
              Wij maken een 3D tekening op basis van plannen/opmetingen
              (volumeberekeningen)
            </li>
            <li>Opzoekingen die het EPC attest positief kunnen bevorderen</li>
            <li>
              Ingave van alle informatie in het officiële softwareprogramma van
              de overheid
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default AppMain;
