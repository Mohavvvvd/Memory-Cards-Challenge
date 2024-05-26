const img = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k'];
const imgTwice = img.concat(img);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startFlip() {
    let cards = document.querySelectorAll('.flip-card');
    let shuffledImg = shuffle(imgTwice);
    cards.forEach(function(card) {
        card.classList.remove('flipped');
    });

    cards.forEach(function(card, index) {
        card.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
        let randomImage = shuffledImg[index];
        card.querySelector(".flip-card-back img").src = randomImage + ".png";
        setTimeout(function() {
            card.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
        }, 3000);
    });

    flippedCards = [];
}

let flippedCards = [];
let compt = 0 ;
function flipCard(card) {
    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
        card.classList.add('flipped');
        flippedCards.push(card);
        card.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)"; 
        if (flippedCards.length === 2) {
            const img1 = flippedCards[0].querySelector('.flip-card-back img').src;
            const img2 = flippedCards[1].querySelector('.flip-card-back img').src;
            if (img1 === img2) {
                flippedCards = [];
                compt = compt + 1 ;
            } else {
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.classList.remove('flipped');
                        card.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
                    });
                    flippedCards = [];
                }, 1500);
            }
        }
    } else if (flippedCards.length === 2) {
        flippedCards.forEach(card => {
            card.classList.remove('flipped');
            card.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
        });
        flippedCards = [];
        card.classList.add('flipped');
        flippedCards.push(card);
    }
    if (compt == 8 ) {
        playMusic();
    }
}
function playMusic() {
    const music = document.getElementById('music');
    music.play();
}