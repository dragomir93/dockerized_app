ARG NODE_VERSION=18.12.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /api
COPY package*.json ./
# Copy app files
COPY . .

# Start the app
CMD ["npm", "run"]