import React, { useState, useEffect } from 'react';
export default function Test() {
  const [num, setNum] = useState(1);
  const doSth = () =>
    setNum((number) => {
      return number + 1;
    });
  useEffect(() => {
    console.log(num);
    return () => {
      console.log('finish');
    };
  }, [num]);
  return (
    <div>
      <span>{num}</span>
      <button onClick={doSth}>button</button>
    </div>
  );
}
