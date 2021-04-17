FROM node:12

LABEL maintainer="Feliciano Franco"

LABEL email="f64franco@gmail.com"

LABEL description = "Creación del sitio web hecho en ReactJS + Redux + Webapp + Bootstrap. NodeJS v12."

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]