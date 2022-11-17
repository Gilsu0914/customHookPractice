import { useState, useEffect } from 'react';

export default function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + '/' + type)
      .then((res) => {
        return res.json(); //객체형태로 얻어오기
      })
      .then((jsondata) => setData(jsondata));
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return {
    data,
    fetchUrl,
  };
}
