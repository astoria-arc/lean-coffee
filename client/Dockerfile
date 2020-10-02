FROM node:12-alpine

# Add the project files and install
WORKDIR /srv
ADD . ./
RUN yarn install

CMD yarn start
