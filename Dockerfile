FROM node:12

RUN npm install -g sequelize-cli

WORKDIR /usr/src/just-speak

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
