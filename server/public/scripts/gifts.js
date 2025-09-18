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

const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());

    const res = await fetch('/gifts');

    if (!res.ok) {
        throw new error(`Request failed: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const giftContent = document.getElementById('gift-content');

    let gift;

    if(data) {
        gift = data.find(gift => gift.id === requestedID);
    }

    if(gift) {
        document.getElementById('image').src = gift.image;
        document.getElementById('name').textContent = gift.name;
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy;
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint;
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience;
        document.getElementById('description').textContent = gift.description;
        document.title = `UnEarthed - ${gift.name}`;
    } else {
        const h2 = document.createElement('h2');
        h2.textContent = 'No Gifts Available 😞';
        giftContent.appendChild(h2);
    }

}

const requestedUrl = window.location.href.split('/').pop();
if (requestedUrl) {
  window.location.href = '../404.html'
} else {
  renderGifts();
}

renderGift();