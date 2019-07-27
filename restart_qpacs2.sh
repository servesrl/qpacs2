#!/bin/bash
docker-compose stop && docker-compose rm -f
docker volume prune -f
docker network prune -f
docker-compose up -d
docker-compose ps
