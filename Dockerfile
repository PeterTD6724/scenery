FROM node:13-slim

WORKDIR /app

ADD . /app

EXPOSE  80

CMD node server.js

HOST-NAME gcr.io
PROJECT-ID whitef-data-b8eff
REPOSITORY scenery
IMAGE scenery
