#!/usr/bin/env sh

# config git user for chromatic to work
git config --global user.email "$GIT_EMAIL"

# install dependencies
npm install

# run the storybook
npm run storybook