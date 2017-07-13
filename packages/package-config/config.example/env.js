//
// Package ENV Configuration
//

module.exports = {
    // Env
    // Sets the environment of the process
    // While in Production errors are logged rather than sent back
    // to the user
    // Options: ['development', 'production']
    // Default: development
    env: 'development',

    // Production Environment Variables,
    production: {
        // You can put anything in here that you to be forwarded
        // to your process while in the production environment
    },

    // Development Environment Variables,
    production: {
        // You can put anything in here that you to be forwarded
        // to your process while in the development environment
    }
};
