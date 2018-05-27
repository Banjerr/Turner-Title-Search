FROM node:9.11.1-alpine

RUN mkdir -p /home/server
WORKDIR /home/server

COPY package.json /home/server

RUN npm install

COPY . /home/server

EXPOSE 3000

CMD npm run server-start