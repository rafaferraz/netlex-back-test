FROM node:14

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3086

CMD npm start