FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i --save
EXPOSE 3000
CMD ["npm", "run", "start"]

#раскомментировать строку ниже для продакшн
#CMD ["serve", "-s", "build", "-l", "3000"]

