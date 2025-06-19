FROM nginx:alpine

COPY ./ /usr/share/nginx/html

RUN mkdir -p /var/cache/nginx/client_temp /var/run /run \
    && chown -R 1004:1004 /usr/share/nginx/html /var/cache/nginx /var/run /run

USER 1004

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

