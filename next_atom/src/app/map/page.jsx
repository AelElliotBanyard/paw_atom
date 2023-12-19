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
      <div className=" grid grid-rows-3 grid-cols-3 h-[150vh] gap-4">
        <div className=" flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BkbWlzYzJiYXRjaDItbG9jOTc1MTU1NDktaW1hZ2VfNS5qcGc.jpg"
                alt="Flag USA"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div class="flip-card-back">
              <h2>Vereinigten Staaten von Amerika</h2>
              <p>
                Die Vereinigten Staaten verfügen über ein nukleares Arsenal von
                etwa 5.400 Kernwaffen, von denen 1.744 einsatzbereit und zur
                Lieferung bereit sind. Diese Waffen sind auf U-Booten, in tiefen
                Raketen-Silos und auf Luftwaffenstützpunkten untergebracht. Etwa
                die Hälfte der einsatzbereiten Waffen befindet sich in einem
                Zustand, in dem sie sehr schnell nach einem Befehl des
                Präsidenten gestartet werden können. Dies betrifft hauptsächlich
                die Interkontinentalraketen (ICBMs) in Silos und Raketen mit
                ballistischen SLBMs auf U-Booten. ICBMs können innerhalb von
                Minuten gestartet werden, SLBMs innerhalb von 15 Minuten. Die
                zerstörerischen Fähigkeiten dieser Waffen variieren erheblich,
                von extrem mächtigen Bomben bis hin zu kleineren
                "Niedrig-Yield"-Waffen, die speziell entwickelt wurden, um
                wahrscheinlicher eingesetzt zu werden.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Российский0_флаг1200px-Flag_of_Russia.png"
                alt="Flag Russia"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div class="flip-card-back">
              <h2>Russland</h2>
              <p>
                Das russische Atomwaffenarsenal umfasst etwa 6.000 Sprengköpfe,
                von denen 1.584 einsatzbereit sind. In Kombination mit den
                Vereinigten Staaten besitzen diese beiden Länder mehr als 90
                Prozent der weltweiten Atomwaffen. Die anhaltenden Spannungen
                zwischen den USA und Russland haben dazu geführt, dass die
                Abrüstung von Atomwaffen nur langsam voranschreitet. Es gibt
                jedoch eine positive Entwicklung, da beide Nationen beschlossen
                haben, ihren einzigen noch bestehenden bilateralen
                Rüstungskontrollvertrag, "New START", zu verlängern. Russland
                hat jedoch deutlich gemacht, dass weitere Reduzierungen nur
                möglich sind, wenn auch die US-Raketenabwehrsysteme rechtlich
                begrenzt werden. Ohne angemessene Kontrolle dieser Spannungen
                besteht die Gefahr eines Wettrüstens und einer erhöhten
                Wahrscheinlichkeit eines Atomkonflikts, insbesondere in
                Krisenzeiten.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/China_Flag_-_Alternative.svg/1024px-China_Flag_-_Alternative.svg.png?20160821181037"
                alt="Flag China"
                className="w-full h-full object-fill rounded-md"
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
                "Kein-Erstschlag"-Nukleareinsatzes. Sowohl China als auch
                Russland sind besorgt über die fortgesetzten US-Investitionen in
                Erstschlagoptionen und Raketenabwehrsysteme. Experten aus beiden
                Ländern haben gewarnt, dass diese Bedenken dazu führen könnten,
                dass China die Anzahl und Qualität seiner Nuklearwaffen erhöht,
                wenn keine diplomatischen Initiativen ergriffen werden.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.publicdomainpictures.net/pictures/340000/nahled/national-flag-of-uk-the-united-kingdom-of-great-britain-and-no-1588673083tIa.jpg"
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
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_France_%28new%29.png"
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
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://cdn.britannica.com/47/1947-004-44F4E790/Flag-North-Korea.jpg"
                alt="Flag North Korea"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
            <div className="flip-card-back">
              <h2>Nordkorea</h2>
              <p>
                Nach dem Ende des Kalten Krieges geriet Nordkorea in
                wirtschaftliche Turbulenzen. Um diplomatische Verhandlungsmacht
                und Sicherheitszusagen zu erhalten, beschleunigte das Land sein
                Atomprogramm, trotz wiederholter Versuche der USA, es zu
                begrenzen. Heute besitzt Nordkorea genug nukleares Material für
                30 bis 40 Atomkriegsköpfe und möglicherweise 10 bis 20
                einsatzbereite Waffen. Das Land entwickelt auch weiterhin seine
                Langstreckenraketenkapazitäten, was neue Herausforderungen für
                Ostasien darstellt. Die Wiederaufnahme produktiver Gespräche mit
                Nordkorea erfordert eine enge Koordination der USA mit ihren
                asiatischen Verbündeten und China, obwohl dies angesichts der
                verschlechterten Beziehungen zwischen den USA und China
                schwieriger geworden ist.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png"
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
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
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
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Israel_flag_300.png"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
