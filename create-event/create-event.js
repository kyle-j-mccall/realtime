import { createEvent, checkAuth, uploadEventImage } from '../fetch-utils.js';

const user = checkAuth();

const form = document.getElementById('input-form');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('img-preview');

console.log(user.id);
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const eventName = data.get('event-name');
    const imageFile = data.get('img');
    const location = data.get('location');
    

    console.log(imageFile);
    const imageName = `${user.id}/${imageFile.name}`;
    console.log(imageName);

    await uploadEventImage(imageName, imageFile);

    // const newEvent = await createEvent({name: eventName, img: img, location: location });

    

    form.reset();


});


imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    imagePreview.src = URL.createObjectURL(file);
})