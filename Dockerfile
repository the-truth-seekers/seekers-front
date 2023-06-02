FROM node:18.12.0 AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:latest

COPY --from=builder /app/dist/angular-seekers /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
