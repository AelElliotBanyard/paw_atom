"use client";
import React, { useEffect } from "react";
import WorldMap from "react-svg-worldmap";

const page = () => {
  let size = Math.min(window.innerWidth, window.innerHeight) * 1.2;

  return (
    <div>
      <div className="h-screen relative">
        <img
          src="/img/explosion.jpg"
          alt="Explosion"
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full flex flex-col justify-center items-center backdrop-blur-md bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold tracking-wider pt-10 w-full text-center">
            Karte
          </h1>
          <WorldMap
            color="lightblue"
            backgroundColor="transparent"
            borderColor="white"
            valueSuffix="Atomwaffen"
            valuePrefix="~"
            data={[
              { country: "us", value: 5400 },
              { country: "ru", value: 6000 },
              { country: "cn", value: 400 },
              { country: "uk", value: 120 },
              { country: "fr", value: 290 },
              { country: "kp", value: 50 },
              { country: "in", value: 160 },
              { country: "pk", value: 170 },
              { country: "il", value: 100 },
            ]}
            size={size}
          />
        </div>
      </div>
      <div className=" grid grid-rows-3 grid-cols-3 h-[175vh] gap-4">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_usa.jpg"
                alt="Flag USA"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div class="flip-card-back">
              <h2>Vereinigten Staaten von Amerika</h2>
              <p>
                Die Vereinigten Staaten besitzen etwa 5.400 Kernwaffen, wovon
                1.744 einsatzbereit sind. Diese Waffen sind auf U-Booten, in
                Raketen-Silos und auf Luftwaffenstützpunkten stationiert. Etwa
                die Hälfte der einsatzbereiten Waffen kann schnell gestartet
                werden, insbesondere Interkontinentalraketen (ICBMs) und
                ballistische Raketen auf U-Booten. Die zerstörerischen
                Fähigkeiten reichen von extrem mächtigen Bomben bis zu kleineren
                "Niedrig-Yield"-Waffen, die für wahrscheinlichere Einsätze
                entwickelt wurden.
              </p>
              <p>
                <i>Abbildung: Flagge USA</i>
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="/img/flag_ru.png"
                alt="Flag Russia"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div class="flip-card-back">
              <h2>Russland</h2>
              <p>
                Russland verfügt über etwa 6.000 Atomwaffensprengköpfe, von
                denen 1.584 einsatzbereit sind. Gemeinsam mit den Vereinigten
                Staaten besitzen diese beiden Länder über 90 Prozent der
                weltweiten Atomwaffen. Die Spannungen zwischen den USA und
                Russland haben die Abrüstung nur langsam vorangebracht, obwohl
                beide Nationen beschlossen haben, den bilateralen
                Rüstungskontrollvertrag "New START" zu verlängern. Russland
                betont jedoch, dass weitere Reduzierungen nur möglich sind, wenn
                auch die US-Raketenabwehrsysteme begrenzt werden.
              </p>
              <p><i>Abbildung: Flagge Russland</i></p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_cn.png"
                alt="Flag China"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>China</h2>
              <p>
                China entwickelte während des Kalten Krieges Kernwaffen und
                besitzt derzeit etwa 350 Sprengköpfe, von denen nur rund hundert
                auf Raketen stationiert sind, die die USA erreichen könnten. Im
                Gegensatz zu den USA sind Chinas Raketen nicht ständig
                einsatzbereit, da die meisten Sprengköpfe während Friedenszeiten
                nicht mit den Raketen verbunden sind. Diese Vorgehensweise
                unterstützt Chinas langjährige Politik des
                "Kein-Erstschlag"-Nukleareinsatzes. Sowohl China und auch
                Russland sind besorgt über die fortgesetzten Investitionen der
                USA in Raketen. Dies könnte China und Russland dazu bringen
                selbst mehr Investitionen zu tätigen.
              </p>
              <p><i>Abbildung: Flagge China</i></p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_uk.jpg"
                alt="Flag UK"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>Vereinigtes Königreich</h2>
              <p>
                Das Vereinigte Königreich besitzt etwa 120 "operationell
                verfügbare" Kernwaffen, die auf U-Booten stationiert sind oder
                schnell geladen werden können, wobei etwa 40 von ihnen jederzeit
                einsatzbereit sind. Diese Waffen werden ausschließlich auf See
                eingesetzt und befinden sich auf Trident-U-Booten, die
                ballistische Raketen aus den Vereinigten Staaten nutzen. Obwohl
                das Vereinigte Königreich zuvor versprochen hatte, nicht mehr
                als maximal 180 Atomkriegköpfe zu haben, hat es angekündigt,
                diese Obergrenze auf 260 Sprengköpfe zu erhöhen, was einer
                Steigerung um mehr als 40 Prozent entspricht.
              </p>
              <p><i>Abbildung: Flagge UK</i></p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_fr.png"
                alt="Flag France"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>Frankreich</h2>
              <p>
                Frankreich unterhält ein Arsenal von fast 300 einsatzbereiten
                Kernwaffen. Die meisten davon sind auf U-Booten stationiert,
                während der Rest auf luftgestützten Marschflugkörpern
                positioniert ist. Frankreich betrachtet seine
                Abschreckungsstrategie als strikt defensiv, schließt jedoch die
                Möglichkeit nicht aus, in "extremen Situationen legitimier
                Selbstverteidigung" als Erster Kernwaffen einzusetzen.
              </p>
              <p><i>Abbildung: Flagge Frankreich</i></p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_kp.jpg"
                alt="Flag North Korea"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>Nordkorea</h2>
              <p>
                Nach dem Kalten Krieg beschleunigte Nordkorea sein Atomprogramm,
                um diplomatische Macht und Sicherheitszusagen zu erhalten. Das
                Land besitzt nun genug nukleares Material für 30-40
                Atomkriegsköpfe und möglicherweise 10-20 einsatzbereite Waffen.
                Nordkorea entwickelt weiterhin Langstreckenraketen, was neue
                Herausforderungen für Ostasien darstellt. Die Wiederaufnahme von
                Gesprächen erfordert enge Koordination zwischen den USA,
                asiatischen Verbündeten und China, obwohl dies aufgrund
                verschlechterter Beziehungen zwischen den USA und China
                schwierig ist.
              </p>
              <p><i>Abbildung: Flagge Nordkorea</i></p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_in.png"
                alt="Flag India"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>Indien</h2>
              <p>
                Indien verfügt über etwa 150 Kernwaffen und produziert weitere.
                Obwohl langanhaltende Konflikte mit Pakistan historisch gesehen
                im Fokus von Indiens Atomprogramm standen, wächst auch die
                Besorgnis über die Beziehungen zu China. Dies kompliziert die
                regionale Situation weiter, da jegliche Schritte, die Indien
                unternimmt, um seine Atomwaffen als Reaktion auf China zu
                modernisieren, zwangsläufig eine Bedrohung für Pakistan
                darstellen und die Wahrscheinlichkeit eines Wettrüstens erhöhen
                könnten.
              </p>
              <p><i>Abbildung: Flagge Indien</i></p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_pk.jpg"
                alt="Flag Pakistan"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>Pakistan</h2>
              <p>
                Wie Indien verfügt auch Pakistan über etwa 150 Kernwaffen und
                stellt weiterhin mehr her. Die zukünftige Größe und
                Zusammensetzung seines Atomwaffenarsenals hängt wahrscheinlich
                stark davon ab, was Indien unternimmt. Eine verstärkte Betonung
                von kurzreichweiten, "taktischen" Atomwaffen weckt jedoch
                Bedenken, dass Pakistan die Schwelle für den Einsatz dieser
                Waffen senken könnte.
              </p>
              <p><i>Abbildung: Flagge Pakistan</i></p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/img/flag_il.png"
                alt="Flag Israel"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>Israel</h2>
              <p>
                Israel gibt nicht öffentlich zu, Atomwaffen zu besitzen, aber es
                wird allgemein angenommen, dass das Land ungefähr hundert
                solcher Waffen unterhält. Dieses Arsenal führt dazu, dass andere
                nahegelegene Länder mehr Interesse daran haben, Technologie für
                die Nutzung von Kernenergie zu erwerben, die, wenn umgeleitet,
                ihnen die Möglichkeit bieten könnte, Atomwaffen zu entwickeln.
              </p>
              <p><i>Abbildung: Flagge Israel</i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;