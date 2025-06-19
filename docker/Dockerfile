# Stage 1 (optional build step if you have a JS bundler) omitted
FROM nginx:alpine

# Copy static assets into the webroot
COPY ./ /usr/share/nginx/html

# Optionally drop the default Nginx conf and add your own
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

