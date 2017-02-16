# Simple set up for a JavaScript dev environment

This will set up a dev environment for a JavaScript project in less than 5 minutes, includes linting with [Standard](https://github.com/feross/standard), and testing suite [Ava](https://github.com/avajs/ava).
It also uses [Chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli) for file watching and [Precommit-hook](https://github.com/nlf/precommit-hook) for running npm scripts automatically.

## Init the node.js project and git repo

For a fresh install just run the code below or if you want to clone this repo there are dummy modules and tests already here.

```
# Create a directory and cd into it (#protip – $_ holds argument of your last command)
$ mkdir awesome-module && cd $_

# Initialize Node.js project with default settings
$ npm init --yes

# Create initial folders and files
$ mkdir lib test
$ touch index.js lib/meaningOfLife.js test/index.test.js test/meaningOfLife.test.js

# Initialize GIT repository and create initial commit
$ git init
$ git add -A; git commit -am "init project"

# Install the tools
$ npm i --save-dev ava standard chokidar-cli precommit-hook

# Create .gitignore
$ touch .gitignore && echo 'node_modules' > .gitignore
```

## Setup the tools

```
"scripts": {
  "test": "ava",
  "lint": "standard",
  "dev": "chokidar '**/*.js' -c 'standard && ava'"
},
"pre-commit": ["test", "lint"],
```

That's it, run `npm run dev` to get all files linted by Standard and tests run by Ava.

Git commits won't happen unless all tests are green and the linter is happy.

Tests and modules have been created to look at in this repo.

