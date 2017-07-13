# Project Template

This is a template for setting up a node web api with a Vue.js frontend

There are some things that you need to know about how lerna works.

## Setup

To use this package use must install lerna globally, you can do this with

`npm i -g lerna`

After Lerna is installed, then you must use Lerna to install all of the
dependencies for your packages.

`lerna bootstrap`

Often times this command will fail the first time, so just run it again and it
should work. It is an issue that is known with lerna.

Now to start up the application simply run

`npm run dev`

## Adding Configuration Files

On the first start up, the application will error out and exit because there
are no configuration files present. To add these you must navigate to
`packages/package-config/` and either copy or rename the directory
`config.example` to `config`, now you can start up your project without errors.

## Adding a dependencies to a package

To add a dependencies to a package you can not use `npm` or `yarn` if the
package depends on one of the packages in the `packages` directory because they
are not published on NPM and cannot be resolved.

So you must manually add the package to the package's `package.json` file and
then run `lerna bootstrap` this command will install ALL of your packages and
their dependencies and also symlink your packages together so they can easily
be used in one another by calling `require('package-{package}')`.
