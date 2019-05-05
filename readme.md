# Dockerize node app test
A simple app which displays hello world

## Create container
to create the container with name 'node-test' run the following code from the working directory
```docker build -t node-test . ```

## run container
run the app (node-test) on localhost:9000 
```docker run -it -p 9000:9000 node-test```
