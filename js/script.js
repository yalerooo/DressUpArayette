const assets = {
    head: [{ img: 'assets/body/cara.png', name: 'Cara' }],
    body: [{ img: 'assets/body/cuerpo.png', name: 'Cuerpo' }],
    tops: [
        { img: 'assets/tops/top1.png', name: 'Top 1' },
        { img: 'assets/tops/top2.png', name: 'Top 2' },
        { img: 'assets/tops/top3.png', name: 'Top 3' },
        { img: 'assets/tops/top4.png', name: 'Top 4' },
        { img: 'assets/tops/top5.png', name: 'Top 5' },
        { img: 'assets/tops/top6.png', name: 'Top 6' },
        { img: 'assets/tops/top7.png', name: 'Top 7' },
    ],
    bottoms: [
        { img: 'assets/bottoms/bottom1.png', name: 'Bottom 1' },
        { img: 'assets/bottoms/bottom2.png', name: 'Bottom 2' },
    ],
    shoes: [
        { img: 'assets/shoes/shoes1.png', name: 'Shoes 1' },
        { img: 'assets/shoes/shoes2.png', name: 'Shoes 2' },
        { img: 'assets/shoes/shoes3.png', name: 'Shoes 3' },
        { img: 'assets/shoes/shoes4.png', name: 'Shoes 4' },
    ],
    background: [
        { img: 'assets/backgrounds/bg1.png', name: 'Background 1' },
        { img: 'assets/backgrounds/bg2.jpg', name: 'Background 2' },
    ],
    bow: [
        {img: 'assets/bows/bow1.png', name: 'Bow 1'},
        {img: 'assets/bows/bow2.png', name: 'Bow 2'},
    ],
    hats: [
        { img: 'assets/hats/hat1.png', name: 'Hat 1' },
        { img: 'assets/hats/hat2.png', name: 'Hat 2' },
    ],
    bags: [
        { img: 'assets/bags/bag1.png', name: 'Bag 1' },
    ],
    necklaces: [
        { img: 'assets/necklaces/necklace1.png', name: 'Necklace 1' },
    ]
};

const currentItems = {
    tops: 0,
    bottoms: 0,
    shoes: 0,
    background: 0,
    bow: 0,
    hats: 0,
    bags: 0,
    necklaces: 0,
};

let bowVisible = false;
let hatsVisible = false;
let bagsVisible = false;
let necklacesVisible = false;

function initializeGame() {
    document.getElementById('head').style.backgroundImage = `url('${assets.head[0].img}')`;
    document.getElementById('body').style.backgroundImage = `url('${assets.body[0].img}')`;

    for (const category in currentItems) {
        updateItem(category);
    }
}

function changeItem(category) {
    currentItems[category] = (currentItems[category] + 1) % assets[category].length;
    updateItem(category);
}

function updateItem(category) {
    if (category === 'background') {
        document.querySelector('.game-container').style.backgroundImage = `url('${assets.background[currentItems.background].img}')`;
    } else {
        const element = document.getElementById(category);
         if (element) {
            element.style.backgroundImage = `url('${assets[category][currentItems[category]].img}')`;
        }

    }
}

function toggleBow() {
    bowVisible = !bowVisible;
    const bowElement = document.getElementById('bow');

    if (bowVisible) {
      currentItems['bow'] = (currentItems['bow'] + 1) % assets['bow'].length;
      bowElement.style.backgroundImage = `url('${assets.bow[currentItems.bow].img}')`
      bowElement.style.display = 'block';
    } else {
        bowElement.style.display = 'none';
    }
}

// Funciones para gorros, bolsos y collares
function toggleHats() {
    hatsVisible = !hatsVisible;
    const hatsElement = document.getElementById('hats');
    if (hatsVisible) {
        currentItems.hats = (currentItems.hats + 1) % assets.hats.length;
        hatsElement.style.backgroundImage = `url('${assets.hats[currentItems.hats].img}')`;
        hatsElement.style.display = 'block';
    } else {
        hatsElement.style.display = 'none';
    }
}

function toggleBags() {
    bagsVisible = !bagsVisible;
    const bagsElement = document.getElementById('bags');
    if (bagsVisible) {
        currentItems.bags = (currentItems.bags + 1) % assets.bags.length;
        bagsElement.style.backgroundImage = `url('${assets.bags[currentItems.bags].img}')`;
        bagsElement.style.display = 'block';
    } else {
        bagsElement.style.display = 'none';
    }
}

function toggleNecklaces() {
    necklacesVisible = !necklacesVisible;
    const necklacesElement = document.getElementById('necklaces');
    if (necklacesVisible) {
        currentItems.necklaces = (currentItems.necklaces + 1) % assets.necklaces.length;
        necklacesElement.style.backgroundImage = `url('${assets.necklaces[currentItems.necklaces].img}')`;
        necklacesElement.style.display = 'block';
    } else {
        necklacesElement.style.display = 'none';
    }
}

window.onload = initializeGame;