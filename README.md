# DATAKEEN Technical Test

### Requirements

- [Docker](https://docs.docker.com/get-docker/)

or

- [Node.js](https://nodejs.org/en/download/)

## How to run

First you need to clone the repository

```bash
git clone https://github.com/P4ST4S/datakeen-technical-test.git
cd datakeen-technical-test
```

### Docker

To build the docker compose run

```bash
docker compose build
```

After that you can up images with

```bash
docker compose up
```

Now you can access the website locally on `localhost:3000` or `127.0.0.1:3000`

### Node.js

To install dependencies run of server and client run

Server

```bash
cd server
npm install
```

Client

```bash
cd client
npm install
```

After that you can run the server and client with

Server

```bash
cd server
npm start
```

Client

```bash
cd client
npm start
```

Now you can access the website locally on `localhost:3000` or `127.0.0.1:3000`
