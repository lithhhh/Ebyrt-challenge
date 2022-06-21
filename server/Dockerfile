FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3001

# CMD [ "npm", "start" ]
# RUN npm start

ENTRYPOINT ["npm", "start"]
#  ...
