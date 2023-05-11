## React TypeScript Sass Starter Template

This is a React.js adaptation of [Graffino Docker Ninja](https://github.com/Graffino/Graffino-Docker-Ninja) and 98% of the styling code is taken from there.

This is a starter template for building React projects with TypeScript and Sass, featuring alias paths, advanced Webpack configurations via Craco, and Prettier for code formatting.

### Project Features

- Clean **HTML** file.
- Restructured all the react-boiler-plate folders for best practices.
- Added **Sass** starter code structure located in the src/styles folder.
- Sass modules for each react component with examples (home and about).
- The **Sass** modules object has types for each **CSS** class. That results in real-time **IntelliSense** for any **Sass** classes written inside the module, keeping the code tidy using the typescript-plugin-css-modules library.
- For styling rules, the project has **.stylint** configured with the latest rules & plugins for the best and most scalable code.
- For **JavaScript** code (**TS**, **TSX**) rules, the project has **.eslint** configured using **Airbnb** rules and some custom rules.
- For code formatting, the project includes **Prettier**, and **.stylint**, .**eslint**, are configured for using **Prettier**.  
  **tsconfig**, **eslint**, and **CRACO** config (Create React App Overrides) are configured for using **alias** **paths** (@components) for dynamic imports and easy future changes.
- The **PurgeCSS** was added in package.json as a post-build operation. This will eliminate all the **CSS** code that is not used in **JSX**.

### CRACO:

- configured to enable the .stylint warnings after the build was done.
- configured for using the source-map based on the environment mode.
- configured to create @styles alias for Sass alias paths imports.
- configured to include the **SCSS** module without duplicating the class name with the file name (as it is as default).

### JSX

- The project includes a structured example of using React Router to create the routes and display them in the header navigation section with active link functionality implemented.
- The project includes a common folder inside the /components folder that should include all shared components and has an example of a button component with multiple styles based on variant type.
- In the /utils folder, the routes are structured as an array of objects. Also, the “classes” function helps the developer use a much cleaner way to combine simple string classes with module object properties and classes just by passing them as parameters. There are examples of this too.
- The /assets folder is structured based on the asset type, and for fonts, for example, it is structured based on font file type ("wolff" and “woff2”).

### Some Advice

- Do not edit or delete the .vscode/ directory. It is used for changing Typescript version for the `typescript-plugin-css-modules` library to work property.
- **You should not** edit the .eslint, tsconfig, craco config, or .stylint config files unless you really know what you are modifying.
- The src/styles/common.scss file should not be replaced anywhere else. The Webpack from **CRACO** config is configured for that specific path.
- For best practices, you should keep the style structure as the components and all the structures as they are.
- If you need more alias paths, don't forget to update all the 3 files .eslitrrc.js file, tsconfig.js & CRACO file.
- For best practice, you should only use scss for styling and not simply CSS. The whole project was created for that.

### Getting Started

You need to have the following extensions:

- prettier
- stylelit
- eslint

Not needed, but will make your life much easier:

- auto rename tag
- auto import
- all autocomplete
- CSS peek
- sass
- stylus
- svg viewer
- template string converter
- remove unused imports

To use this starter template, clone the repository and run the following commands:

`npm install`

`npm start`

or

`yarn`

`yarn start`

For just building the project:

`npm run build / yarn build`

For buildings with additional information:

`npm run build:verbose / yarn build:verbose`
