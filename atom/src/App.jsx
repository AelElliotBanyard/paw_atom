import Footer from './components/Footer';
import Contact from './components/Contact'
import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <div className=" bg-main bg-center bg-cover w-screen min-h-screen p-10">
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
      <Contact />   
      <Footer/>
    </div>
  );
}
export default App;
