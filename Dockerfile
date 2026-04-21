FROM node:18

WORKDIR /app

COPY backend/
COPY frontend/ 

WORKDIR /app/backend

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]