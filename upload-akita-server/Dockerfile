FROM node:16.13.0-alpine
WORKDIR /app-server
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run start

# $ docker-compose up
# $ docker-compose build