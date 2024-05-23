# storybook-vvd
storybook + vite + vue + docker + visual tests

## Knowledge
* [node.js](https://nodejs.org/en)
* [npm](https://docs.npmjs.com/)
* [Vue](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [GNU make](https://www.gnu.org/software/make/manual/make.html)

## Installing & Running Repository

### Prerequisites
* a [Chromatic](https://www.chromatic.com/) account

### Clone & Install Repository
```bash
git clone https://github.com/difuoan/storybook
cd storybook/
make init
make build
```
Make sure to update the .env file with your credentials
```env
CHROMATIC_PROJECT_TOKEN=chpt_XXXXXXXXXXXXXXXX
GIT_EMAIL=lucas.j.venturini@gmail.com
```

### Run Repository
```bash
make up
```

### Enable Visual Tests
<img src="https://github.com/difuoan/storybook-vvd/blob/master/assets/visualTestingPanel.png" alt="Visual Testing panel inside the storybook UI" width="25%" align="right"/>
Follow the setup process further. The next steps will be described in the "Visual Tests" panel inside the storybook UI (see screenshot &rarr;)
<br clear="right"/>

### Run Tests
```
make test
```

### All `make` Commands
```make
init # initialize env
up # start storybook
start # same as up
down # shut down storybook
stop # same as down
tail # docker logs
build # install everything needed
restart
clear # remove env
ps # show containers
test.unit # run vitests
test.story # run storybook tests
test # run all tests
```
