FROM public.ecr.aws/docker/library/node:lts-alpine

WORKDIR /app

COPY apps ./apps
COPY ecosystem.config.cjs ./
COPY nest-cli.json ./
COPY package.json ./
COPY run.bash .
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY install-protoc.bash .

RUN apk add --no-cache bash
RUN apk add --no-cache curl
RUN bash ./install-protoc.bash
RUN npm i
RUN npm i @nestjs/cli -g
RUN npm i pm2 -g

RUN protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./apps/proto ./apps/proto/service.proto --proto_path="./apps/proto/"

CMD bash run.bash
