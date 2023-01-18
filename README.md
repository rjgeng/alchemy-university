# Alchemy University

-   [https://university.alchemy.com](https://university.alchemy.com)

1.   [JavaScript Fundamentals](content/JavaScript-Fundamentals/Readme.md)

1.   [Ethereum Developer Bootcamp](content/Ethereum-Developer-Bootcamp/Readme.md)

1.   [Welcome to the Road to Web3](content/Road-to-Web3/Readme.md)

**Set up dependencies, environment and scripts etc :**

  - Create a `.gitignore` file executing `npx gitignore node`

  - Create a `package.json` file executing `npm init --y`

  - Add Eslint to the project executing `npx eslint --init`
 
  - Install jest `npm install -D jest @types/jest`
  
  - Add jest executing `npx jest --init`
  
  - Install cross-env `sudo npm install --global cross-env`

**Add the following scripts to package.json**

  ```
  "start": "node index.js",
  "test": "cross-env NODE_ENV=testing jest --verbose --runInBand"
  ```

**Run start and test**

```
npm run test
```

```
npm run start
```

