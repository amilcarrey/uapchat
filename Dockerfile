FROM node:latest AS builder
WORKDIR /app

COPY package.json . 
COPY yarn.lock .
RUN yarn

COPY . .

RUN yarn build

FROM ngnix:stable as production
COPY --from=builder /app/dist /usr/share/ngnx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx","-g", "daemon off;"]