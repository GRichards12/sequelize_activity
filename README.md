Sequelize_activity

----Description
This activity showcases the utilisation of the sequelize ORM with a MySQL database. It uses each of the CRUD operations.

----Usage
To utilise each function, run app.js in node.
To perform each action,type the following in the terminal:
--add followed by --title(string, required), --actor(string, optional) --rating(integer, optional) //adds an entry to the DB
--list //lists the entries currently in the DB
--update followed by --newTitle(string, required) --newActor(string, optional) --newRating(integer, optional) --oldTitle(string, required) // This will update the new properties in the entry with the old title
--delete followed by the title to delete // this deletes the entry with the title specified