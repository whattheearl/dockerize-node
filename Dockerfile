FROM node:10-slim
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . /app
EXPOSE 9000:9000
CMD ["npm", "start"]