# Database explained

Every time we restart our server the data is gone. The fix is of course a database, a database
is used to store data.

## SQL (Structured Query Language)
- MySQL
- PostgreSQL

An SQL database is just like an excel document where the data is sorted in a group of tables or sheets and can't be flexible.

#### `Example`
Firstname | Lastname | Costumer Nr.
---------|----------|---------
 Homer | Simpson | A1
 Deacon | Saint John | A2
 Bob | Ross | A3
 Nathan | Drake | A3

## NoSQL (Non Structured Query Language)
- MongoDB
- Redis

A NoSQL database is data stored in a different format ex. JSON or XML.

#### `MongoDB`
Check video from mongoDB to better understand:

https://www.youtube.com/watch?v=EE8ZTQxa0AM

MongoDB is a document database, that saves data in JSON-like documents.

A mongo database structure would look like this.

- Database
    - Collections
        - Documents
            - JSON file   

