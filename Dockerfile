FROM public.ecr.aws/docker/library/node:lts-alpine

WORKDIR /app

COPY apps ./apps
COPY ecosystem.config.cjs ./
COPY nest-cli.json ./
COPY package.json ./
COPY run.bash .
COPY tsconfig.json ./
COPY tsconfig.build.json ./

RUN apk add bash
RUN npm i
RUN npm i @nestjs/cli -g
RUN npm i pm2 -g

CMD bash run.bash
