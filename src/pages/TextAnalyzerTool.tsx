import React, { useEffect, useState } from "react";

interface ITextAnalyzer{
    word:number,
    character:number
    // sentence:number
}

export const TextAnalyzerTool = () => {
  const [inputText, setInputText] = useState<string>("");
  const [result, setResult] = useState<ITextAnalyzer>({
    word: 0,
    character: 0,
    // sentence: 0
  });

  const analyzetextInput = () => {
     const characterLength = inputText.length;
     const wordCountArr  = inputText?.split(' ');
    const filterWordCountWithSpace = [...wordCountArr]?.filter((item:string)=> item!=='');
    // const sentenceCountArr  = inputText?.split('. ');
    // const filterSentenceCountWithSpace = [...sentenceCountArr]?.filter((item:string)=> item!=='');

     setResult({
        ...result,
        character:characterLength,
        word:filterWordCountWithSpace?.length,
        // sentence: sentenceCountArr?.length
     });

  };

  useEffect(()=>{
    analyzetextInput();
  },[inputText]);

  return (
    <div>
      <h1>Text Analyzer Tool</h1>
      <div className="flex justify-between items-center flex-wrap">
        <p>Character: {result?.character}</p>
        <p>Word: {result?.word}</p>
        {/* <p>Sentence: {result?.sentence}</p>
         */}
      </div>
      <textarea
        name="inputText"
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setInputText(e.target.value)
        }
        className="p-lg rounded-lg"
      />
    </div>
  );
};
