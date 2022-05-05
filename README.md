# Metadev-Client-Application-Example

## Insattling Docker 

Follow [docker docs](https://docs.docker.com/get-docker/) to install docker.

## Build and Run Docker Container

1. CD to project director
2. RUN `docker build -t metadev-client .`
3. RUN `docker run --rm -it -p 8080:80 metadev-client`
4. Open [http://localhost:4200/](http://localhost:4200/)
