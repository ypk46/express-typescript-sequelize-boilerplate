FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

ENV DB_NAME sql_test_db
ENV DB_USER SA
ENV DB_PASS Admin1234@
ENV DB_PORT 1433
ENV DB_HOST 192.168.99.100
ENV MAX_POOL 10
ENV MIN_POOL 1

RUN yarn

COPY ./dist .

EXPOSE 3000

CMD [ "npm", "start" ]
