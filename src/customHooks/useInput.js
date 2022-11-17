import { useState } from 'react';

export default function useInput(initialValue, subtmitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  //input 입력값
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //제출시 발동할 함수
  const handleSubmit = () => {
    setInputValue('');
    subtmitAction(inputValue);
  };

  //디스트럭처링으로 해도 되고, 배열로 해도 되고 둘 다 장단점이 있음.
  return [inputValue, handleChange, handleSubmit];
}
