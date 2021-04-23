# Google Books Search

### Overview

I create a new React-based Google Books Search app. so a user can search for books & save favourite books to their list to look at later & keep a record of the books they would like to read.


### application used


* I used MongoDB for the database so that users can save books to review or purchase later.

  * imported npm packages & react for this application

  * it uses both front end & backend application so coding & files had to be set up for both.

* routes, controllers, models for schema to set up database & server for the backend application

  * client using react, src which has the commponents, api pages etc for the front end of the application.

* We would like you to have well over 200 commits by graduation, so commit early and often!

* This application has been deployed using Heroku




### Instructions

* In application you have a search section & a saved section

  * In the search section a user can search for books via the Google Books API and find them using the search button. User then has an option to "View" a book, or "Save" a book, saving it to the Mongo database.

# on search the following will appear on the page.

* Title of the book

* The books's author(s) 

* The book's description 

* The Book's thumbnail image 

* The Book's information link (currently still needs to been entered)


 # Saved books
 
   will then be sent to the save section which can be reached by clicking on the save button on the navbar, all books saved to the Mongo database. User can "View" the book, or "Delete" a book, removing it from the Mongo database.
   


## Express routes for app:

* `/api/books` (get) - to return all saved books as JSON.

* `/api/books` (post) -  used to save a new book to the database.

* `/api/books/:id` (delete) - used to delete a book from the database by Mongo `_id`.


### Hosting on Heroku

https://traceys-google-books.herokuapp.com/

## also view link to portfolio

https://traceysaada.github.io/React-Portfolio/

