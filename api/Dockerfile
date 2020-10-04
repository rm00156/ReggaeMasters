FROM node:10-alpine

RUN mkdir -p /usr/src/app/api

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/


RUN apk --no-cache --virtual build-dependencies add git python make g++ \
    && apk add curl \
    && git config --global url."https://".insteadOf git:// \
    && yarn install \
    && yarn cache clean --force \
    && apk del build-dependencies \

EXPOSE 8080
COPY . /usr/src/app
CMD ["yarn", "start"]