# Storybook

Dockerized storybook component library with all the goodies!

## Overview

* [Installing & Running Repository](#installing--running-repository)
    * [Prerequisites](#prerequisites)
    * [Clone & Install Repository](#clone--install-repository)
    * [Run Repository](#run-repository)
    * [Enable Visual Tests](#enable-visual-tests)
* [Run Tests](#run-tests)
* [All `make` Commands](#all-make-commands)
* [Knowledge](#knowledge)
* [Issues](#issues)

## Installing & Running Repository

### Prerequisites

* working <a href="https://www.docker.com/" target="_blank">Docker</a> installation
* a <a href="https://www.chromatic.com/" target="_blank">Chromatic</a> account (for visual testing)

### Clone & Install Repository

```bash
git clone https://github.com/difuoan/storybook
cd storybook/
make init
```

Make sure to update the `.env` file with your credentials

```env
GIT_EMAIL=lucas.j.venturini@gmail.com
```

Then build the container.

```bash
make build
```

### Run Repository

Unless you have changed the `DOMAIN` variable in the `.env` or `.env.example` file the storybook UI should be reachable under [storybook.localhost](http://storybook.localhost) after you run the following command.

```bash
make up
```

### Enable Visual Tests

<img src="./assets/visualTestingPanel.png" alt="Visual Testing panel inside the storybook UI" width="25%" align="right"/>

Follow the setup process further. The next steps will be described in the "Visual Tests" panel inside the storybook UI (see screenshot ⇒)

<br clear="right"/>

## Run Tests

You can view the results in the "Coverage Report" page in the storybook UI.

```
make test
```

## All `make` Commands

```make
init:           # initialise the env
up:             # start the container
start:          # start the container
down:           # end the container
stop:           # end the container
tail:           # echo logs
build:          # build image
restart:        # restart container
clear:          # destroy environment
ps:             # print all docker containers
login:          # open bash in container
playground:     # run vite page
test:           # run all tests
test-storybook: # run storybook (component) tests
test-unit:      # run unit tests
test-e2e:       # run end to end tests
```

## Knowledge

* <a href="https://nodejs.org/en" target="_blank">node.js</a>
* <a href="https://docs.npmjs.com/" target="_blank">npm</a>
* <a href="https://vuejs.org/" target="_blank">Vue</a>
* <a href="https://vitejs.dev/" target="_blank">Vite</a>
* <a href="https://www.docker.com/" target="_blank">Docker</a>
* <a href="https://docs.docker.com/compose/" target="_blank">Docker Compose</a>
* <a href="https://www.gnu.org/software/make/manual/make.html" target="_blank">GNU make</a>
* <a href="https://doc.traefik.io/traefik/providers/docker/" target="_blank">Traefik</a>
* <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>

## Issues

* If the Coverage Report page doesn't work it's probably because the tests haven't been exectured yet. Read the [Run Tests](#run-tests) section.
* If the `.env` file keeps resetting it's probably because you have re-initialised the project. Don't call `make init` or change the variables in the `.env.example` file instead.