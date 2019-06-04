#! /bin/bash
set -e
DOCKER_NAME='react-app'
BASE_PATH=$(cd `dirname $0`; pwd)

npm run build

inst=$(docker ps -qaf name=${DOCKER_NAME})
if [[ ! -z $inst ]]; then
    docker stop $inst 2>/dev/null
        docker rm $inst
fi

docker run -d \
           -p 8888:80 \
           -v ${BASE_PATH}/build:/var/www/html \
           -v ${BASE_PATH}/nginx/conf.d:/etc/nginx/conf.d \
           --name ${DOCKER_NAME} \
           nginx:alpine

