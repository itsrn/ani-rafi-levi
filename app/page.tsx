"use client";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import first_part from "./api/first_part.json";
import second_part from "./api/second_part.json";
import episodes from "./api/episodes.json";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [firstPart, setFirstPart] = useState("");
  const [secondPart, setSecondPart] = useState("");
  const [episode, setEpisode] = useState("");
  
  function handleButtonClick(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      var randomIndex = Math.floor(Math.random() * first_part.length);
      setFirstPart(first_part[randomIndex]);
      setSecondPart(second_part[randomIndex]);
      setEpisode(episodes[randomIndex]);
      resolve();
      setShowText(true);
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#cbe7fc] text-right p-3 gap-y-3">
      <div>
        <Toaster reverseOrder={true} />
      </div>
      <header className="py-8">
        <h1 className="text-6xl font-normal text-[#1311da]">...אני רפי לוי</h1>
        <h1 className="text-4xl font-normal text-[#1311da]">
          מאגר המשפטים שרפי לוי אמר (וכמה אקסטרה שהמצאתי)
        </h1>
      </header>
      <main className="flex-grow">
        <div className="flex flex-col items-center">
          <button
            className="bg-[#1311da] text-white px-4 py-2 rounded text-xl"
            onClick={(t) => {
              toast.promise(handleButtonClick(), {
                loading: "...טוען משפט",
                success: "!המשפט נטען",
                error: ".קרתה תקלה",
              });
            }}
          >
            קבלו משפט
          </button>
          {showText && (
            <p className="mt-4 text-3xl text-[#1311da] w-2/3 text-center">
              אני רפי לוי, בילדותי לא היה לנו{" "}
              <span className="underline decoration-white font-bold">
                {firstPart}
              </span>
              , אז {"  "}
              <span className="underline decoration-white font-bold">
                {secondPart}
              </span>
              {"  "}
              <span className="text-xl opacity-50">({episode})</span>
            </p>
          )}
        </div>
      </main>
      <footer className="bg-[#cbe7fc] py-4 text-[#1311da] text-xl text-center">
        .נוצר על ידי רון נוס, בהשראת הרעיון של שירלי, תשפ&#34;ג | {"  "}
        {/* צריך להשתמש ב&#34; כי בריאקט אסור להשתמש במירכאות רגילות */}
        <a href="https://github.com/itsrn/ani-rafi-levi" target="_blank">
          לצפייה בקוד האתר בגיטהאב
        </a>
      </footer>
    </div>
  );
}
