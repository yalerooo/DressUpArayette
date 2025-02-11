import React from 'react';

function Character({ currentItems }) {
    return (
        <div className="game-container">
            {/* Background Layer (always present) */}
            <div className="background-layer" style={{ backgroundImage: `url('${currentItems.background.img}')` }}></div>

            {/* Character Layers */}
            <div className="character-layer" id="makeup" style={{ backgroundImage: currentItems.makeup ? `url(${currentItems.makeup.img})` : '' }}></div>
            <div className="character-layer" id="body" style={{ backgroundImage: `url(${currentItems.body.img})` }}></div> {/* Body is always visible */}
            <div className="character-layer" id="tops" style={{ backgroundImage: currentItems.tops ? `url(${currentItems.tops.img})` : '' }}></div>
            <div className="character-layer" id="bottoms" style={{ backgroundImage: currentItems.bottoms ? `url(${currentItems.bottoms.img})` : '' }}></div>
            <div className="character-layer" id="shoes" style={{ backgroundImage: currentItems.shoes ? `url(${currentItems.shoes.img})` : '' }}></div>
            <div className="character-layer" id="bow" style={{ backgroundImage: currentItems.bow ? `url(${currentItems.bow.img})` : '', display: currentItems.bow ? 'block' : 'none' }}></div>
            <div className="character-layer" id="hats" style={{ backgroundImage: currentItems.hats ? `url(${currentItems.hats.img})` : '', display: currentItems.hats ? 'block' : 'none' }}></div>
            <div className="character-layer" id="bags" style={{ backgroundImage: currentItems.bags ? `url(${currentItems.bags.img})` : '', display: currentItems.bags ? 'block' : 'none' }}></div>
            <div className="character-layer" id="necklaces" style={{ backgroundImage: currentItems.necklaces ? `url(${currentItems.necklaces.img})` : '', display: currentItems.necklaces ? 'block' : 'none' }}></div>
            <div className="character-layer" id="pets" style={{ backgroundImage: currentItems.pets ? `url(${currentItems.pets.img})` : '', display: currentItems.pets ? 'block' : 'none' }}></div>
        </div>
    );
}

export default Character;