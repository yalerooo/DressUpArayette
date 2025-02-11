import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import ItemGrid from './components/ItemGrid';
import ButtonBar from './components/ButtonBar';
import './App.css';

const assets = {
    makeup: [
        { img: 'assets/body/cara.png', thumb: 'assets/thumbnails/cara_thumb.png', name: 'Cara 1' },
        { img: 'assets/body/cara2.png', thumb: 'assets/thumbnails/cara2_thumb.png', name: 'Cara 2' },
    ],
    // body: [{ img: 'assets/body/cuerpo.png', thumb: 'assets/thumbnails/cuerpo_thumb.png', name: 'Cuerpo' }], // Keep the data, but don't include it in the grids
    tops: [
        { img: 'assets/tops/top1.png', thumb: 'assets/thumbnails/top1_thumb.png', name: 'Top 1' },
        { img: 'assets/tops/top2.png', thumb: 'assets/thumbnails/top2_thumb.png', name: 'Top 2' },
        { img: 'assets/tops/top3.png', thumb: 'assets/thumbnails/top3_thumb.png', name: 'Top 3' },
        { img: 'assets/tops/top4.png', thumb: 'assets/thumbnails/top4_thumb.png', name: 'Top 4' },
        { img: 'assets/tops/top5.png', thumb: 'assets/thumbnails/top5_thumb.png', name: 'Top 5' },
        { img: 'assets/tops/top6.png', thumb: 'assets/thumbnails/top6_thumb.png', name: 'Top 6' },
        { img: 'assets/tops/top7.png', thumb: 'assets/thumbnails/top7_thumb.png', name: 'Top 7' },
    ],
    bottoms: [
        { img: 'assets/bottoms/bottom1.png', thumb: 'assets/thumbnails/bottom1_thumb.png', name: 'Bottom 1' },
        { img: 'assets/bottoms/bottom2.png', thumb: 'assets/thumbnails/bottom2_thumb.png', name: 'Bottom 2' },
    ],
    shoes: [
        { img: 'assets/shoes/shoes1.png', thumb: 'assets/thumbnails/shoes1_thumb.png', name: 'Shoes 1' },
        { img: 'assets/shoes/shoes2.png', thumb: 'assets/thumbnails/shoes2_thumb.png', name: 'Shoes 2' },
        { img: 'assets/shoes/shoes3.png', thumb: 'assets/thumbnails/shoes3_thumb.png', name: 'Shoes 3' },
        { img: 'assets/shoes/shoes4.png', thumb: 'assets/thumbnails/shoes4_thumb.png', name: 'Shoes 4' },
        { img: 'assets/shoes/shoes5.png', thumb: 'assets/thumbnails/shoes5_thumb.png', name: 'Shoes 5' },
    ],
    background: [
        { img: 'assets/backgrounds/bg1.png', thumb: 'assets/thumbnails/bg1_thumb.png', name: 'Background 1' },
        { img: 'assets/backgrounds/bg2.jpg', thumb: 'assets/thumbnails/bg2_thumb.png', name: 'Background 2' },
        { img: 'assets/backgrounds/bg3.jpg', thumb: 'assets/thumbnails/bg3_thumb.jpg', name: 'Background 3' },
        { img: 'assets/backgrounds/bg4.jpg', thumb: 'assets/thumbnails/bg4_thumb.jpg', name: 'Background 4' },
        { img: 'assets/backgrounds/bg5.jpg', thumb: 'assets/thumbnails/bg5_thumb.jpg', name: 'Background 5' },
        { img: 'assets/backgrounds/bg6.jpg', thumb: 'assets/thumbnails/bg6_thumb.jpg', name: 'Background 6' },
        { img: 'assets/backgrounds/bg7.jpg', thumb: 'assets/thumbnails/bg7_thumb.jpg', name: 'Background 7' },
        { img: 'assets/backgrounds/bg8.png', thumb: 'assets/thumbnails/bg8_thumb.png', name: 'Background 8' },
        { img: 'assets/backgrounds/bg9.jpg', thumb: 'assets/thumbnails/bg9_thumb.jpg', name: 'Background 9' },
    ],
    bow: [
        { img: 'assets/bows/bow1.png', thumb: 'assets/thumbnails/bow1_thumb.png', name: 'Bow 1' },
        { img: 'assets/bows/bow2.png', thumb: 'assets/thumbnails/bow2_thumb.png', name: 'Bow 2' },
    ],
    hats: [
        { img: 'assets/hats/hat1.png', thumb: 'assets/thumbnails/hat1_thumb.png', name: 'Hat 1' },
        { img: 'assets/hats/hat2.png', thumb: 'assets/thumbnails/hat2_thumb.png', name: 'Hat 2' },
        { img: 'assets/hats/hat3.png', thumb: 'assets/thumbnails/hat3_thumb.png', name: 'Hat 3' },
    ],
    bags: [
        { img: 'assets/bags/bag1.png', thumb: 'assets/thumbnails/bag1_thumb.png', name: 'Bag 1' },
    ],
    necklaces: [
        { img: 'assets/necklaces/necklace1.png', thumb: 'assets/thumbnails/necklace1_thumb.png', name: 'Necklace 1' },
    ],
    pets: [
        { img: 'assets/pets/pet1.png', thumb: 'assets/thumbnails/pet1_thumb.png', name: 'Pet 1' },
        { img: 'assets/pets/pet2.png', thumb: 'assets/thumbnails/pet2_thumb.png', name: 'Pet 2' },
        { img: 'assets/pets/pet3.png', thumb: 'assets/thumbnails/pet3_thumb.png', name: 'Pet 3' },
    ]
};

function App() {
    const [currentItems, setCurrentItems] = useState(() => {
        const savedData = localStorage.getItem('dressUpArayette_save');
        return savedData ? JSON.parse(savedData) : {
            makeup: assets.makeup[0],
            body:  { img: 'assets/body/cuerpo.png', thumb: 'assets/thumbnails/cuerpo_thumb.png', name: 'Cuerpo' }, //Keep body fixed.
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
        localStorage.setItem('dressUpArayette_save', JSON.stringify(currentItems));
    }, [currentItems]);

    const handleItemClick = (category, item) => {
        const toggleableCategories = ['bow', 'hats', 'bags', 'necklaces', 'pets'];

        if (toggleableCategories.includes(category)) {
            setCurrentItems(prevItems => ({
                ...prevItems,
                [category]: prevItems[category] === item ? null : item,
            }));
        } else {
            setCurrentItems(prevItems => ({
                ...prevItems,
                [category]: item,
            }));
        }
    };

    const handleSave = () => {
        localStorage.setItem('dressUpArayette_save', JSON.stringify(currentItems));
        alert('¡Juego guardado!');
    };

    const handleLoad = () => {
        const savedData = localStorage.getItem('dressUpArayette_save');
        if (savedData) {
            setCurrentItems(JSON.parse(savedData));
            alert('¡Juego cargado!');
        } else {
            alert('No hay juego guardado.');
        }
    };


    return (
        <div className="App">
            <h1 className="game-title">Dress Up Arayette</h1>
            <ButtonBar onSave={handleSave} onLoad={handleLoad}  />
            <div className="game-wrapper">
                <Character currentItems={currentItems} />
                <div className="item-grids-container">
                    {/* Exclude 'body' from the item grids */}
                    {Object.keys(assets)
                      .filter(category => category !== 'body') // This line removes 'body'
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