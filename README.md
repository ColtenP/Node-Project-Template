# Project Template

This is a template for setting up a node web api with a Vue.js frontend

There are some things that you need to know about how lerna works.

# Adding a dependencies to a package

To add a dependencies to a package you can not use `npm` or `yarn` if the
package depends on one of the packages in the `packages` directory because they
are not published on NPM and cannot be resolved.

So you must manually add the package to the package's `package.json` file and
then run `lerna bootstrap` this command will install ALL of your packages and
their dependencies and also symlink your packages together so they can easily
be used in one another by calling `require('package-{package}')`.
