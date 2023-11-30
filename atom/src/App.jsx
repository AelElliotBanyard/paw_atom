import Tryout from "./components/tryout";
import Contact from "./components/Contact";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const parallax = document.getElementById("parallax");
      let scrollPosition = window.scrollY;
      parallax.scrollTo(0, scrollPosition * 0.1);
    });
  }, []);
  return (
    <div className=" bg-[#460106] w-screen min-h-screen p-10 box-border">
      <div
        id="parallax"
        style={{
          perspective: "100px",
          height: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
          position: "fixed",
          top: "0",
          left: "50%",
          right: "0",
          bottom: "0",
          marginLeft: "-1500px",
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0"
          style={{ transform: "translateZ(-200px) scale(3)" }}
        >
          <img
            src="https://i.pinimg.com/originals/24/4e/0a/244e0a05633ef1c998a6f29eec324824.jpg"
            width="80%"
            style={{ marginLeft: "550px" }}
            className="absolute block bottom-0"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 left-0 right-0 mt-[300px]"
          style={{ transform: "translateZ(-150px) scale(2.5)" }}
        >
          <img
            src="https://i.ibb.co/L80XGs6/7136296-preview.png"
            width="1000px"
            height="500px"
            style={{ marginLeft: "330px" }}
            className="absolute block bottom-0"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 left-0 right-0 mt-[-100px]"
          style={{ transform: "translateZ(-100px) scale(2)" }}
        >
          <img
            src="https://www.pinclipart.com/picdir/big/416-4162959_2363-x-787-21-0-skyline-city-silhouette.png"
            width="1400px"
            height="500px"
            style={{ marginLeft: "1300px" }}
            className="absolute block bottom-0"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 left-0 right-0 mt-[100px]"
          style={{ transform: "translateZ(-50px) scale(1.5)" }}
        >
          <img
            src="https://i.ibb.co/56LMHtK/new-york-skyline-silhouette-png-6.png"
            width="2000px"
            height="650px"
            style={{ marginLeft: "-150px" }}
            className="absolute block bottom-0"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 left-0 right-0 "
          style={{ transform: "translateZ(-0px) scale(1)" }}
        >
          <img
            src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true"
            className="absolute block bottom-0"
          />
        </div>
        <div
          className="h-[8000px] mt-[-20px] absolute top-full left-0 right-0"
          style={{
            background: " #2D112B",
          }}
        ></div>
      </div>
      <Navbar />
      <Section
        title="Manhattan-Projekt"
        id="manhatten"
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/8d/Trinity_shot_color.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Leslie_Groves.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/85/Oppenheimer_%28cropped%29.jpg",
        ]}
        side="left"
      >
        <p className="text-white">
          Dieses Projekt definiert den Start der atomaren Kernwaffen. Das
          Projekt war eim militärisches Forschungs- und Entwicklungsprogramm,
          das während des Zweiten Weltkriegs von den Vereinigten Staaten mit
          Unterstützung des Vereinigten Königreichs und Kanadas durchgeführt
          wurde. Ziel war die Entwicklung und der Bau der ersten Atombombe. Die
          Forschung wurde im Dezember 1942 unter der Leitung von General Leslie
          Groves aufgenommen. Das Projekt wurde von den Physikern Robert
          Oppenheimer und Enrico Fermi geleitet. Am 16. Juli 1945 wurde die
          erste Atombombe in der Nähe von Alamogordo, New Mexico, getestet. Am
          6. August 1945 wurde eine Atombombe über Hiroshima abgeworfen, und am
          9. August 1945 wurde eine Atombombe über Nagasaki abgeworfen. Am 15.
          August 1945 kapitulierte Japan. Das Manhattan-Projekt war das erste
          Programm, das Kernwaffen entwickelte. Es wurde später durch das United
          States Atomic Energy Commission ersetzt.
        </p>
      </Section>
      <Section
        title="Typen von Kernwaffen und ihre Zwecke"
        id="kernwaffen"
        side="right"
      >
        <p className="text-white">
          Der Begriff Kernwaffe bezeichnet eine Waffe, deren Wirkung auf der
          Kernspaltung oder Kernfusion beruht. Die Kernwaffen werden in zwei
          Kategorien unterteilt: Atombomben und Wasserstoffbomben. Die Atombombe
          ist eine Kernwaffe, die ihre Energie aus der Kernspaltung gewinnt. Die
          Wasserstoffbombe ist eine Kernwaffe, die ihre Energie aus der
          Kernfusion gewinnt. Neben diesen beiden Kategorien gibt es noch die
          sogenannten schmutzigen Bomben. Diese sind keine Kernwaffen, sondern
          konventionelle Sprengsätze, die radioaktives Material enthalten. Die
          radioaktiven Stoffe werden durch die Explosion in die Umgebung
          verbreitet und verseuchen diese. Die schmutzigen Bomben sind keine
          Massenvernichtungswaffen, da sie keine große Zerstörungskraft haben.
          Sie sind aber trotzdem gefährlich, da sie die Umgebung verseuchen und
          so viele Menschen töten können. Neben diesen drei Kategorien gibt es
          noch die sogenannten Neutronenbomben. Diese Kernwaffen sind speziell
          dafür entwickelt worden, um Menschen zu töten, aber die Infrastruktur
          zu erhalten. Die Neutronenbomben sind eine spezielle Form der
          Atombombe. Sie haben eine geringere Sprengkraft als die Atombomben,
          aber eine höhere Strahlung. Die Neutronenbomben sind auch keine
          Massenvernichtungswaffen, da sie keine große Zerstörungskraft haben.
          Sie sind aber trotzdem gefährlich, da sie die Umgebung verseuchen und
          so viele Menschen töten können. Neben diesen vier Kategorien gibt es
          noch die Kobaltbombe. Diese Kernwaffe ist eine spezielle Form der
          Wasserstoffbombe. Sie ist eine Wasserstoffbombe, die mit Kobalt
          angereichert wurde. Die Kobaltbombe ist eine Massenvernichtungswaffe,
          da sie eine große Zerstörungskraft hat.
        </p>
      </Section>
      <Section
        title="Folge von Einschlag einer Atombombe"
        id="einschlagundfolgen"
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/f/fe/Hardtack_Umbrella_nuke.jpg",
          "https://www.businessinsider.de/wp-content/uploads/2017/11/atompilz-nuclear-fallout-vorbereitung.jpg",
        ]}
        side="left"
      >
        <p className="text-white">
          Die Auswirkungen eines Atombombeneinschlags können äußerst verheerend
          sein und lassen sich in vier Hauptkategorien Druckwelle,
          Hitzestrahlung, radioaktive Strahlung und elektromagnetische Impulse
          unterscheiden.
        </p>
        <br />
        <p className="text-white">
          Die erste unmittelbare Auswirkung eines Atombombeneinschlags ist die
          Druckwelle, die durch die immense Hitze der Explosion erzeugt wird.
          Diese Druckwelle hat das Potenzial, Gebäude und Strukturen zu
          zerstören, und sie stellt eine unmittelbare Gefahr für Menschen dar,
          da sie sie gegen Wände oder Objekte schleudern kann. Darüber hinaus
          kann die Druckwelle auch zu erheblichen Gehörschäden führen.
        </p>
        <br />
        <p className="text-white">
          Die Hitzestrahlung entsteht aufgrund der immensen Hitze, die während
          der Explosion freigesetzt wird. Sie kann lebensbedrohliche
          Verbrennungen bei Menschen verursachen und hat auch das Potenzial,
          Gebäude und andere Bauwerke durch Feuer zu zerstören.
        </p>
        <br />
        <p className="text-white">
          Die Freisetzung von radioaktiver Strahlung erfolgt ebenfalls durch die
          Hitze während einer Explosion. Diese gefährliche Strahlung kann
          Menschen töten, indem sie ihre Zellen schädigt und das Risiko für
          Krebs erhöht. Zusätzlich besitzt sie die Fähigkeit, menschliche DNA zu
          verändern, was zu schwerwiegenden gesundheitlichen Beeinträchtigungen
          führen kann.
        </p>
        <br />
        <p className="text-white">
          Elektromagnetische Impulse entstehen aufgrund der extremen Hitze, die
          bei einer Explosion freigesetzt wird. Diese Impulse haben das
          Potenzial, elektronische Geräte zu zerstören und Stromausfälle zu
          verursachen.
        </p>
      </Section>
      <Section
        title="Unterschied zu normalen Waffen im Aufbau"
        id="differenzen"
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/f/fc/Implosionsdesign.svg",
        ]}
        side="right"
      >
        <p className="text-white">
          Jedem Menschen ist bewusst, dass eine Atomwaffen eine sehr grossen
          Schaden anrichten kann. Doch was macht sie so zerstörerisch? Der
          Aufbau einer Atomwaffe ist sehr komplex und besteht aus vielen
          verschiedenen Komponenten. Eine Antom besteht aus einer Kugel aus
          Plutonium-239 und aus einer Uran-235, in der sich eine Neutronenquelle
          befindet. Die Kugel umgibt eine TNT schicht. Sobald das explodiert,
          wird die Netronenquelle wirksam. Durch den Druck Explosion und das
          Zusammendrücken der radioaktive Stoffen erreicht die Massedes
          Spaltmaterials ihren kritischen Zustand.
        </p>
      </Section>
      <Section title="Wer ist in Besitz von Atomwaffen" id="besitz" side="left">
        <p className="text-white">
          Zurzeit gibt es Neun Nuklearstaaten. Und weltweit gibt es nahezu
          13'000 nukleare Sprengköpfe. Ausserdem hat das Aufrüstung noch nicht
          gestoppt und alle nuklearen Staaten erhöhen momentan entweder ihr
          Arsenal von Nuklearwaffen, oder die Fähigkeit dieser Waffen. Folgend
          werde ich den Zustand der Nuklearstaaten beschreiben.
        </p>
      </Section>
      <Section
        title="Vereinigte Staaten"
        id=""
        side="right"
        images={[
          "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
        ]}
      >
        <p className="text-white">
          Die Vereinigten Staaten verfügen über ein nukleares Arsenal von etwa
          5.400 Kernwaffen, von denen 1.744 einsatzbereit und zur Lieferung
          bereit sind. Diese Waffen sind auf U-Booten, in tiefen Raketen-Silos
          und auf Luftwaffenstützpunkten untergebracht. Etwa die Hälfte der
          einsatzbereiten Waffen befindet sich in einem Zustand, in dem sie sehr
          schnell nach einem Befehl des Präsidenten gestartet werden können.
          Dies betrifft hauptsächlich die Interkontinentalraketen (ICBMs) in
          Silos und Raketen mit ballistischen SLBMs auf U-Booten. ICBMs können
          innerhalb von Minuten gestartet werden, SLBMs innerhalb von 15
          Minuten. Die zerstörerischen Fähigkeiten dieser Waffen variieren
          erheblich, von extrem mächtigen Bomben bis hin zu kleineren
          "Niedrig-Yield"-Waffen, die speziell entwickelt wurden, um
          wahrscheinlicher eingesetzt zu werden.
        </p>
      </Section>
      <Section
        title="Russland"
        id=""
        side="left"
        images={[
          "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/383px-Flag_of_Russia.svg.png",
        ]}
      >
        <p className="text-white">
          Das russische Atomwaffenarsenal umfasst etwa 6.000 Sprengköpfe, von
          denen 1.584 einsatzbereit sind. In Kombination mit den Vereinigten
          Staaten besitzen diese beiden Länder mehr als 90 Prozent der
          weltweiten Atomwaffen. Die anhaltenden Spannungen zwischen den USA und
          Russland haben dazu geführt, dass die Abrüstung von Atomwaffen nur
          langsam voranschreitet.
        </p>
        <br />
        <p className="text-white">
          Es gibt jedoch eine positive Entwicklung, da beide Nationen
          beschlossen haben, ihren einzigen noch bestehenden bilateralen
          Rüstungskontrollvertrag, "New START", zu verlängern. Russland hat
          jedoch deutlich gemacht, dass weitere Reduzierungen nur möglich sind,
          wenn auch die US-Raketenabwehrsysteme rechtlich begrenzt werden.
        </p>
        <br />
        <p className="text-white">
          Ohne angemessene Kontrolle dieser Spannungen besteht die Gefahr eines
          Wettrüstens und einer erhöhten Wahrscheinlichkeit eines Atomkonflikts,
          insbesondere in Krisenzeiten.
        </p>
      </Section>
      <Section title="Frankreich" id="" side="right">
        <p className="text-white">
          Frankreich unterhält ein Arsenal von fast 300 einsatzbereiten
          Kernwaffen. Die meisten davon sind auf U-Booten stationiert, während
          der Rest auf luftgestützten Marschflugkörpern positioniert ist.
          Frankreich betrachtet seine Abschreckungsstrategie als strikt
          defensiv, schließt jedoch die Möglichkeit nicht aus, in "extremen
          Situationen legitimier Selbstverteidigung" als Erster Kernwaffen
          einzusetzen.
        </p>
      </Section>
      <Section title="China" id="" side="left">
        <p className="text-white">
          China entwickelte während des Kalten Krieges Kernwaffen und besitzt
          derzeit etwa 350 Sprengköpfe, von denen nur rund hundert auf Raketen
          stationiert sind, die die USA erreichen könnten. Im Gegensatz zu den
          USA sind Chinas Raketen nicht ständig einsatzbereit, da die meisten
          Sprengköpfe während Friedenszeiten nicht mit den Raketen verbunden
          sind. Diese Vorgehensweise unterstützt Chinas langjährige Politik des
          "Kein-Erstschlag"-Nukleareinsatzes. Sowohl China als auch Russland
          sind besorgt über die fortgesetzten US-Investitionen in
          Erstschlagoptionen und Raketenabwehrsysteme. Experten aus beiden
          Ländern haben gewarnt, dass diese Bedenken dazu führen könnten, dass
          China die Anzahl und Qualität seiner Nuklearwaffen erhöht, wenn keine
          diplomatischen Initiativen ergriffen werden.
        </p>
      </Section>
      <Section title="Vereinigtes Königreich" id="" side="right">
        <p className="text-white">
          Das Vereinigte Königreich besitzt etwa 120 "operationell verfügbare"
          Kernwaffen, die auf U-Booten stationiert sind oder schnell geladen
          werden können, wobei etwa 40 von ihnen jederzeit einsatzbereit sind.
          Diese Waffen werden ausschließlich auf See eingesetzt und befinden
          sich auf Trident-U-Booten, die ballistische Raketen aus den
          Vereinigten Staaten nutzen.
        </p>
        <br />
        <p className="text-white">
          Obwohl das Vereinigte Königreich zuvor versprochen hatte, nicht mehr
          als maximal 180 Atomkriegköpfe zu haben, hat es angekündigt, diese
          Obergrenze auf 260 Sprengköpfe zu erhöhen, was einer Steigerung um
          mehr als 40 Prozent entspricht.
        </p>
      </Section>
      <Section title="Indien" id="" side="left">
        <p className="text-white">
          Indien verfügt über etwa 150 Kernwaffen und produziert weitere. Obwohl
          langanhaltende Konflikte mit Pakistan historisch gesehen im Fokus von
          Indiens Atomprogramm standen, wächst auch die Besorgnis über die
          Beziehungen zu China. Dies kompliziert die regionale Situation weiter,
          da jegliche Schritte, die Indien unternimmt, um seine Atomwaffen als
          Reaktion auf China zu modernisieren, zwangsläufig eine Bedrohung für
          Pakistan darstellen und die Wahrscheinlichkeit eines Wettrüstens
          erhöhen könnten.
        </p>
      </Section>
      <Section title="Pakistan" id="" side="right">
        <p className="text-white">
          Wie Indien verfügt auch Pakistan über etwa 150 Kernwaffen und stellt
          weiterhin mehr her. Die zukünftige Größe und Zusammensetzung seines
          Atomwaffenarsenals hängt wahrscheinlich stark davon ab, was Indien
          unternimmt. Eine verstärkte Betonung von kurzreichweiten, "taktischen"
          Atomwaffen weckt jedoch Bedenken, dass Pakistan die Schwelle für den
          Einsatz dieser Waffen senken könnte.
        </p>
      </Section>
      <Section title="Israel" id="" side="left">
        <p className="text-white">
          Israel gibt nicht öffentlich zu, Atomwaffen zu besitzen, aber es wird
          allgemein angenommen, dass das Land ungefähr hundert solcher Waffen
          unterhält. Dieses Arsenal führt dazu, dass andere nahegelegene Länder
          mehr Interesse daran haben, Technologie für die Nutzung von
          Kernenergie zu erwerben, die, wenn umgeleitet, ihnen die Möglichkeit
          bieten könnte, Atomwaffen zu entwickeln.
        </p>
      </Section>
      <Section title="Nordkorea" id="" side="right">
        <p className="text-white">
          Nach dem Ende des Kalten Krieges geriet Nordkorea in wirtschaftliche
          Turbulenzen. Um diplomatische Verhandlungsmacht und Sicherheitszusagen
          zu erhalten, beschleunigte das Land sein Atomprogramm, trotz
          wiederholter Versuche der USA, es zu begrenzen. Heute besitzt
          Nordkorea genug nukleares Material für 30 bis 40 Atomkriegsköpfe und
          möglicherweise 10 bis 20 einsatzbereite Waffen. Das Land entwickelt
          auch weiterhin seine Langstreckenraketenkapazitäten, was neue
          Herausforderungen für Ostasien darstellt. Die Wiederaufnahme
          produktiver Gespräche mit Nordkorea erfordert eine enge Koordination
          der USA mit ihren asiatischen Verbündeten und China, obwohl dies
          angesichts der verschlechterten Beziehungen zwischen den USA und China
          schwieriger geworden ist.
        </p>
      </Section>
      <Section
        title="Politische Auswirkung der Atomwaffen"
        id="poliauswirkung"
        side="left"
        images={[
          "https://www.greenleft.org.au/sites/default/files/styles/new_large/public/p3_trump-launch.jpg?itok=t3-WfQR6",
        ]}
      >
        <p className="text-white">
          Die Entwicklung von Atomwaffen und das Monopol einiger Staaten darüber
          führten zur Entstehung einer nuklearen Hegemonie und der Bedrohung
          durch nukleare Erpressung in den internationalen Beziehungen. Die
          nuklearen Mächte erlangten die Fähigkeit, die "Bedrohung durch
          Atomwaffen" zu nutzen, um ihre nationalen Interessen in den
          internationalen Beziehungen zu sichern.
        </p>
        <br />
        <p className="text-white">
          Sie erhielten die Möglichkeit, die Bedrohung eines Atomkrieges
          einzusetzen, um ihre gewünschten Ziele in Beziehungen zu
          nicht-nuklearen Staaten zu erreichen. Darüber hinaus zwang sie dies
          dazu, ihre nukleare Überlegenheit aufrechtzuerhalten und zu
          verhindern, dass nicht-nukleare Staaten Atomwaffen und Atomtechnologie
          erlangen. Sie entwickelten und erweiterten ständig ihre Atommacht und
          versuchten gleichzeitig immer, nicht-nuklearen Staaten dies im Namen
          des Weltfriedens zu verwehren.
        </p>
        <br />
        <p className="text-white">
          Der Moskauer Teilabrüstungsvertrag (Partial Test Ban Treaty, PTBT),
          der Nichtverbreitungsvertrag (NPT) und der Vertrag über das umfassende
          Verbot von Nuklearversuchen (Comprehensive Test Ban Treaty, CTBT)
          wurden alle von diesem verborgenen Verlangen geleitet. Die Frage der
          nuklearen Verbreitung gegenüber der Nichtverbreitung wurde zu einem
          Hauptthema in den internationalen Beziehungen, und auch heute ist sie
          ein heiß diskutiertes Thema.
        </p>
        <br />
        <p className="text-white">
          Die obige Darstellung zeigt deutlich, dass die Entstehung von
          Atomwaffen die Natur und den Inhalt der internationalen Beziehungen
          materiell beeinflusst hat. Die Atomwaffen waren dafür verantwortlich,
          dass das internationale System sich fast völlig von dem klassischen
          internationalen System unterschied.
        </p>
        <br />
        <p className="text-white">
          Atomwaffen können jetzt legitim als der Hauptfaktor in den
          internationalen Beziehungen bezeichnet werden. Während der Zeit von
          1945 bis 1990 beeinflussten Atomwaffen die Politik des Kalten Krieges.
          Sie erschwerten die Sicherung von Abrüstung und Rüstungskontrolle
          erheblich und machten sie zu einer komplexen und problematischen sowie
          wenig erfolgreichen Übung. Sie trugen zur Schaffung eines
          Gleichgewichts des Schreckens in den internationalen Beziehungen bei.
        </p>
      </Section>
      <Section
        title="Folge von Einschlag einer Atombombe"
        id="einschlagundfolgen"
        side="right"
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/f/fe/Hardtack_Umbrella_nuke.jpg",
          "https://www.businessinsider.de/wp-content/uploads/2017/11/atompilz-nuclear-fallout-vorbereitung.jpg",
        ]}
      >
        <p className="text-white">
          Die Auswirkungen eines Atombombeneinschlags können äußerst verheerend
          sein und lassen sich in vier Hauptkategorien Druckwelle,
          Hitzestrahlung, radioaktive Strahlung und elektromagnetische Impulse
          unterscheiden.
        </p>
        <br />
        <p className="text-white">
          Die erste unmittelbare Auswirkung eines Atombombeneinschlags ist die
          Druckwelle, die durch die immense Hitze der Explosion erzeugt wird.
          Diese Druckwelle hat das Potenzial, Gebäude und Strukturen zu
          zerstören, und sie stellt eine unmittelbare Gefahr für Menschen dar,
          da sie sie gegen Wände oder Objekte schleudern kann. Darüber hinaus
          kann die Druckwelle auch zu erheblichen Gehörschäden führen.
        </p>
        <br />
        <p className="text-white">
          Die Hitzestrahlung entsteht aufgrund der immensen Hitze, die während
          der Explosion freigesetzt wird. Sie kann lebensbedrohliche
          Verbrennungen bei Menschen verursachen und hat auch das Potenzial,
          Gebäude und andere Bauwerke durch Feuer zu zerstören.
        </p>
        <br />
        <p className="text-white">
          Die Freisetzung von radioaktiver Strahlung erfolgt ebenfalls durch die
          Hitze während einer Explosion. Diese gefährliche Strahlung kann
          Menschen töten, indem sie ihre Zellen schädigt und das Risiko für
          Krebs erhöht. Zusätzlich besitzt sie die Fähigkeit, menschliche DNA zu
          verändern, was zu schwerwiegenden gesundheitlichen Beeinträchtigungen
          führen kann.
        </p>
        <br />
        <p className="text-white">
          Elektromagnetische Impulse entstehen aufgrund der extremen Hitze, die
          bei einer Explosion freigesetzt wird. Diese Impulse haben das
          Potenzial, elektronische Geräte zu zerstören und Stromausfälle zu
          verursachen.
        </p>
      </Section>
      <Section
        title="Unterschied zu normalen Waffen im Aufbau"
        id="differenzen"
        side="left"
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/f/fc/Implosionsdesign.svg",
        ]}
      >
        <p className="text-white">
          Jedem Menschen ist bewusst, dass eine Atomwaffen eine sehr grossen
          Schaden anrichten kann. Doch was macht sie so zerstörerisch? Der
          Aufbau einer Atomwaffe ist sehr komplex und besteht aus vielen
          verschiedenen Komponenten. Eine Antom besteht aus einer Kugel aus
          Plutonium-239 und aus einer Uran-235, in der sich eine Neutronenquelle
          befindet. Die Kugel umgibt eine TNT schicht. Sobald das explodiert,
          wird die Netronenquelle wirksam. Durch den Druck Explosion und das
          Zusammendrücken der radioaktive Stoffen erreicht die Massedes
          Spaltmaterials ihren kritischen Zustand.
        </p>
      </Section>
      <div className="flex w-full justify-center items-center">
        <Contact />
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="fixed bottom-5 right-5 z-50 p-5 bg-[#5c5c5cae] rounded-full shadow-xl"
      >
        <MdOutlineKeyboardDoubleArrowUp />
      </button>
      <Tryout />
    </div>
  );
}
export default App;
