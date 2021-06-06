FROM node AS build-phase

WORKDIR /usr/src/app

# Copy all of the content from the project to the image.
COPY . .

# Install project packages.
RUN npm install && \
# Deploy
    npm run build

FROM node:14-alpine3.13

EXPOSE 5000

WORKDIR /usr/src/app

# Copy all of the content from the project to the image.
COPY --from=build-phase /usr/src/app/build/ /usr/src/app/biuld

# serve package will serve the app.
RUN npm install -g serve && \
# Add a non-root user
    adduser -D appuser

USER appuser

ENTRYPOINT [ "serve", "-s", "-l", "5000", "biuld" ]