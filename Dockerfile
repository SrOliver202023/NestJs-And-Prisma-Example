FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install --location=global npm

COPY . .

EXPOSE 3000

CMD ["yarn","start:dev"]
