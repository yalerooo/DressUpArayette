// src/pages/index.tsx
import { useEffect } from 'react';
import { assets, currentItems, createItemGrids, saveGame, loadGame, downloadImage, GameItem } from '../utils/gameLogic';

export default function Home() {
  useEffect(() => {
    initializeGame();
  }, []);

  function initializeGame() {
    // Set initial items (using the selected item objects, which are already correct)
    const makeupElement = document.getElementById('makeup');
    if (makeupElement) {
      makeupElement.style.backgroundImage = `url('${currentItems.makeup?.img}')`;
    }

    const bodyElement = document.getElementById('body');
    if (bodyElement) {
       bodyElement.style.backgroundImage = `url('${currentItems.body?.img}')`;
    }
   
    const topsElement = document.getElementById('tops');
    if(topsElement){
        topsElement.style.backgroundImage = `url('${currentItems.tops?.img}')`;
    }

    const bottomsElement = document.getElementById('bottoms');
    if(bottomsElement){
        bottomsElement.style.backgroundImage = `url('${currentItems.bottoms?.img}')`;
    }
     const shoesElement = document.getElementById('shoes');
    if(shoesElement){
        shoesElement.style.backgroundImage = `url('${currentItems.shoes?.img}')`;
    }
   
    const gameContainer = document.querySelector('.game-container');
    if(gameContainer){
      gameContainer.style.backgroundImage = `url('${currentItems.background?.img}')`;
    }

    createItemGrids();

    // Add 'selected' class to initial items.
    for (const category in currentItems) {
      if (currentItems[category] === null) continue; // Skip accessories and pets

      const itemIndex = assets[category]?.findIndex(
        (assetItem) => assetItem.img === currentItems[category]?.img
      );
      if (itemIndex === -1 || itemIndex === undefined) continue; // si no hay un index

      const thumb = document.querySelector(
        `.item-thumbnail[data-category="${category}"][data-itemindex="${itemIndex}"]`
      );
      if (thumb) {
        thumb.classList.add('selected');
      }
    }

    // --- AÑADIR EVENT LISTENERS A LOS BOTONES ---
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
      saveButton.addEventListener('click', saveGame);
    }

    const loadButton = document.getElementById('load-button');
    if (loadButton) {
      loadButton.addEventListener('click', loadGame);
    }
    const downloadButton = document.getElementById('download-button')
    if(downloadButton){
        downloadButton.addEventListener('click', downloadImage);
    }

    // --- FIN DE LOS EVENT LISTENERS ---
  }

  return (
    <div>
      <h1 className="game-title">Dress Up Arayette</h1>
      <div className="game-wrapper">
        <div className="button-container">
          <button id="save-button" className="game-button">
            Guardar
          </button>
          <button id="load-button" className="game-button">
            Cargar
          </button>
          <button id="download-button" className="game-button">
            Descargar
          </button>
        </div>
        <div className="game-container">
          <div id="makeup" className="character-layer"></div>
          <div id="body" className="character-layer"></div>
          <div id="tops" className="character-layer"></div>
          <div id="bottoms" className="character-layer"></div>
          <div id="shoes" className="character-layer"></div>
          <div id="bow" className="character-layer"></div>
          <div id="hats" className="character-layer"></div>
          <div id="bags" className="character-layer"></div>
          <div id="necklaces" className="character-layer"></div>
          <div id="pets" className="character-layer"></div>
        </div>

        <div className="item-grids-container">
          <div className="item-grid" id="makeup-grid">
            <h3>Makeup</h3>
          </div>
          <div className="item-grid" id="tops-grid">
            <h3>Partes de arriba</h3>
          </div>
          <div className="item-grid" id="bottoms-grid">
            <h3>Partes de abajo</h3>
          </div>
          <div className="item-grid" id="shoes-grid">
            <h3>Zapatillas</h3>
          </div>
          <div className="item-grid" id="bow-grid">
            <h3>Lazos</h3>
          </div>
          <div className="item-grid" id="hats-grid">
            <h3>Accesorios cabeza</h3>
          </div>
          <div className="item-grid" id="bags-grid">
            <h3>Bolsos</h3>
          </div>
          <div className="item-grid" id="necklaces-grid">
            <h3>Collares</h3>
          </div>
          <div className="item-grid" id="background-grid">
            <h3>Fondos</h3>
          </div>
          <div className="item-grid" id="pets-grid">
            <h3>Mascotas</h3>
          </div>
        </div>
      </div>
    </div>
  );
}