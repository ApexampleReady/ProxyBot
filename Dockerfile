FROM node

WORKDIR /data
COPY package*.json ./
RUN npm i
COPY . .
CMD ["node", "bot.js"]