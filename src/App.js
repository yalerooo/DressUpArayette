// src/App.js
import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import ItemGrid from './components/ItemGrid';
import BlurText from './components/BlurText';
import ClickSpark from './components/ClickSpark';
import CaptureButton from './components/CaptureButton';
import assets from './assets/assets';
import './App.css';
import Noise from './components/Noise'; // Import the Noise component
import cameraIcon from './assets/thumbnails/camera_icon_thumb.png';

const LOCAL_STORAGE_KEY = 'dressUpArayette_save';

function App() {
    const [currentItems, setCurrentItems] = useState(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedData ? JSON.parse(savedData) : {
            makeup: assets.makeup[0],
            body: assets.body[0],
            tops: assets.tops[0],
            bottoms: assets.bottoms[0],
            shoes: assets.shoes[0],
            background: assets.background[0],
            bow: null,
            hats: null,
            bags: null,
            necklaces: null,
            pets: null,
        };
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentItems));
    }, [currentItems]);

    const handleItemClick = (category, item) => {
        const toggleableCategories = ['bow', 'hats', 'bags', 'necklaces', 'pets'];

        setCurrentItems(prevItems => ({
            ...prevItems,
            [category]: toggleableCategories.includes(category) ? (prevItems[category]?.id === item.id ? null : item) : item,
        }));
    };

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="App">
          <Noise />
          <div className="title-container">
            <BlurText
              text="Dress Up Arayette"
              delay={100}
              animateBy="words"
              direction="top"
              className="game-title"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className="game-wrapper">
            <div id="game-container">
              <CaptureButton targetElementId="game-container" imageSrc={cameraIcon} />
              <Character currentItems={currentItems} />
              <ClickSpark />
            </div>
            <div className="item-grids-container">
              {Object.keys(assets)
                .filter(category => category !== 'body')
                .map(category => (
                  <ItemGrid
                    key={category}
                    category={category}
                    items={assets[category]}
                    currentItem={currentItems[category]}
                    onItemClick={handleItemClick}
                  />
                ))}
            </div>
          </div>
        </div>
      );
    }

export default App;