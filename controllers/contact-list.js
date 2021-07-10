const Contact = require('../models/Contact');
/**
 * GET /contact-list
 * Contact list page.
 */
exports.getContactList = async (req, res) => {
  const unknownUser = !req.user;
  const contactList = await Contact.find({});

  res.render('contact-list', {
    title: 'Contact List',
    contactList,
    unknownUser,
  });
};

exports.addContact = async (req, res) => {
  req
    .assert('firstName', 'First name can not be more than 10 characters')
    .len(1, 10);
  req
    .assert('middleName', 'Middle name can not be more than 10 characters')
    .len(1, 10);
  req
    .assert('lastName', 'Last name can not be more than 10 characters')
    .len(1, 10);
  req.assert('dob', 'Date Of Birth is required').notEmpty();
  req.assert('gender', 'Gender is required').notEmpty();
  req.assert('startDate', 'Start date is required').notEmpty();
  req.assert('directManagerId', 'Direct manager is required').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    console.log(req.body);
    req.flash('errors', errors);
    return res.redirect('/contact-list');
  }

  try {
    const formValues = { ...req.body };
    console.log(formValues);
    await Contact.create(formValues);
    req.flash('success', { msg: 'Create contact successfully' });
    res.redirect('/contact-list');
  } catch (err) {
    console.error(err);
    req.flash('error', { msg: 'Internal server error' });
    res.redirect('/contact-list');
  }
};
