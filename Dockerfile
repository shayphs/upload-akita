FROM node:16.13.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm run startdkr

# $ docker-compose up
# $ docker-compose build