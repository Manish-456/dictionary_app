import React from 'react'
import { Icons } from './icons';
import DefinitionList from './definitionList';
import SourceUrls from './sourceUrls';

interface ResultProps {
    meanings : any[]
}
export default function Results({meanings} : ResultProps) {
      // play the speech
  function handleClick() {
    // Try to access the first meaning's phonetics array and filter out elements with audio
    let music = meanings?.[0]?.phonetics.filter((speech: any) => speech.audio);

    // Generate a random index within the range of the filtered music array
    const randomIndex = Math.floor(Math.random() * music?.length);

    // Create a new HTML Audio object to handle audio playback
    let audio = new Audio();

    // Set the audio source to the randomly selected audio element
    audio.src = music[randomIndex]?.audio;

    // Attempt to play the selected audio, if available
    audio?.play();
  }
  return (
    <>
       <div className="flex  items-center gap-24 justify-between">
        <h1 className="font-bold flex-1 text-4xl">{meanings?.[0]?.word}</h1>
        <div
          onClick={handleClick}
          className="bg-gray-400/[0.2] hover:bg-sky-700/[0.2]   cursor-pointer rounded-full p-2"
        >
          <Icons.play />
        </div>
      </div>
      <p className="text-xl text-sky-600 mt-3">{meanings?.[0]?.phonetic}</p>
      <div className="my-4">
      
        <div className="flex  flex-col gap-4">
          {
        meanings.length > 0 &&  meanings?.map((dist:any, index : number) => {
              return (
                <div key={index}>
        { dist?.meanings?.map((meaning: any) => (
      <div className="mt-8" key={meaning.partOfSpeech}>
        <div className="flex  items-center gap-4">
        
            <h3 className="text-2xl font-serif font-semibold">
              {meaning.partOfSpeech}
            </h3>
        
       
          <div className="h-[0.5px] w-full bg-white"></div>
        </div>
        <ul role="list" className="flex  flex-col gap-3">
        <h4 className=" text-lg leading-loose mt-2 font-base">Meaning</h4>

          {meaning?.definitions?.map((def: any, index: number) => (
             <DefinitionList key={index} def={def} />
          ))}
        </ul>

        {meaning.antonyms.length > 0 && (
          <p className=" text-gray-600 mt-4">Antonyms: <span className=" text-gray-400">{meaning?.antonyms.join(", ")}</span></p>
        )}
        {meaning.synonyms.length > 0 && (
          <p className=" text-gray-600 mt-4">Synonyms: <span className=" text-gray-400">{meaning?.synonyms.join(", ")}</span></p>
        )}

       {
        dist?.sourceUrls?.length > 0 && (
     <SourceUrls dist={dist} />
        )
       }
      </div>
    ))}
                </div>
                )
            })
          }
        </div>
      </div>
    </>
  )
}
