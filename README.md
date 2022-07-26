# WarehouseApp

This Angular app will interact with spring-warehouse-api to search the products by name and shows the results with pagination

![Warehouse_App](https://user-images.githubusercontent.com/20318317/180660520-029c0737-3d71-4a65-866a-b710621eaa7f.jpg)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Docker build and run

To build and run as docker container use below commands

```
  docker build -t warehouse-app .
  docker run -d -p 80:80 warehouse-app

```
