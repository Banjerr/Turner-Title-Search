FROM node:9.11.1-alpine

RUN mkdir -p /home/app/client
WORKDIR /home/app/client

COPY package.json /home/app/client
COPY tsconfig.json /home/app
# COPY tsconfig.app.json /home/app
# COPY tsconfig.spec.json /home/app
# COPY tslint.json /home/app
# COPY angular.json /home/app

RUN npm install
RUN npm install -g @angular/cli@1.7.1
RUN npm install -g @angular/core

COPY . /home/app/client

EXPOSE 4200

CMD ["npm", "start"]