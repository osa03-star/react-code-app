import type { JSX } from 'react';
import {challengeStrs} from '../data/ChallengeText.tsx';
import type {Challenge} from '../type/type.tsx'

type ChooseChallengeProps = {
  setChallenge: React.Dispatch<React.SetStateAction<number|null>>;
  setChallengeRule: React.Dispatch<React.SetStateAction<Challenge|null>>;
}

const ChooseChallenge = (props: ChooseChallengeProps): JSX.Element => {
  const setChallenge = (number:number) => {
    props.setChallenge(number)
    let item = null;
    if(number){
      item = challengeStrs.find(item => item.id === number);
    }
    if (item) {
      props.setChallengeRule(item);
    }
  }
  
  return(
    <div>
      <h3 className='text-xl mb-4 mt-4'>本日のスキルチェック</h3>
      <div onClick={() => setChallenge(1)} className='border-1 border-solid p-4 bg-orange-50 border-gray-200 mb-4 rounded-lg cursor-pointer'>1.合計値を求める</div>
      <div onClick={() => setChallenge(2)} className='border-1 border-solid p-4 bg-orange-50 border-gray-200 mb-4 rounded-lg cursor-pointer'>2.配列の総和を求める</div>
      <div onClick={() => setChallenge(3)} className='border-1 border-solid p-4 bg-orange-50 border-gray-200 mb-4 rounded-lg cursor-pointer'>3.FizzBuzz 問題</div>
    </div>
  )
}

export default ChooseChallenge