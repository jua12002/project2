/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use and find all.
use('project2');
db.contacts.find();


// Insert a few contacts.
use('project2');
db.contacts.insertMany([
  { 'firstName': 'Chloe', 'lastName': "Brown", 'email': "ChloeB@test.com", "phone": "204-457-7878", 'address': "358 Pembina Rd, Wpg, Canada S5Y 6U7" },
  { 'firstName': 'Chay', 'lastName': "Che", 'email': "cc555B@test.com", "phone": "204-555-888", 'address': "145 Pembina Rd, Wpg, Canada S5Y 6U7" }
]);

