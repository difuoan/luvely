init: # initialise the env
	cp --update=none .env.example .env

up: # start the container
	docker compose up -d

start: up # start the container

down: # end the container
	docker compose down --remove-orphans

stop: down # end the container

tail: # echo logs
	docker compose logs -f

build: # build image
	docker compose build --no-cache

restart: down up # restart container

clear: # destroy environment
	rm .env

ps: # print all docker containers
	docker compose ps

login: # open bash in container
	docker compose exec --user node storybook bash

playground: # run vite page
	docker compose exec --user node storybook npm run dev

test: # run all tests
	docker compose exec --user node storybook npm run test:unit
	docker compose exec --user node storybook npm run test:storybook
	docker compose exec --user node storybook npm run test:e2e

test-storybook: # run storybook (component) tests
	docker compose exec --user node storybook npm run test:storybook

test-unit: # run unit tests
	docker compose exec --user node storybook npm run test:unit

test-e2e: # run end to end tests
	docker compose exec --user node storybook npm run test:e2e