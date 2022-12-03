ARG NODE_VERSION=18.12.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /client
# Copy app files
COPY . .

RUN npm install 

RUN npm run build

ENV NODE_ENV production

EXPOSE 8080
# Start the app
CMD [ "npm", "run", "build" ]