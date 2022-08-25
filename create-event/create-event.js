import { createEvent } from '../fetch-utils.js';


const form = document.getElementById('input-form');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('img-preview');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const eventName = data.get('event-name');
    const imageFile = data.get('img');
    const location = data.get('location');

    const newEvent = await createEvent({name: eventName, img: img, location: location });

    console.log(newEvent);

    form.reset();


});


imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    imagePreview.src = URL.createObjectURL(file);
})