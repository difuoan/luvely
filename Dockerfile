FROM node:20-bookworm

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

ENV PLAYWRIGHT_BROWSERS_PATH=/usr/playwright
RUN npx playwright install --with-deps

RUN chown -R node:node /app
RUN chown -R node:node /usr/playwright
USER node

EXPOSE 6006