#### App setup

Create .env.local based on .env.local.dist.
For docker setup follow guide below.

#### Project Setup
  * On the server install Git https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04
  * Clone the project `git clone git@github.com:dragomir93/dockerized_app.git`


#### Docker guide
 * Setup docker and docker-compose on your environment
    * https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04 (or https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)
    * https://docs.docker.com/compose/install/
  * You will need the following ports open:
    * 8000 (nginx)
    * 5434 (postgresql)
    * 8025 (mailhog)
    * 9001 (xdebug)
  * Run 
    * `docker network create website-network`
    * `make up` - if docker settings have not changed from the last build
    * `make recreate` - if docker settings have changed from the last build
  * Run 
    * `make logs` - to check for errors
  * Verify that all containers are up and running:
    * `docker ps -a` / (`d-ps`)
    
###### The following services should be available:
  * api/nginx:
    * [http://localhost:3004/](http://localhost:3004)
  * mailhog:
    * [http://localhost:8025/](http://localhost:8025)
  * postgresql (default settings from docker-compose.yml db container):
    * host: 0.0.0.0:8082
    * db: api
    * user: website_user
    * pass: website_password
    * port: 5434
    
###### Things to know
  * When you change docker-compose.yml settings, run: 
    * `make up`
  * When you change php.ini settings, run:
    * `docker-compose up -d --build --force-recreate php` 

###### Troubleshooting
```
docker ps -qa | xargs docker rm -f
docker system prune -af
docker network prune -f
docker volume ls -q | xargs docker volume rm -f
```
#### Deploy
  * In local enviroment only run `./deploy.sh` after all the containers are runnning and setted up properly