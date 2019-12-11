FROM node:10

# Install app dependencies
COPY package*.json ./


#Run npm install
#If building code for production
RUN npm ci --only=production

#Bundle app source
COPY . .

EXPOSE 8091


CMD [ "node", "server/index.js" ]