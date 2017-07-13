//
// Package Database Configuration
//
// This file allows you to edit the connection
// information for a MySQL connection.
//
// Note: This package uses MySQL2 by default,
// but can be changed by editting the package-database
// package and using a different DBMS Driver
//

module.exports = {
    // Host
    // Physical address where the MySQL server is located.
    // Default: localhost
    host: 'localhost',

    // Port
    // Physical port that the MySQL Server is listening on.
    // Default: 3306 - MySQL Default
    port: 3306,

    // User
    // User that the project should use when interacting
    // with the database.
    // Default: 'root'
    user: 'root',

    // Password
    // Password for the user specified above
    password: '',

    // Database
    // The database where the packages data is stored
    // Default: 'package'
    database: 'package',

    // Multiple Statements
    // Allows MySQL to access more than one statement per request
    // Default: false
    multipleStatements: false
}
