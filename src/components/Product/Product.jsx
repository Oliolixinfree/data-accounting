import React, { useState } from 'react';
import styles from './Product.module.scss';

export const Product = ({ name, brand, count, series, test }) => {
  console.log('test', test);
  const [totalCount, setTotalCount] = useState();
  const [result, setResult] = useState();

  const handleClick = () => {
    setResult(totalCount - count);
  };

  // useEffect(() => {}, [totalCount]);
  // console.log(result);

  return (
    <section className={styles.wrapper}>
      {test.map((item) => (
        <div>{item.file}</div>
      ))}
      {/* <div>Brand: {brand.toUpperCase()}</div> */}
      <div>
        {name.toUpperCase()} {series.toUpperCase()}
      </div>
      <div>Count: {count} pic</div>
      {/* <input type="number" onChange={(e) => handleClick(e.target.value)} /> */}
      <input type="number" onChange={(e) => setTotalCount(e.target.value)} />
      <button onClick={() => handleClick()}>save</button>
      <div className={result && result !== 0 ? styles.error : ''}>Result: {result}</div>
    </section>
  );
};
