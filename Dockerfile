FROM node:11-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD [ "node", "./src/app.js" ]