import React from "react";

export default function DefinitionList({ def }: { def: any }) {
  return (
    <li className="text-md list-disc text-gray-200 ">
      {def.definition}

      {def.antonyms.length > 0 && (
        <p className="text-sky-500 pl-1 pt-2 text-sm flex gap-2">
          {" "}
          Antonyms
          <span className="text-gray-400">{def?.antonyms?.join(", ")}</span>
        </p>
      )}
      {def?.synonyms.length > 0 && (
        <p className="text-sky-500 pl-1 pt-2 text-sm flex gap-2">
          {" "}
          Synonyms
          <span className="text-gray-400">{def?.synonyms?.join(", ")}</span>
        </p>
      )}

      {def?.example && (
        <p className="text-sky-100 bg-gray-400/[0.2] px-2 py-1 my-2 rounded-lg w-fit">
          {def?.example}
        </p>
      )}
    </li>
  );
}
