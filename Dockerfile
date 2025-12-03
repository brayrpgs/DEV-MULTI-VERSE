FROM node:24.11.1-alpine3.22

WORKDIR /home/app

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]