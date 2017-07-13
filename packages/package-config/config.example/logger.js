//
// Package Logger Configuration
//

module.exports = {
    // Enabled
    // Specifies if you want logging to be displayed in the console.
    // Default: true - Output is shown
    enabled: true,

    // Log File
    // Specifies which file you want to write the log to
    // If null, then do not write at all
    // This path is relative to the project root (where lerna.json is)
    logFile: 'package.log',

    // Display Date
    // Specifies whether logger outputs should have the date appended
    // Default: true - shows date
    displayDate: true,

    // Date Format
    // Specifies which date format you wish to use when logging
    // This can be any format that is recognized by moment
    // Default: 'YYYY-MM-DD HH:mm:ss'
    dateFormat: 'YYYY-MM-DD HH:mm:ss'
}
