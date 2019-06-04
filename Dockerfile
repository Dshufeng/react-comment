FROM nginx:alpine
ADD ./build /var/www/html
ADD ./nginx/conf.d /etc/nginx/conf.d
EXPOSE 80
