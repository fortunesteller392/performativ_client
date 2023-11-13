# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from dockerhub
FROM node:lts-buster AS development

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependecies
#RUN npm set progress=false \
#    && npm config set depth 0 \
#    && npm i install
RUN yarn install

# Get all the code needed to run the app
COPY . /usr/src/app

# Serve the app
CMD ["npm", "start"]

# Expose the port the app runs in
EXPOSE 3000