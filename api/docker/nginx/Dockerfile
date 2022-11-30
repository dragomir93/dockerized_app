ARG NGINX_VERSION=1.19.1

FROM nginx:${NGINX_VERSION}-alpine

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

CMD envsubst '\$URL' < docker/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'

COPY . ./
