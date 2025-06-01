FROM nginx:alpine3.21-slim@sha256:b947b2630c97622793113555e13332eec85bdc7a0ac6ab697159af78942bb856 AS runtime

COPY nginx.conf /etc/nginx/nginx.conf

COPY src/pages/ /usr/share/nginx/html/
COPY src/styles/ /usr/share/nginx/html/styles/
COPY public/assets/ /usr/share/nginx/html/public/assets/

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]