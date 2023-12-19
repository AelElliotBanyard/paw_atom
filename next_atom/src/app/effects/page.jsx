import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img src="/img/explosion.jpg" alt="" />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl flex justify-center items-center font-bold backdrop-blur-lg p-10 rounded-md">
        Auswirkungen
      </p>
      <div className="w-full h-full flex flex-col ">
        <div className="bg-white text-black flex flex-col justify-center items-center gap-10 p-5">
          <div className="flex flex-col justify-center items-center text-center gap-3">
            <p className="text-5xl">Einschlag</p>
            <p className="text-3xl">
              Die vier Hauptkategorien der Auswirkungen eines Atombombeneinschlags
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-white ">
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg ">
              Die erste unmittelbare Auswirkung eines Atombombeneinschlags ist die
              Druckwelle, die durch die immense Hitze der Explosion erzeugt wird.
              Diese Druckwelle hat das Potenzial, Gebäude und Strukturen zu
              zerstören, und sie stellt eine unmittelbare Gefahr für Menschen dar,
              da sie sie gegen Wände oder Objekte schleudern kann. Darüber hinaus
              kann die Druckwelle auch zu erheblichen Gehörschäden führen.
            </p>
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg">
              Die Hitzestrahlung entsteht aufgrund der immensen Hitze, die während
              der Explosion freigesetzt wird. Sie kann lebensbedrohliche
              Verbrennungen bei Menschen verursachen und hat auch das Potenzial,
              Gebäude und andere Bauwerke durch Feuer zu zerstören.
            </p>
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg">
              Die Freisetzung von radioaktiver Strahlung erfolgt ebenfalls durch
              die Hitze während einer Explosion. Diese gefährliche Strahlung kann
              Menschen töten, indem sie ihre Zellen schädigt und das Risiko für
              Krebs erhöht. Zusätzlich besitzt sie die Fähigkeit, menschliche DNA
              zu verändern, was zu schwerwiegenden gesundheitlichen
              Beeinträchtigungen führen kann.
            </p>
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg">
              Elektromagnetische Impulse entstehen aufgrund der extremen Hitze,
              die bei einer Explosion freigesetzt wird. Diese Impulse haben das
              Potenzial, elektronische Geräte zu zerstören und Stromausfälle zu
              verursachen.
            </p>
          </div>
        </div>
        <div className="bg-white text-black flex flex-col justify-center items-center gap-10 p-5">
          <div className="flex flex-col justify-center items-center text-center gap-3">
            <p className="text-5xl">Politische Auswirkung</p>
            <p className="bg-black rounded p-4 bg-opacity-80 h-full shadow-black shadow-lg text-white">
              Die Entwicklung von Atomwaffen und das Monopol einiger Staaten
              darüber führten zur Entstehung einer nuklearen Hegemonie und der
              Bedrohung durch nukleare Erpressung in den internationalen
              Beziehungen. Die nuklearen Mächte erlangten die Fähigkeit, die
              "Bedrohung durch Atomwaffen" zu nutzen, um ihre nationalen
              Interessen in den internationalen Beziehungen zu sichern.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-white ">
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg">
              Sie erhielten die Möglichkeit, die Bedrohung eines Atomkrieges
              einzusetzen, um ihre gewünschten Ziele in Beziehungen zu
              nicht-nuklearen Staaten zu erreichen. Darüber hinaus zwang sie dies
              dazu, ihre nukleare Überlegenheit aufrechtzuerhalten und zu
              verhindern, dass nicht-nukleare Staaten Atomwaffen und
              Atomtechnologie erlangen. Sie entwickelten und erweiterten ständig
              ihre Atommacht und versuchten gleichzeitig immer, nicht-nuklearen
              Staaten dies im Namen des Weltfriedens zu verwehren.
            </p>
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg">
              Der Moskauer Teilabrüstungsvertrag (Partial Test Ban Treaty, PTBT),
              der Nichtverbreitungsvertrag (NPT) und der Vertrag über das
              umfassende Verbot von Nuklearversuchen (Comprehensive Test Ban
              Treaty, CTBT) wurden alle von diesem verborgenen Verlangen geleitet.
              Die Frage der nuklearen Verbreitung gegenüber der Nichtverbreitung
              wurde zu einem Hauptthema in den internationalen Beziehungen, und
              auch heute ist sie ein heiß diskutiertes Thema.
            </p>
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg">
              Die obige Darstellung zeigt deutlich, dass die Entstehung von
              Atomwaffen die Natur und den Inhalt der internationalen Beziehungen
              materiell beeinflusst hat. Die Atomwaffen waren dafür
              verantwortlich, dass das internationale System sich fast völlig von
              dem klassischen internationalen System unterschied.
            </p>
            <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-black shadow-lg">
              Atomwaffen können jetzt legitim als der Hauptfaktor in den
              internationalen Beziehungen bezeichnet werden. Während der Zeit von
              1945 bis 1990 beeinflussten Atomwaffen die Politik des Kalten
              Krieges. Sie erschwerten die Sicherung von Abrüstung und
              Rüstungskontrolle erheblich und machten sie zu einer komplexen und
              problematischen sowie wenig erfolgreichen Übung. Sie trugen zur
              Schaffung eines Gleichgewichts des Schreckens in den internationalen
              Beziehungen bei.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;