FROM node:18.12.0

RUN npm install

ENTRYPOINT npm start