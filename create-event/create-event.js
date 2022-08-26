import { createEvent, checkAuth, uploadEventImage } from '../fetch-utils.js';

const user = checkAuth();

const form = document.getElementById('input-form');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('img-preview');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const eventName = data.get('event-name');
    const imageFile = data.get('img');
    const location = data.get('location');
    
    let url = null;

    if (imageFile.size) {
        const imageName = `${user.id}/${imageFile.name}`;
        url = await uploadEventImage(imageName, imageFile);        
    }
    

    const response = await createEvent({
        id: user.id,
        name: eventName, 
        image: url, 
        location: location });

    const error = response.error;

    if (error) {
        console.log(error.message);
    }

        

    
    

    

    

    

    form.reset();


});


imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    imagePreview.src = URL.createObjectURL(file);
});