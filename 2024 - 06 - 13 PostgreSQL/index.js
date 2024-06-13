//? Differences between MongoDB and PostgreSQL

/*
A - PostgreSQL
B - MongoDB

1. Database model:
A - Relational Database Management System (RDBMS) that uses SQL (structured query language) to manage and manipulate data in tables with well-defined schemas
B - NoSQL(Not only SQL) document-oriented database that stores data in JSON-like documents with flexible schemas

2. Data storage:
A - tables with fixed schemas
B - JSON-like documents with dynamic schemas

3. Schema:
A - requires predefined schema, which can be modifier later, but with some restrictions
B - Schema-less, we can add or remove fields from documents as needed w/o modifying the underlying db structure

4. Data normalization:
A - follows normalized data model, which reduce data redundancy and improves data integrity
B - doesn't follow normalized data model => can lead to data redundancy, but allows for faster data retrieval and insertion

5. Querying:
A - Uses SQL
B - MongoDB Query Language (MQL)

6. ACID Compliance (ACID - Atomicity, Consistency, Isolation, Durability):
A - compliant, it ensures reliable transactions and data consistency
B - partially ACID compliant, with some limitations on transactional consistency and isolation

7. Use Cases:
A - Suitable for applications with complex transactions, strict data consistency and special querying such as financial systems, ERP (Enterprise Resource planning) systems, and CRM (Customer Relationship Management) systems
B - Applications with large amounts of unstructured or semi-structured data, high traffic, and flexible schema requirements, e.g. (social media platforms, real-time analytics)  

Table of compairing relational and non-relational database management systems:

? https://www.mongodb.com/resources/compare/relational-vs-non-relational-databases#:~:text=You've%20also%20learned%20the,most%20suitable%20for%20various%20projects.&text=MongoDB%20is%20a%20non%2Drelational,performance%2C%20reliability%2C%20and%20flexibility.

*/

/* Exercise starts here

Task 1.1
? CREATE DATABASE tutoring_dci_restaurant;

Task 1.2
? \l

Task 1.3
? \c tutoring_dci_restaurant;

Task 2.1
? CREATE TABLE customers(
? id serial unique primary key,
? first_name varchar(30) not null default 'Unknown first name',
? last_name varchar(40) not null default 'Unknown last name',
? city varchar(25) not null default 'Unknown city',
? phone varchar(12) not null default 'Unknown'
? );

https://www.postgresql.org/docs/current/datatype.html

Task 2.2
? \d customers

Task 3.1
? INSERT INTO customers(first_name, last_name, city, phone)
? VALUES
? ('Arnold', 'Rimmer', 'Leipzig', '0341 1234567');

To return all columns of "customers" table
? SELECT * FROM customers;

! SELECT first_name || ' ' || last_name, city, phone FROM customers; - to concatenate columns (name of concatenated column - ?column?)
! SELECT first_name || ' ' || last_name full_name, city, phone FROM customers; - to concatenate columns (name of concatenated column - full_name)

! After concatenation - database structure is not changing

Task 3.2

? INSERT INTO customers(first_name, last_name, city, phone)
? VALUES
? ('Kris', 'Kochanski', 'Berlin', '030 9876543'),
? ('David', 'Lister', 'Leipzig', '0341 5555555'),
? ('Ace', 'Rimmer', 'Chemnitz', '0371 7171717');

To return all columns of "customers" table
? SELECT * FROM customers;

Task 3.3

? INSERT INTO customers(first_name, city, phone)
? VALUES
? ('Holly', 'Dresden', '0351 2244668');

? INSERT INTO customers(last_name, phone)
? VALUES
? ('Cat', '0341 7755331');

Task 3.4
? SELECT * FROM customers;

Task 4.1
? SELECT * FROM customers WHERE last_name != 'Rimmer';
OR
? SELECT * FROM customers WHERE last_name <> 'Rimmer';
OR 
? SELECT * FROM customers WHERE NOT last_name='Rimmer';

https://www.postgresql.org/docs/6.3/c09.htm

Task 4.2
? SELECT first_name, last_name, phone FROM customers WHERE city='Leipzig';

Task 4.3
? SELECT * FROM customers WHERE city='Dresden' OR city='Berlin';
OR
? SELECT * FROM customers WHERE city IN ('Dresden', 'Berlin');
 The IN operator allows you to check whether a value matches any value in a list of values.
- The query that uses the IN operator is shorter and more readable than the query that uses equal (=) and OR operators.
- Additionally, PostgreSQL executes the query with the IN operator much faster than the same query that uses a list of OR operators.

Task 5.1
? SELECT * FROM customers WHERE city='Leipzig' OR position('0341' in phone)>0;
OR
? SELECT * FROM customers WHERE city='Leipzig' OR position('0341' in phone)=1;

The position() function returns the position of the first occurrence of the specified string ('0341') in the phone number.  If '0341' is not found, position() returns 0. 
Therefore, position('0341' in phone) > 0 is true if '0341' is found in the phone number.

OR
? SELECT * FROM customers WHERE city='Leipzig' OR phone LIKE '%0341%';
- LIKE = includes
- NOT LIKE = not includes
- ILIKE operator, which is similar to the LIKE operator, but allows for case-insensitive matching.
!we can't use "=" if using "%" 
- Percent sign ( %) matches any sequence of zero or more characters.
- Underscore sign (_)  matches any single character.

Task 6.1
? UPDATE customers SET first_name='The' WHERE last_name='Cat';

Task 6.2
? UPDATE customers SET last_name='Hayridge' WHERE first_name='Holly';

Task 7
? DELETE FROM customers WHERE last_name='Rimmer';

*/