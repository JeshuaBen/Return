import { CloseButton } from "../CloseButton";

import BugImgSvg from '../../Assets/bug.svg';
import IdeaImgSvg from '../../Assets/idea.svg';
import ThoughtImgSvg from '../../Assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImgSvg,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeaImgSvg,
      alt: 'Imagem de uma lâmpada acesa'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: ThoughtImgSvg,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

/*
  object.entries(feedbackTypes) ==> 
  [ 
    ['BUG', {...}], 
    ['IDEA', {...}], 
    ['BUG', {...}] 
  ]
*/

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null);

  function handleRestartFeedback () {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {
        !feedbackType ? (
          <FeedbackTypeStep 
            onFeedbackTypeChange={setFeedbackType}
          />
        
        ): <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestart={handleRestartFeedback}
        />
      }

      <footer>
        <span>Feito com ♥ pela <a href="https://www.rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a></span>
      </footer>
    </div>
  )
}