import type { JSX } from 'react';
import { useState } from 'react'
import {challengeStrs} from '../data/ChallengeText.tsx'
import Result from './Result.tsx'
import type {TestResult} from '../type/type.ts'
import Coding from './Coding.tsx'
import type {Challenge} from '../type/type.tsx'
import { GoChevronLeft } from "react-icons/go";

type ChallengeDetailProps = {
  challenge: number;
  setChallenge: React.Dispatch<React.SetStateAction<number|null>>;
  setChallengeRule: React.Dispatch<React.SetStateAction<string>>;
  challengeRule: Challenge;
}

const ChallengeDetail = (props: ChallengeDetailProps): JSX.Element => {
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isHintOpen, setIsHintOpen] = useState(false);
  let item = null;
  if(props.challenge){
    item = challengeStrs.find(item => item.id === props.challenge);
  }
  return(
    <div className="flex items-center">
      <div className="flex-1 pl-8 pr-8">
        <div onClick={() => {props.setChallenge(null)}} className='mb-4 flex items-center cursor-pointer'>
          <GoChevronLeft className='text-2xl'/>戻る
        </div>
        <h1 className='text-4xl font-bold pb-10'>{item.title}</h1>
        <p className='mb-4'>{item.description}</p>
        <ul className='mb-4 border-b border-solid border-gray-300'>
          <li className='border-1 border-solid p-4 bg-orange-50 border-gray-200 mb-4 rounded-lg cursor-pointer'>
            <button
              onClick={() => setIsHintOpen(!isHintOpen)}
              className="cursor-pointer text-blue-600 w-full text-left"
            >
              ヒント
            </button>

            <div className={isHintOpen ? "mt-2" : "hidden"}>
              {item.hint}
            </div>
          </li>
        </ul>
        <p className='mb-4'>実行結果</p>
        <Result 
          testResults={testResults}
        />
      </div>
      <div className="flex-1">
        <Coding 
          challenge={props.challenge}
          setTestResults={setTestResults}
          setChallengeRule={props.setChallengeRule}
          challengeRule={props.challengeRule}
        />
      </div>
    </div>
  )
}

export default ChallengeDetail