const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

//Get all contacts
router.get('/', contactsController.getAll);

//Get one contact by id
router.get('/:id', contactsController.getSingle);

//POST - Create new contact
router.post('/', contactsController.createContact);

//PUT or Update contact by Id
router.put('/:id', contactsController.updateContact);

//DELETE one contact by Id
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
