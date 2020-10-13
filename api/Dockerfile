FROM node:12.16.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
COPY package*.json build.js tsconfig.json tsconfig.prod.json ./
RUN npm ci
RUN npm run build


CMD ["npm", "run", "start"]