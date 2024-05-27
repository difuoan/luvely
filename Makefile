init:
	cp --update=none .env.example .env

up:
	docker compose up -d

start: up

down:
	docker compose down --remove-orphans

stop: down

tail:
	docker compose logs -f

build:
	docker compose build --no-cache

restart: down up

clear:
	rm .env

ps:
	docker compose ps

login:
	docker compose exec --user node storybook bash

playground:
	docker compose exec --user node storybook npm run dev

test:
	docker compose exec --user node storybook npm run test:unit
	docker compose exec --user node storybook npm run test:storybook

test-e2e:
	docker compose exec --user node storybook npm run test:e2e