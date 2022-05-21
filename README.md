A basic, production ready NPM package skeleton.

## How to use

### Create a GitHub repository and download
Click the "Use this template" button and then clone your newly created repo to your machine with the command (inside 
your local dev directory):

```
git clone git@github.com:<YourGitHubUsername>/<RepoName>.git

// eg. git clone git@github.com:DanielWinning/node-package-template.git
```

Then `cd` into the new directory.

### Edit package.json
Inside your projects `package.json` file, change the following line to `<your-npm-username>/<package-name>`. You can 
preface your vendor name (the first part) with an `@` to make this a 
[scoped package](https://docs.npmjs.com/cli/v8/using-npm/scope):
```
"name": "@my-org/node-package-template"
```

### Run npm commands
Now run `npm install && npm run build` to install the required dev dependencies and compile the example code.

### Remove example code
You can work on your package inside the `src` directory, currently `src/index.js` just exports the `HelloWorld` class 
from `src/HelloWorld.js`, which you can delete and add your own code. You can watch for changes with the `npm run watch` 
command and compile for production with the `npm run build` command.

### Testing package before publishing
To test your package inside a project before publishing to NPM, you can use `npm link` to create a symbolic link to your 
package.

In the root of your package (same level as package.json), run:
```
npm link
```

Inside the project you want to test your package in, run:
```
npm link vendor/package-name
```

Now you can test your package - see the example below, this is how we would use the `HelloWorld` class inside our
real world project:
```
import { HelloWorld } from "@my-org/node-package-template";

console.log(HelloWorld.greetWorld());
```

### Added TDD
It's good practice to use Test Driven Development, so I've included jest. Write your tests inside the tests directory - 
an example using the `HelloWorld` class has been included. Run the command `npm test` to run your tests.

### Publishing your package
When you're happy that your package is ready to be released into the wild, simply run `npm publish` or 
`npm publish --access public` if your package is scoped.