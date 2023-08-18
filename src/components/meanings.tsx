"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Results from "./Results";
import Error from "./error";
import Loading from "./loading";

interface MeaningProps {
  word: string;
}
export default function Meanings({ word }: MeaningProps) {
  const [meanings, setMeanings] = useState<any>([]);
  const [error, setError] = useState<null | {}>(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getMeanings() {
      try {
        setError(null)
        setIsLoading(true);
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setMeanings(response.data);
      } catch (error : any) {
        setError(error.response.data)
      }finally{
        setIsLoading(false);

      }
    }
    getMeanings();

  }, [word]);



  return (
    <div className="mt-16 px-4">
     {error ? <Error error={error} /> : isLoading ? <Loading /> : <Results meanings={meanings} />}
    </div>
  );
}

