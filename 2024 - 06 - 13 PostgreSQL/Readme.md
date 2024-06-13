## Task 1
### Task 1.1
- Create a database called "dci_restaurant".

### Task 1.2
- Check the list of databases to make sure it is there.

### Task 1.3
- Connect to database.

## Task 2
### Task 2.1
- Create a new table in the dci_restaurant database called "customers"
- Make sure the "customers" table has the following columns:
- id - should increase by one automatically with each entry. Also unique and the primary key.
- first_name (string) - maximum length 30 characters - cannot be null - default value = "Unknown first name"
- last_name (string) - maximum length 40 characters - cannot be null - default value = "Unknown last name"
- city (string) - 25 characters - cannot be null - default value = "Unknown city"
- phone (string) - 12 characters - cannot be null - default value = "Unknown"

### Task 2.2
- Prove that your last command worked by using another command to *describe* the table - does it exist, and do all its columns meet the specifications above?

## Task 3

### Task 3.1
- Insert one new customer:
- Arnold Rimmer comes from Leipzig and his phone number is 0341 1234567
- Did it work? Show all the data in the table - is Arnold there?

### Task 3.2
- Now add three more customers using a single command:
- Kris Kochanski comes from Berlin and her phone number is 030 9876543
- David Lister comes from Leipzig and his phone number is 0341 5555555
- Ace Rimmer comes from Chemnitz and his phone number is 0371 7171717

### Task 3.3
- Next, using two separate queries, add two customers with incomplete data:
- Holly does not have a last name, she lives in Dresden and her phone number is 0351 2244668
- Cat does not have a first name, does not have a city, and his phone number is 0341 7755331

### Task 3.4
- Finally, check your table again and make sure all 6 customers are there. Also make sure to note how SQL handled the incomplete data for the last two customers.

## Task 4
### Task 4.1
- Use just one query to show all the customers whose last name isn't Rimmer

### Task 4.2
- Show the first name, last name and phone numbers of all customers who live in Leipzig (2 customers).

### Task 4.3
- Show all data for all customers who live in either Dresden or Berlin (2 customers)

## Task 5
### Task 5.1
- Try to show all the data for users whose city is Leipzig or whose phone number contains '0341' (3 customers)

## Task 6
### Task 6.1
- Update the first_name of the user with the last name "Cat". His new first name should be "The".

### Task 6.2
- Update the last_name of the user with the first name "Holly". Her new last name should be "Hayridge".

## Task 7
- Delete a customer of your choice!