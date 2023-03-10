# Angular starter

This angular starter allows to begin a new app using Angular 15.

This project was angular starter generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Getting started

### Prerequisites

To run your project locally, you need the following installed:
- [Node.js](https://angular.io/start/start-deployment#:~:text=on%20your%20computer%3A-,Node.js,-.)
- [Angular CLI](https://github.com/angular/angular-cli)

### Download project 

1. Run `git clone git@github.com:SUtengda/angular-starter.git`
or `git clone --branch=feat/clean git@github.com:SUtengda/angular-starter.git` where I kept only necessary code to run application.
2. Delete folder `.git` of project (`cd angular-starter` then `rm -rf .git`)
3. Re run `git init` if necessary

or just download zip folder

### Rename project name
Angular-cli doesn't do renaming, you should manually modify it.

1. Open `angular.json` and `package.json` file
2. Replace all occurrences of the old name which is angular-starter
3. Rename project folder name
4. If `node_modules`folder exist, delete it and reinstall the package

### Install dependencies

Run `npm i` to install the required libraries.
Then run `ng serve` 


### Unit tests

Run `ng test` to execute the example unit tests

## Project architecture
```
angular-scss-start
ββ πsrc
β  ββ πapp
β  β  ββ πcart
β  β  β  ββ πpipes
β  β  β  β  ββ πtotalPriceWithTax.pipe.spec.ts
β  β  β  β  ββ πtotalPriceWithTax.pipe.ts
β  β  β  β  ββ πtotalTax.pipe.spec.ts
β  β  β  β  ββ πtotalTax.pipe.ts
β  β  β  ββ πcart-routing.module.ts
β  β  β  ββ πcart.component.html
β  β  β  ββ πcart.component.scss
β  β  β  ββ πcart.component.spec.ts
β  β  β  ββ πcart.component.ts
β  β  β  ββ πcart.module.ts
β  β  ββ πproducts  * This directory contains components
β  β  β  ββ πcomponents
β  β  β  β  ββ πproduct
β  β  β  β     ββ πproduct.component.html
β  β  β  β     ββ πproduct.component.scss
β  β  β  β     ββ πproduct.component.spec.ts
β  β  β  β     ββ πproduct.component.ts
β  β  β  ββ πmodels
β  β  β  β  ββ πproducts.interfaces.ts
β  β  β  ββ πpipes
β  β  β  β  ββ πfilter.pipe.spec.ts
β  β  β  β  ββ πfilter.pipe.ts
β  β  β  β  ββ πtotalProductCount.pipe.spec.ts
β  β  β  β  ββ πtotalProductCount.pipe.ts
β  β  β  β  ββ πuniqueCategories.pipe.spec.ts
β  β  β  β  ββ πuniqueCategories.pipe.ts
β  β  β  ββ πproducts.component.html
β  β  β  ββ πproducts.component.scss
β  β  β  ββ πproducts.component.spec.ts
β  β  β  ββ πproducts.component.ts
β  β  β  ββ πproducts.module.ts
β  β  ββ πshared   * This directory contains services, guards, models, and any other shared code that is used throughout the application.
β  β  β  ββ πconsts
β  β  β  β  ββ πcommon.ts
β  β  β  ββ πmodels
β  β  β  β  ββ πproduct.model.ts
β  β  β  ββ πpage-not-found 
β  β  β  β  ββ πpage-not-found.component.ts
β  β  β  ββ πpipes
β  β  β  β  ββ πpriceWithTax.pipe.ts
β  β  β  ββ πservices
β  β  β  β  ββ πcart.service.spec.ts
β  β  β  β  ββ πcart.service.ts
β  β  β  β  ββ πproducts.service.spec.ts
β  β  β  β  ββ πproducts.service.ts
β  β  β  ββ πutils
β  β  β  β  ββ πcalc-tax.spec.ts
β  β  β  β  ββ πcalc-tax.ts
β  β  β  ββ πshared.module.ts
β  β  ββ πapp-routing.module.ts
β  β  ββ πapp.component.html
β  β  ββ πapp.component.scss
β  β  ββ πapp.component.spec.ts
β  β  ββ πapp.component.ts
β  β  ββ πapp.module.ts
β  ββ πassets
β  β  ββ πstyles
β  β  β  ββ π_breakpoint.scss
β  β  β  ββ π_colors.scss
β  β  β  ββ π_mixin.scss
β  β  ββ π.gitkeep
β  β  ββ πproducts.json
β  ββ πenvironments 
β  β  ββ πutils
β  β  β  ββ πendpoints.ts  * register backend api route here
β  β  β  ββ πenv.model.ts  * this file declare types of endpoint
β  β  ββ πenvironment.prod.ts
β  β  ββ πenvironment.ts
β  ββ πfavicon.ico
β  ββ πindex.html
β  ββ πmain.ts
β  ββ πstyles.scss
ββ π.editorconfig
ββ π.eslintrc.json
ββ π.gitignore
ββ πREADME.md
ββ πangular.json
ββ πpackage-lock.json
ββ πpackage.json
ββ πtsconfig.app.json
ββ πtsconfig.json
ββ πtsconfig.spec.json
```

## Some useful command
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Update angular minor version
```bash
npx npm-check-updates --upgrade --target "minor" --filter "/@angular.*/"
```
### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `npm run build:prod` to build the project on mode production
### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
