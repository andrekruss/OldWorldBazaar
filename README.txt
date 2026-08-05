# OldWorldBazaar

An online marketplace for antiques and collectibles built with React, ASP.NET Core, and PostgreSQL.

## Description

OldWorldBazaar is a simple marketplace application specialized in antiques and collectibles. The platform allows users to register as buyers and sellers, browse products from different stores, manage their own products and stores, and place orders.

This project is being developed using a modular architecture, with the frontend built in React and the backend built in ASP.NET Core. PostgreSQL is used as the application's database.

The frontend source code is located in the `frontend` folder, while the backend source code can be found in the `backend` folder. Additional documentation is available in the `docs` folder.

## Tech Stack

### Backend

* ASP.NET Core
* C#
* Entity Framework Core
* PostgreSQL

### Frontend

* React
* TypeScript
* Tailwind CSS

### Infrastructure

* Docker

## Usage

Clone the repository:

```bash
git clone https://github.com/andrekruss/OldWorldBazaar.git
```

The frontend and backend applications can be run either separately or together using Docker.

> **Note**
>
> Running the application with Docker Compose starts a PostgreSQL container. If PostgreSQL is already running on your machine, port conflicts may occur. Consider stopping the local PostgreSQL service before starting the containers.

### Running the Frontend and Backend (Docker)

The recommended way to run the project is with Docker Compose. From the project's root directory, execute:

```bash
docker compose up
```

### Running the Frontend Only

Navigate to the `frontend` directory and execute:

```bash
npm install
npm run dev
```

### Running the Backend Only

Navigate to the `backend` directory and execute:

```bash
docker compose up
```
