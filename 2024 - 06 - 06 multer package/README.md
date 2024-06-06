# Task

## Add your favorite albums!
[backend] 
 - First, have a look at `Album.js` to get an idea of model `Album`

- work in `server.js`
    - configure `multer`
    - add three routes to 
        - add an album (POST): create a new album with a jacket image in it
        - delete an album (DELETE): delete an album by ID
        - update an album jacket (PATCH): update an album image(jacket) in an existing album

    - test your routes via thunder client

[frontend] 
 - work in `App.jsx` and sub-component 
    - render all albums on page load
    - user should be able to add a new album with a jacket image chosen from a file
    - browser rerenders when database is updated
    
    [challenge]
    - user can update the album jacket 
    - user can delete an album