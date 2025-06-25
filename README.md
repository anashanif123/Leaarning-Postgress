# Postgress Express API

This project is a simple Node.js API using Express and PostgreSQL. It allows you to insert data into a PostgreSQL database table via a POST request.

## Features

- Connects to a PostgreSQL database using the `pg` package.
- Provides an `/add` endpoint to insert `name` and `id` into the `demotable` table.
- Uses Express for handling HTTP requests.

## Requirements

- Node.js
- PostgreSQL

## Installation

1. Clone the repository or download the files.
2. Run `npm install` to install dependencies.

## Usage

1. Make sure your PostgreSQL server is running and a database named `demo` with a table `demotable` (with columns `name` and `id`) exists.
2. Start the server:
    ```sh
    node main.js
    ```
3. Send a POST request to `http://localhost:3000/add` with JSON body:
    ```json
    {
      "name": "Your Name",
      "id": 1
    }
    ```

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [pg](https://www.npmjs.com/package/pg)

##