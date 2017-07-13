# Package Config

This package contains all of the configurations for the entire application.

You can either require the configuration as a whole, or you can simply require
each configuration as it is needed.

## Setup

Before you can start the application you will need to either rename or copy
the `config.example` directory and name it `config`. This is so the application
does not yell at you for not having any configuration files.

Note: If this project is going to be Version Controlled, then it is a smart to
simply copy the folder rather than renaming it.

## Adding a new configuration file

To add a new configuration file, you will need to simply make a file in the
`config` directory. If you want it to be exported with the entire configuration
then you will need to add its require statement to the object that is exported
in `index.js`.

Note: If this project is going to be Version Controlled, then it is smart to
create the default version of the configuration file in the `config.example`
directory. This will keep it version controlled, and the `config` directory is
ignored by default.
