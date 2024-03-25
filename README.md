# Crazy-Cool-Store

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Crazy-Cool-Store

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#usage)
- [Questions](#questions)
- [License](#license)

## Installation (Local)

> **_NOTE:_**
> This package assumes you already have Node.js, MySQL Server, & MySQL Workbench installed. If you don't, download them here: [Node.js](https://nodejs.org/en/download), [MySQL Server](https://dev.mysql.com/downloads/mysql/), [MySQL Workbench](https://dev.mysql.com/downloads/workbench/). Then come back to these installation steps.

### Node Setup

1. Open your terminal and clone the github repo:

```
git clone https://github.com/hokage-216/crazy-cool-store.git
```

2. 'cd' into the folder:

```
cd crazy-cool-store
```

3. Then run this command to install the required packages:

```
npm install
```

4. After going through your MySQL Server & Workbench installation, create a '.env' file a the root the project folder. Inser the following into the file:

```
URI='mysql://[USER:PASS]@localhost:3306/[DATABASE]'
PORT=''
```

Replace 'USER' with the username of your workbench connection (typically 'root'), and if a password is utilized replace with 'PASS'. Lastly, replace 'DATABASE' with the name of your database.

![ENV Example](./res/uri-example.png)

### MySQL Workbench Setup (Windows)

Load the MySQL Shell in the terminal:

```
mysqlsh
```

Connect to the database:

```
\connect mysql://[USER:PASSWORD]@localhost:3306/[DATABASE]
```

Create schema:

```
\sql drop database if exists [DATABASE]b && \sql create database [DATABASE]
```

Set the active schema:

```
\use [DATABASE]
```

![Database Creation Example](./res/database-creation.png)

## Usage

### Sequelize

To setup the database using a sequelize instance run:

```
npm run sequelize
```

### MySQL2

To setup the database using a mysql2 connection run:

```
npm run mysql2-sync
```

### Seed Database

To seed the database run:

```
npm run seed
```

![Seed Example](./res/npm-seed.png)

### Initialization

If using Nodemon for development run:

```
npm run watch
```

![Nodemon Example](./res/npm-watch.png)

If Nodemon is not needed run:

```
npm start
```

![Start Example](./res/npm-start.png)


## Preview

Click the image below to view a live demonstation.

[![Video Demonstration Link](https://img.youtube.com/vi/GTsW5hLtMfo/0.jpg)](https://youtu.be/GTsW5hLtMfo)

## Questions

If you have any questions about the repo, open an issue or contact me directly at berrylevente@hotmail.com.

To view more of my work [click here](https://github.com/hokage-216/).

## License

Copyright (c) 2024 LeVente Berry Jr.

Licensed under the MIT license. To view the license terms [click here](https://opensource.org/licenses/MIT).