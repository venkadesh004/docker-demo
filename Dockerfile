FROM node:18.18-alpine3.18
COPY . /SAMPLE_APP

WORKDIR /SAMPLE_APP
EXPOSE 3000
CMD npm install --force && npm start