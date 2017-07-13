# Package Database

Package Database is the database connection for the entire project. It also
contacts the SQL patcher and actual SQL patches.

By default this package exports only the connection promise which is made by
the MySQL2 Promise package. The reason it exports a package is so that you
can use the async/await functionality of node, freeing you from callback hell
and also to help from having chain upon chain of promises.
