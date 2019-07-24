docker-compose stop && docker-compose rm -f
docker volume prune -f
docker network prune -f
sudo rm -rf mongo_data orthanc_db pg_data
