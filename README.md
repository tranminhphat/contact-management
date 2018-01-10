# Requirements

### Overview
No integration with another system is provided, you are required to develop a simple web application from scratch to:
- Use the information from User table to log in to the webpage and manage the contact.
- Build a simple Contact Management web app which contains 4 main pages: login, list, add/detail, and error pages.

### Features
#### Login page
- Allow user can log in the system with username and password from the User table.
- When user login successfully, the system will allow user access the Contact list page.

#### List page
- Display all contacts in a grid.
- The first column is check box so that user can select multi contacts for deleting.
- The user can only delete his contacts (the contacts that he created before)
- User can filter (search) list of users by name (full name) and DOB ( from date <= DOB <= to date)

#### Detail page
- User can click on the contact name to view contact detail.
- Display all information of manipulated contact and support save this contact into database
- Only athorized user (the user that created this contact) could save the updated information

#### Add contact

- User can add new contact by clicking  the "Add" button in the Contact list page
- User can input "Direct Manager Id" (linked to another ContactId) of this contact in the textbox (bonus for showing dropdown list here).
- Should validate the input both front-end and back-end side
- Redirect to Contact list page after saving successfully

#### Import data from csv file
Import contact data from csv file.

#### Error page
Display detail of error (Stack Trace) happened in the application.

#### Localization
Support multi-languages (English, Vietnamese, etc).

**Notes:** 
- Use Node.js Express framework
- MongoDB: is used to store all information of contacts
- Authorization: The authorized user is the user that created the contact.

**User Information**

| Field Name | Display in UI | Data Type | Length | Validation |
|---|---|---|---|---|
| ID | (none) | int | | No |
| UserName | User name (textbox) | String | 100 | Required |
| Password | Password (textbox) | String | 100 | Required |

**Contacdt Information**

| Field Name | Display in UI | Data Type | Length | Validation |
|---|---|---|---|---|
| ID | (none) | int | | No |
| FirstName | First Name (textbox) | String | 10 | Required |
| MiddleName | Middle Name (textbox) | String | 10 | No |
| LastName | Last Name (textbox) | String | 10 | Required |
| DirectManagerId | Direct Manager (textbox) | int |  | No |
| DOB | Birthday (date time picker) | Date | | Required |
| Gender | Gender (radio button) | Boolean | | Required |
| StartDate | Start Date (date time picker) | Date | | Required and contact must be from 22 years old |

