FROM node:18-alpine

WORKDIR /app/

COPY public/ /app/
COPY src/ /app/src
COPY package.json /app/

RUN yarn

CMD ["yarn", "start"]