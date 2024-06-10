#!/usr/bin/env sh

# config git user for chromatic to work
git config --global user.email "$GIT_EMAIL"

npm install

echo CI

# run the storybook
npm run storybook & npm run dev