# Angular scss starter

This project was angular starter generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Rename project name
Angular-cli doesn't do renaming, you should manually modify it.

1. Open `angular.json` and `package.json` file
2. Replace all occurrences of the old name which is angular-scss-starter
3. Rename project folder name
4. If `node_modules`folder exist, delete it and reinstall the package
5. finally run `ng serve` 

## Project architecture
```
angular-scss-start
├─ 📁.angular
├─ 📁.vscode
│  ├─ 📄extensions.json
│  ├─ 📄launch.json
│  └─ 📄tasks.json
├─ 📁src
│  ├─ 📁app
│  │  ├─ 📁cart
│  │  │  ├─ 📁pipes
│  │  │  │  ├─ 📄totalPriceWithTax.pipe.spec.ts
│  │  │  │  ├─ 📄totalPriceWithTax.pipe.ts
│  │  │  │  ├─ 📄totalTax.pipe.spec.ts
│  │  │  │  └─ 📄totalTax.pipe.ts
│  │  │  ├─ 📄cart-routing.module.ts
│  │  │  ├─ 📄cart.component.html
│  │  │  ├─ 📄cart.component.scss
│  │  │  ├─ 📄cart.component.spec.ts
│  │  │  ├─ 📄cart.component.ts
│  │  │  └─ 📄cart.module.ts
│  │  ├─ 📁products
│  │  │  ├─ 📁components
│  │  │  │  └─ 📁product
│  │  │  │     ├─ 📄product.component.html
│  │  │  │     ├─ 📄product.component.scss
│  │  │  │     ├─ 📄product.component.spec.ts
│  │  │  │     └─ 📄product.component.ts
│  │  │  ├─ 📁models
│  │  │  │  └─ 📄products.interfaces.ts
│  │  │  ├─ 📁pipes
│  │  │  │  ├─ 📄filter.pipe.spec.ts
│  │  │  │  ├─ 📄filter.pipe.ts
│  │  │  │  ├─ 📄totalProductCount.pipe.spec.ts
│  │  │  │  ├─ 📄totalProductCount.pipe.ts
│  │  │  │  ├─ 📄uniqueCategories.pipe.spec.ts
│  │  │  │  └─ 📄uniqueCategories.pipe.ts
│  │  │  ├─ 📄products.component.html
│  │  │  ├─ 📄products.component.scss
│  │  │  ├─ 📄products.component.spec.ts
│  │  │  ├─ 📄products.component.ts
│  │  │  └─ 📄products.module.ts
│  │  ├─ 📁shared
│  │  │  ├─ 📁consts
│  │  │  │  └─ 📄common.ts
│  │  │  ├─ 📁models
│  │  │  │  └─ 📄product.model.ts
│  │  │  ├─ 📁page-not-found
│  │  │  │  └─ 📄page-not-found.component.ts
│  │  │  ├─ 📁pipes
│  │  │  │  └─ 📄priceWithTax.pipe.ts
│  │  │  ├─ 📁services
│  │  │  │  ├─ 📄cart.service.spec.ts
│  │  │  │  ├─ 📄cart.service.ts
│  │  │  │  ├─ 📄products.service.spec.ts
│  │  │  │  └─ 📄products.service.ts
│  │  │  ├─ 📁utils
│  │  │  │  ├─ 📄calc-tax.spec.ts
│  │  │  │  └─ 📄calc-tax.ts
│  │  │  └─ 📄shared.module.ts
│  │  ├─ 📄app-routing.module.ts
│  │  ├─ 📄app.component.html
│  │  ├─ 📄app.component.scss
│  │  ├─ 📄app.component.spec.ts
│  │  ├─ 📄app.component.ts
│  │  └─ 📄app.module.ts
│  ├─ 📁assets
│  │  ├─ 📁styles
│  │  │  ├─ 📄_breakpoint.scss
│  │  │  ├─ 📄_colors.scss
│  │  │  └─ 📄_mixin.scss
│  │  ├─ 📄.gitkeep
│  │  └─ 📄products.json
│  ├─ 📁environments
│  │  ├─ 📁utils
│  │  │  ├─ 📄endpoints.ts
│  │  │  └─ 📄env.model.ts
│  │  ├─ 📄environment.prod.ts
│  │  └─ 📄environment.ts
│  ├─ 📄favicon.ico
│  ├─ 📄index.html
│  ├─ 📄main.ts
│  └─ 📄styles.scss
├─ 📄.editorconfig
├─ 📄.eslintrc.json
├─ 📄.gitignore
├─ 📄README.md
├─ 📄angular.json
├─ 📄kata Cart - specific.docx
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄tsconfig.app.json
├─ 📄tsconfig.json
└─ 📄tsconfig.spec.json
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
