FROM node

WORKDIR /data


RUN npm i

CMD ["node", "bot.js"]