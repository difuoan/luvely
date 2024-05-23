init:
	cp -n .env.example .env

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

test.unit:
	npm run test:unit

test.story:
	npm run test-storybook

test:
	npm run test:unit
	npm run test-storybook
	npm run test:merge
	npm run test:unit