import { useState } from 'react'
import type { JSX } from 'react';
import type {TestResult} from '../type/type.ts'
import { GoX, GoCircle } from "react-icons/go";

type ResultProps = {
  testResults: TestResult[];
}

const Result = (props: ResultProps): JSX.Element => {
  return(
    <>
      {props.testResults.map((result, index) => (
        <div key={index} className={`border-1 border-solid p-4 border-gray-200 mb-4 rounded-lg flex items-center gap-2 ${result.passed ? "bg-green-100" : "bg-red-100"}`}>
          <div className={`text-xl ${result.passed ? "text-green-500" : "text-red-500"}`}>{result.passed ? <GoCircle/> : <GoX/>}</div>
          <div>
            <p>入力: [{result.input.join(", ")}]</p>
            <p>期待値: {result.expected}</p>
            <p>実際の値: {result.result}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Result