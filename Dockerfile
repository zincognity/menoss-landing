FROM nginx:alpine3.21-slim@sha256:b947b2630c97622793113555e13332eec85bdc7a0ac6ab697159af78942bb856 AS runtime

COPY nginx.conf /etc/nginx/nginx.conf

COPY src/components/ /usr/share/nginx/html/components/
COPY src/layouts/ /usr/share/nginx/html/layouts/
COPY src/pages/ /usr/share/nginx/html/
COPY src/productos/ /usr/share/nginx/html/productos/
COPY src/scripts/ /usr/share/nginx/html/scripts/
COPY src/styles/ /usr/share/nginx/html/styles/
COPY public/assets/ /usr/share/nginx/html/public/assets/

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]