# Requirements

### Overview
We need to build a "Contact Management" web application which contains the following  pages: user login, user sign up, contact list, add/update contact, and error pages.

### Features
#### User - Sign up
- Allow user to register a new account with his email and password.
  
#### User - Login
- Allow user can log in the system with registered account.
- When logged in, the user can access the Contact pages.

#### Contact - List
- Display all contacts.
- The first column is the check boxes that allow user to select multiple contacts for deleting.
- The user can only delete his created contacts
- User can filter (search) the contacts by name (full name) and DOB ( from date <= DOB <= to date)

#### Contact - Update
- User can click on any contact name in the List contact page to view contact detail.
- User can only update his created contacts

#### Contact - Add

- User can add new contact by clicking the "Add" button in the Contact list page
- User can select "Direct Manager" (linked to another Contact Id) of this contact.
- Should validate the input data both at front-end and back-end.
- Redirect to Contact list page after saving successfully

#### Import/Export data from csv file
- Allow user to export the contact list to csv file.
- Allow user to import the contact list from csv file.

#### Error page
Display detail of error (Stack Trace) happened in the application.

#### Localization (nice to have)
Support multi-languages (English, Vietnamese, etc).

**Technology stacks:** 
- Node.js, Express framework
- MongoDB
- Unit test: Mocha, Chai, Sinon
  
**User Model**

| Field Name | Display in UI | Data Type | Length | Validation |
|---|---|---|---|---|
| ID | (none) | int | | No |
| email | Email (textbox) | String | 100 | Required |
| password | Password (textbox) | String | 100 | Required |

**Contact Model**

| Field Name | Display in UI | Data Type | Length | Validation |
|---|---|---|---|---|
| ID | (none) | int | | No |
| UserId | (none) | int | | Link to the ID in User Model |
| FirstName | First Name (textbox) | String | 10 | Required |
| MiddleName | Middle Name (textbox) | String | 10 | No |
| LastName | Last Name (textbox) | String | 10 | Required |
| DirectManagerId | Direct Manager (dropdown list) | int |  | Link to the ID in Contact Model |
| DOB | Birthday (date time picker) | Date | | Required |
| Gender | Gender (radio button) | Boolean | | Required |
| StartDate | Start Date (date time picker) | Date | | Required and contact must be from 22 years old |

Prerequisites
-------------

- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js 8.0+](http://nodejs.org)

How to run
---------------

```bash

# Install NPM dependencies
npm install

# Update MONGODB_URI (in .env.example file) accordingly
# MONGODB_URI=mongodb://localhost:27017/test

# Then simply start your app
npm run start

# Run test
npm run test

# Run lint
npm run lint

```