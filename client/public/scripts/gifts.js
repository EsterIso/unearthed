const renderGifts = async () => {
    const response = await fetch('/gifts');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    if (data) {
        data.map(gift => {
            const giftCard = document.createElement('div');
            giftCard.className = 'card';

            const topContainer = document.createElement('div');
            topContainer.className = 'top-container';

            const bottomContainer = document.createElement('div');
            bottomContainer.className = 'bottom-container';

            topContainer.style.backgroundImage = `url(${gift.image})`;

            const giftName = document.createElement('h3');
            giftName.textContent = gift.name;
            bottomContainer.appendChild(giftName);

            const giftPrice = document.createElement('p');
            giftPrice.textContent = gift.price;
            bottomContainer.appendChild(giftPrice);

            const giftAudience = document.createElement('p');
            giftAudience.textContent = 'Great For:' + gift.audience;
            bottomContainer.appendChild(giftAudience)

            const link = document.createElement('a');
            link.textContent = 'Read More';
            link.href = `/gifts/${gift.id}`;
            link.role = 'button';
            bottomContainer.append(link);

            giftCard.appendChild(topContainer);
            giftCard.appendChild(bottomContainer);
            
            mainContent.appendChild(giftCard);
        })
    }
    else {
        const message = document.createElement('h2');
        message.textContent = 'No Gifts Available 😞';
        mainContent.appendChild(message);
    }
}

renderGifts();