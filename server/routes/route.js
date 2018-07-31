const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

// Retrieving contact
router.get('/contacts', (req, res, next)=>{
    Contact.find((err, contacts)=>{
        res.json(contacts);
    })
});

// Add contact
router.post('/contact', (req, res, next)=>{
    // logic to add contact
    console.log(req.body);
    let newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if (err) {
            res.json({msg: 'Failed to add contact'});
        } else {
            res.json({msg: 'Contact added successfully'});
        }
    });
});

// delete contact
router.delete('/contact/:id', (req, res, next)=>{
    // logic to delete contact
    console.log('param is: '+ req.params.id);
    Contact.remove({_id: req.params.id}, (err, result)=>{
        if (err) {
            res.json(error);
        } else {
            res.json(result);
        }
    })
});

module.exports = router;
