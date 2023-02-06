import React, { useState, useRef } from 'react';
import { CookiesProvider } from 'react-cookie';
import './index.scss';
import sampleData from '../sampledata.js';
import Overview from './components/overview/overview.jsx';
import Questions from './components/questions/questions.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Related from './components/related/related.jsx';

const sampleProduct = {
  id: 37315,
  campus: 'hr-rfe',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-08-13T14:37:33.145Z',
  updated_at: '2021-08-13T14:37:33.145Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};

function App() {
  const [productID, setProductID] = useState('37315');
  const [product, setProduct] = useState(sampleProduct);
  const ratingRef = useRef();
  return (
    <CookiesProvider>
      <div>
        <Overview productID={productID} setProductID={setProductID} ratingRef={ratingRef} />
        <div ref={ratingRef}><Ratings /></div>
        <Related productID={productID} setProduct={setProductID} />
        <Questions productID={productID} product={product} />
      </div>
    </CookiesProvider>
  );
}

export default App;
