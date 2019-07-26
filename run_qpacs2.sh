#!/bin/bash
docker-compose up -d 
#for container in nginx mongo postgres orthanc viewer prometheus 
#for container in nginx mongo postgres orthanc
#do
# docker-compose exec $container rm -f /etc/localtime
# docker-compose exec $container ln -sf /usr/share/zoneinfo/Europe/Rome /etc/localtime
#done
docker-compose ps
