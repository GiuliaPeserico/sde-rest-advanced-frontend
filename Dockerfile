FROM node:12-slim
WORKDIR /www
ENV NODE_ENV development
COPY package.json /www/package.json
RUN npm install
COPY . /www
CMD ["npm" , "start"]
EXPOSE 4200
