
import { checkAuth, signOutUser, getEvents } from './fetch-utils.js';
import { renderEvent } from './render-utils.js';


/*  "boiler plate" auth code */
// checking if we have a user! (will redirect to auth if not):
checkAuth();
// const user = checkAuth();

// sign out link:
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

const bulletinBoardEl = document.getElementById('bulletin-board');


// let eventsArr = [];

// display functions:
async function displayEvents() {
    const events = await getEvents();
    
    for (let event of events) {
        const renderedEvent = renderEvent(event);
        bulletinBoardEl.append(renderedEvent);
    }
}


displayEvents();