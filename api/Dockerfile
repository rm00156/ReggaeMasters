FROM node:10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/api

COPY ./package.json /usr/src/app/


RUN apk --no-cache --virtual build-dependencies add git python make g++ \
    && apk add curl \
    && git config --global url."https://".insteadOf git:// \
    && yarn install \
    && yarn cache clean --force \
    && apk del build-dependencies \


COPY . /usr/src/app
EXPOSE 8080
CMD ["yarn", "start"]