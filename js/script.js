const assets = {
    makeup: [
        { img: 'assets/body/cara.png', thumb: 'assets/thumbnails/cara_thumb.png', name: 'Cara 1' },
        { img: 'assets/body/cara2.png', thumb: 'assets/thumbnails/cara2_thumb.png', name: 'Cara 2' },
    ],
    body: [{ img: 'assets/body/cuerpo.png', thumb: 'assets/thumbnails/cuerpo_thumb.png', name: 'Cuerpo' }],
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
    ],
    bow: [
        { img: 'assets/bows/bow1.png', thumb: 'assets/thumbnails/bow1_thumb.png', name: 'Bow 1' },
        { img: 'assets/bows/bow2.png', thumb: 'assets/thumbnails/bow2_thumb.png', name: 'Bow 2' },
    ],
    hats: [
        { img: 'assets/hats/hat1.png', thumb: 'assets/thumbnails/hat1_thumb.png', name: 'Hat 1' },
        { img: 'assets/hats/hat2.png', thumb: 'assets/thumbnails/hat2_thumb.png', name: 'Hat 2' },
    ],
    bags: [
        { img: 'assets/bags/bag1.png', thumb: 'assets/thumbnails/bag1_thumb.png', name: 'Bag 1' },
    ],
    necklaces: [
        { img: 'assets/necklaces/necklace1.png', thumb: 'assets/thumbnails/necklace1_thumb.png', name: 'Necklace 1' },
    ]
};

// Set default items *correctly*
const currentItems = {
    makeup: assets.makeup[0],     // cara1
    body: assets.body[0],        // cuerpo
    tops: assets.tops[0],       // top1
    bottoms: assets.bottoms[0],   // bottom1
    shoes: assets.shoes[0],     // shoes1
    background: assets.background[0],
    bow: null,
    hats: null,
    bags: null,
    necklaces: null,
};

function createItemGrids() {
    for (const category in assets) {
        const gridElement = document.getElementById(`${category}-grid`);
        if (!gridElement) continue;

        assets[category].forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('thumbnail-wrapper');

            const thumbnail = document.createElement('img');
            thumbnail.src = item.thumb;
            thumbnail.alt = item.name;
            thumbnail.classList.add('item-thumbnail');
            thumbnail.dataset.category = category;
            thumbnail.dataset.itemIndex = assets[category].indexOf(item);
            thumbnail.addEventListener('click', handleItemClick);

            wrapper.appendChild(thumbnail);
            gridElement.appendChild(wrapper);
        });
    }
}

function handleItemClick(event) {
    const category = event.target.dataset.category;
    const itemIndex = parseInt(event.target.dataset.itemIndex);
    const selectedItem = assets[category][itemIndex];

    // Categories that can be toggled (accessories and background)
    const toggleableCategories = ['background', 'bow', 'hats', 'bags', 'necklaces'];

    // Deselect the *previously* selected item in this category
    const previouslySelected = document.querySelector(`.item-thumbnail.selected[data-category="${category}"]`);
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }


    if (toggleableCategories.includes(category)) {
        // Toggle logic for accessories and background
        if (currentItems[category] === selectedItem) {
            // Deselect (remove) the item
            currentItems[category] = null;
            event.target.classList.remove('selected');
             const element = document.getElementById(category);
              if(element){
                 element.style.backgroundImage = '';
                 element.style.display = 'none';
              } else{
                  document.querySelector('.game-container').style.backgroundImage = '';
              }
        } else {
            // Select the new item
            currentItems[category] = selectedItem;
            event.target.classList.add('selected');
              const element = document.getElementById(category);
              if(element){
                 element.style.backgroundImage = `url('${selectedItem.img}')`;
                 element.style.display = 'block';
              } else {
                    document.querySelector('.game-container').style.backgroundImage = `url('${selectedItem.img}')`;
              }
        }
    } else {
        //  Always set the new item for non-toggleable categories
        currentItems[category] = selectedItem;
        event.target.classList.add('selected');
        const element = document.getElementById(category);
        element.style.backgroundImage = `url('${selectedItem.img}')`;
    }
}

function initializeGame() {
    // Set initial items (using the selected item objects, which are already correct)
    document.getElementById('makeup').style.backgroundImage = `url('${currentItems.makeup.img}')`;
    document.getElementById('body').style.backgroundImage = `url('${currentItems.body.img}')`;
    document.getElementById('tops').style.backgroundImage = `url('${currentItems.tops.img}')`;
    document.getElementById('bottoms').style.backgroundImage = `url('${currentItems.bottoms.img}')`;
    document.getElementById('shoes').style.backgroundImage = `url('${currentItems.shoes.img}')`;
    document.querySelector('.game-container').style.backgroundImage = `url('${currentItems.background.img}')`;

    createItemGrids();

    // Add 'selected' class to initial items.
    for (const category in currentItems) {
        if (currentItems[category] === null) continue; // Skip accessories
        const itemIndex = assets[category].indexOf(currentItems[category]);
        if (itemIndex === -1) continue;
        const thumb = document.querySelector(`.item-thumbnail[data-category="${category}"][data-itemindex="${itemIndex}"]`);
        if (thumb) {
            thumb.classList.add('selected');
        }
    }
}

window.onload = initializeGame;