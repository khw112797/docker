FROM alpine:latest

RUN apk add nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY 2048 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon-off;"]
