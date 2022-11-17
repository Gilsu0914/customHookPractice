import React from 'react';
import useInput from '../customHooks/useInput';

function displayMessage(message) {
  alert(message);
}

function Input() {
  //배열로 받아온 경우에만 커스텀후크를 복사하여 사용 가능한 것 같다.
  const [inputValue, handleChange, handleSubmit] = useInput('', displayMessage);
  const [inputValue2, handleChange2, handleSubmit2] = useInput('', displayMessage);

  return (
    <div>
      <h1>useInput 커스텀을 활용해볼까요?</h1>
      <h4>아무 글자나 입력해보세요.</h4>
      <div>
        <input type='text' value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>입력값 제출1</button>
      </div>
      <div>
        <input type='text' value={inputValue2} onChange={handleChange2} />
        <button onClick={handleSubmit2}>입력값 제출2</button>
      </div>
    </div>
  );
}

export default Input;
