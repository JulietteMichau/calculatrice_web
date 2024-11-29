FROM node:16-alpine

# Définir le répertoire de travail dans le container

# Copier le code source de l'application dans le container
COPY ./calculatrice-web/ .

WORKDIR /calculatrice-web

# Exposer le port sur lequel votre application s'exécute
EXPOSE 8080


