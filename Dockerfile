# Usa la imagen base de Nginx
FROM nginx:alpine

# Elimina los archivos por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia el HTML
COPY src/pages/ /usr/share/nginx/html/

# Copia los estilos
COPY src/styles/ /usr/share/nginx/html/styles/

# Copia los assets (imágenes, fuentes, etc.)
COPY public/assets/ /usr/share/nginx/html/public/assets/

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
