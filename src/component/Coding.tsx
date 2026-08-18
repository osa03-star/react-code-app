import { useState } from 'react'
import type { JSX } from 'react';
import { CiUndo } from "react-icons/ci";
import type {Challenge, TestResult} from '../type/type.tsx'
type CodingProps = {
  challenge: number|null;
  setTestResults?: React.Dispatch<React.SetStateAction<TestResult[]>>;
  challengeRule?: Challenge | null;
  setChallengeRule?: React.Dispatch<React.SetStateAction<Challenge|null>>;
}
const Coding = (props: CodingProps): JSX.Element => {
  let defaultText = `
      export default function MyApp() {
        return (
          <div>
            <h1>Welcome to my app ;)</h1>
            <CodingChallenge />
          </div>
        );
      }
    `;
  const [code, setCode] = useState<string>(props?.challengeRule?.code ?? defaultText);

  const run = () => {
    // textareaのコードから関数を作成
    const userFunction = new Function(`${code}; return ${getFunctionName(code)};`)();
    const results = props?.challengeRule?.testCases.map((testCase) => {
      const result = userFunction(...testCase.input);
      return {
        input: testCase.input,
        result,
        expected: testCase.expected,
        passed: JSON.stringify(result) === JSON.stringify(testCase.expected),
      };
    })
    if(results){
      props?.setTestResults?.(results);
    }
  }

  const getFunctionName = (code: string) => {
    const match = code.match(/function\s+(\w+)/);

    if (!match) {
      throw new Error("関数が見つかりません");
    }

    return match[1];
  };

  return (
    <div className='flex h-screen flex-col bg-black text-white'>
      <div className="flex items-center space-x-2 p-4 border-b border-gray-700 bg-[#252526]"><span className="h-3 w-3 rounded-full bg-[#FF6B2C]"></span><span className="h-3 w-3 rounded-full bg-[#FFD600]"></span><span className="h-3 w-3 rounded-full bg-[#6CD076]"></span></div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className='w-full flex-1 pl-2"'
      />
      <div className='flex justify-between'>
        <div className='flex items-center cursor-pointer' onClick={() => {setCode(props?.challengeRule?.code || defaultText)}}><CiUndo />Reset</div>
        <button 
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        onClick={run} disabled={!props.challenge}>Run Code</button>
      </div>
    </div>
  );
}


export default Coding