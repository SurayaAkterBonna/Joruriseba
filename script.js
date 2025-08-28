const coins = document.getElementById('coin-count');
const favCount = document.getElementById('fav-count');
const copyCount = document.getElementById('copy-count');
const cardSection = document.getElementById('card-section');
const callHistoryList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

let currentCoins = 100;
let currentFavs = 0;
let currentCopies = 0;

const services = [
    {
        name: "National Emergency",
        nameEnglish: "National Emergency Number",
        number: "999",
        icon: "style/assets/emergency.png",
        category: "All"
    },
    {
        name: "Fire Service",
        nameEnglish: "Fire Service Number",
        number: "999",
        icon: "style/assets/fire-service.png",
        category: "Fire"
    },
    {
        name: "Ambulance Service",
        nameEnglish: "Ambulance",
        number: "1994",
        icon: "style/assets/ambulance.png",
        category: "Health"
    },
    {
        name: "Women & Child Helpline",
        nameEnglish: "Women & Child Helpline",
        number: "109",
        icon: "style/assets/brac.png",
        category: "Social"
    },
    {
        name: "Anti-Corruption Helpline",
        nameEnglish: "Anti-Corruption",
        number: "106",
        icon: "style/assets/emergency.png",
        category: "Law"
    },
    {
        name: "Bangladesh Railway",
        nameEnglish: "Helpline",
        number: "16318",
        icon: "style/assets/Bangladesh-Railway.png",
        category: "Transport"
    }
];

const createCard = (service) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-top-row">
            <img src="${service.icon}" alt="${service.name}" class="icon">
            <i class="fav-icon fas fa-heart" data-favorited="false"></i>
        </div>
        <div class="details">
            <h3>${service.name}</h3>
            <p>${service.nameEnglish}</p>
        </div>
        <div class="hotline-number">${service.number}</div>
        <div class="category-and-actions">
            <span class="category-badge">${service.category}</span>
            <div class="actions">
                <button class="btn copy-btn" data-number="${service.number}">
                    <i class="fas fa-copy"></i> Copy
                </button>
                <button class="btn call-btn" data-name="${service.name}" data-number="${service.number}">
                    <i class="fas fa-phone"></i> Call
                </button>
            </div>
        </div>
    `;
    
    const callBtn = card.querySelector('.call-btn');
    const copyBtn = card.querySelector('.copy-btn');
    const favIcon = card.querySelector('.fav-icon');

    callBtn.addEventListener('click', () => handleCall(service.name, service.number));
    copyBtn.addEventListener('click', () => handleCopy(service.number));
    favIcon.addEventListener('click', () => handleFavorite(favIcon));
    
    return card;
};

const renderCards = () => {
    services.forEach(service => {
        cardSection.appendChild(createCard(service));
    });
};

const handleFavorite = (favIcon) => {
    const isFavorited = favIcon.dataset.favorited === 'true';
    if (isFavorited) {
        favIcon.dataset.favorited = 'false';
        favIcon.classList.remove('favorited');
        currentFavs--;
    } else {
        favIcon.dataset.favorited = 'true';
        favIcon.classList.add('favorited');
        currentFavs++;
    }
    favCount.textContent = currentFavs;
};

const handleCall = (serviceName, serviceNumber) => {
    if (currentCoins < 20) {
        alert("Not enough coins to make a call!");
        return;
    }

    currentCoins -= 20;
    coins.textContent = currentCoins;
    
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US');
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `
        <div>
            <strong>${serviceName}</strong><br>
            <span>${serviceNumber}</span>
        </div>
        <span class="history-time">${timeString}</span>
    `;
    callHistoryList.prepend(newHistoryItem);
};

const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert(`Hotline number ${textToCopy} copied to clipboard!`);
        currentCopies++;
        copyCount.textContent = currentCopies;
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};

clearHistoryBtn.addEventListener('click', () => {
    callHistoryList.innerHTML = '';
    alert("Call history cleared!");
});

document.addEventListener('DOMContentLoaded', () => {
    renderCards();
});
