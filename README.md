# PM2 with Docker - GRPC MSA

## Description
This is a sample code of Nest-monorepo which use GRPC protocol  
Manage two services inside of one PM2 - Docker container

## Build
```bash
$ docker build -t pm2 .
```

### Run
```bash
$ docker run -p 80:80 pm2
```


## Result
1. You can see the response of main service at http://localhost
2. You can see the response of GRPC microservice at http://localhost/service
