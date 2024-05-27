FROM node:20-bookworm

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# make git findable so we can use it
ENV PATH="${PATH}:/usr/bin/git"

WORKDIR /app

ENV PLAYWRIGHT_BROWSERS_PATH=/usr/playwright
RUN npx playwright install --with-deps
# RUN npx -y playwright@1.44.1 install --with-deps

RUN chown -R node:node /app
RUN chown -R node:node /usr/playwright

USER node