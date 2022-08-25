Event Page

## HTML Elements

# Hardcoded
(create event post page)
- form for user to create event post
- input for type of event
- input for photo of event
- input location of event

# Dynamically generated
(Event BB)
- Div for event post
- element containing each input 
- comment section for users to leave comments about event

## Supabase table
- table name: events
- columns: name, type, image, location, comments

## User Events
- User fills out event form
- user can upload picture for event 
- form data is saved as row in supabase
- If user navigates to event BB User will see the event they posted along with events from other users.
- each event will have a comment section
- user will be able to add a comment to any event in bulletin board and see comment updated in real time
- user that posted event can delete their own event

## Plan 

# fetch utils
- createEvent for when user creates new event
- getEvents for events to be displayed on bulletin board
- supabase image bucket create bucket and link to the image column
- handleImage function
- createComment Function 
- handleNewComment function calls getNewComment(realtime)

# render utils
- renderEvent
- renderComment??

## flow
- hardcode form on make event html file
- deal with image upload
- call createEvent on submit of form
- create renderEvent function
- call getEvents in displayEvents function
- create displayEvents function in details.js and call on load
- create event listener for comment input 
- call handle new comment and createComment on click of add comment
- optional - enable delete event for user who created event