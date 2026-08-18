import { useState } from 'react'
import ChooseChallenge from './component/ChooseChallenge.tsx'
import ChallengeDetail from './component/ChallengeDetail.tsx'
import Coding from './component/Coding.tsx'

import './App.css'

function App() {
  const [challenge, setChallenge] = useState<number|null>()
  const [challengeRule, setChallengeRule] = useState();

  return (
    <div>
      {!challenge ? (
        <div className="flex items-center">
          <div className="flex-1 p-8">
            <h1 className='text-6xl font-bold pb-10'>Coding Challenge App</h1>
            <p className='pb-20 border-b border-solid border-gray-300'>プログラミング学習のための、コーディングチャレンジアプリです。<br/>
              JavaScript のコーディング問題に、挑戦しましょう🔥</p>
            <ChooseChallenge 
              setChallenge={setChallenge}
              setChallengeRule={setChallengeRule}
            />
          </div>
          <div className="flex-1">
            <Coding 
              challenge={challenge}
            />
          </div>
        </div>
        ) : (
          <>
            <ChallengeDetail 
              challenge={challenge}
              setChallenge={setChallenge}
              setChallengeRule={setChallengeRule}
              challengeRule={challengeRule}
            />
  
          </>
        )
      }

    </div>
  )
}

export default App
