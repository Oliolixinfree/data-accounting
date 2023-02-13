import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { Product } from '../Product/Product';

export const ProductsList = () => {
  const productsCollectionRef = collection(db, '/products/9QkzKwpWVYYKOxdaFgQW/jti');
  const testRef = collection(db, '/products/9QkzKwpWVYYKOxdaFgQW/test12');
  const [products, setProducts] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      console.log(data.docs.map((el) => el.data()));
      const testData = await getDocs(testRef);

      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTest(testData.docs.map((el) => ({ ...el.data(), id: el.id })));

      console.log(products);
    };

    getProducts();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {products.map((prod) => {
        const productInfo = {
          name: prod.name,
          brand: prod.brand,
          count: prod.count,
          series: prod.series,
        };
        return <Product key={prod.id} {...productInfo} test={test} />;
      })}
    </div>
  );
};
