export function renderEvent(event) {
    const eventDiv = document.createElement('div');
    const nameEl = document.createElement('h3');
    const img = document.createElement('img');
    const locationEl = document.createElement('p');
    const commentInput = document.createElement('input');
    const addButton = document.createElement('button');


    nameEl.textContent = event.name;
    img.src = event.image;
    locationEl.textContent = event.location;
    addButton.textContent = 'Add comment';

    eventDiv.classList.add('event');

    eventDiv.append(nameEl, img, locationEl, commentInput, addButton);

    return eventDiv;

}