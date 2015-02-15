Be prepared to give and receive specific, actionable, and kind feedback!


Portfolio 1: RESTful Routing

Your task is to implement the seven RESTful routes. Modify the skeleton code to achieve the following functionality:

√A user can Create a new note.
√A user can Read all the notes created.
√A user can Update a note.
√A user can Delete an existing note.
√A user can see a page where she can create a new note.
√A user can see a page where she can edit a note.
√A user see a page that shows a single note.
√Your note table should have a title and content field.


========================
Portfolio 2: People Skills

√A User has many skills and a Skill can be assigned to many users.
√A User has a proficiency rating for each of their skills.
√Multiple skills can not be saved with the same name.

=======================
Portfolio 3: Authentication & Authorization

Release 0: Implement Sign In

Modify the skeleton code to achieve the following functionality:

√A user can sign up for a new account with an email and password.
An existing user can sign in
If a user is not signed in, they only see a welcome message on the home page.
If a user is signed in, they can see all users on the home page.
A user can sign out using the provided delete route which is from a hidden field in the form.
A helper method current_user returns the current signed in user and is used to display appropriate sign in / sign out portions of the view. (This logic is already implemented in the view - you just need to finish the helper method).

Release 1 Encrypt
√bcrypt(controller/index, /views/login, environment, gemfile)

=======================
Portfolio 4: HTML CSS
Release 0: Choose your poison

Find a web page that represents a topic / item you are interested in (like bicycles). The page should be relatively simple but have some images and some text. If you don't want to choose your own site, you may use the sample.png image provided.

Take a screenshot of the website. You will use this screenshot for your recreation (you should NOT look at the html or styles from the original site - base all your work off the screenshot.) Add this screenshot to your source forder

Create an image directory and download a subset of the images from the page to this folder. (Your page does not need to have exact images - if there are a lot of similar images you can use one to represent them all).

Release 1 : The HTML (views)

Create the HTML using HTML 5.

Create the <head> tag with links to a normalize.css and your style sheet styles.css.
Create the <body> with a <header>, <nav> and content.
You can duplicate the text of your site exactly, or if there is a lot of text you can use lorem ipsum text.
Add all the images.
Make sure your page is validated.
Your HTML should contain as little formatting as possible.

Release 2 : Add the CSS (public/css)

Your CSS should recreate the format of your original page. At a minimum your page should contain the following CSS elements and styles:

Basic selectors like id, class and element
Two advanced selectors like sibling, psuedo, child, etc.
Box model styles like margin, border, and padding
Position styles like fixed, absolute, relative and static
Background styles for color or image
Font styles
CSS3 styles like rounded border if required in your image.
Use a color picker to get the correct colors.
Save your HTML and CSS files to the source folder and submit a pull request to turn in this challenge.

===================
Portfolio 5: Validations
√Release 0 : Validations on Model (models)

Use ActiveRecord and Sinatra to allow anyone to create an event, so long as it passes validation rules.

Add validations to the Event model and show appropriate messages to the user when the validations fail.

Prevent Events from being saved when: a. The events date is empty, in the past, or is not valid. b. The events title is already taken or empty. c. The event organizers name is empty. d. The event organizers email address is invalid.