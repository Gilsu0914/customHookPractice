import React from 'react';
import useFetch from '../customHooks/useFetch';

//com슬래시 뒤에 users나 posts, todos 등등 올 수 있으니 염두해두기 위해 변수로 빼주기
const baseUrl = 'https://jsonplaceholder.typicode.com';

export default function Fetch() {
  const { data, fetchUrl } = useFetch(baseUrl, 'users');

  return (
    <div>
      <h1>useFetch를 사용해 볼까요?</h1>

      <button onClick={() => fetchUrl('users')}>users</button>
      <button onClick={() => fetchUrl('posts')}>posts</button>
      <button onClick={() => fetchUrl('todos')}>todos</button>
      <h4>⬇️ 데이터 인덱스 0번째의 id 가져와보기</h4>
      {data && <p>{data[0].id}</p>}
      <br />
      <h4>⬇️ 데이터 쭈루룩 나열</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
