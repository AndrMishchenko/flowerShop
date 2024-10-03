import React, { useState } from 'react';
import './App.css';
import Additionally from './components/Additionally/Additionally';
import Catalog from './components/Catalog/Catalog';
import MainImage from './components/MainImage/MainImage';
import Navigation from './components/Navigation/Navigation';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';
import AboutWork from './components/AboutWork/AboutWork';
import HowWork from './components/HowWork/HowWork';
import SocialNetwork from './components/SocialNetwork/SocialNetwork';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  const [flowerCount, setFlowerCount] = useState(0);
  const [candyCount, setCandyCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const addItemToOrder = (item) => {
    setSelectedItems(prev => [...prev, item]);
    setTotalAmount(prev => prev + item.prize); 
  };

  return (
    <div className="wrapper">
      <Navigation 
        candy={candyCount} 
        currentFlowers={flowerCount} 
        totalAmount={totalAmount} 
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems} 
        setTotalAmount={setTotalAmount} 
      />
      <MainImage />
      <Catalog 
        addItemToOrder={addItemToOrder} 
      />
      <SpecialOffer 
        setFlowerCount={setFlowerCount} 
        setTotalAmount={setTotalAmount} 
        addItemToOrder={addItemToOrder} 
      />
      <Additionally 
        setCandyCount={setCandyCount} 
        setTotalAmount={setTotalAmount}
        addItemToOrder={addItemToOrder} 
      />
      <AboutWork />
      <SocialNetwork />
      <HowWork />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
