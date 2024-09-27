
# Getting Started with TypeScript

This guide will help you set up a basic TypeScript project.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher): You can download it from [here](https://nodejs.org/).
- **npm** (comes with Node.js) or **yarn** (alternative package manager).

## Step 1: Initialize the Project

1. Open a terminal and create a new project directory:

    ```bash
    mkdir my-typescript-project
    cd my-typescript-project
    ```

2. Initialize a new `package.json` file:

    ```bash
    npm init -y
    ```

## Step 2: Install TypeScript

Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

## Step 3: Initialize TypeScript Configuration

To set up a TypeScript configuration file, run:

```bash
npx tsc --init
```

This will create a `tsconfig.json` file in your project directory.

## Step 4: Create Your First TypeScript File

1. Create a `src` folder:

    ```bash
    mkdir src
    ```

2. Inside the `src` folder, create an `index.ts` file:

    ```bash
    touch src/index.ts
    ```

3. Add some TypeScript code to the `index.ts` file:

    ```ts
    const greeting: string = "Hello, TypeScript!";
    console.log(greeting);
    ```

## Step 5: Compile TypeScript to JavaScript

To compile the TypeScript code into JavaScript, run:

```bash
npx tsc
```

This will generate a `dist` folder containing the compiled JavaScript.

## Step 6: Run the Compiled JavaScript

You can run the compiled JavaScript with Node.js:

```bash
node dist/src/index.js
```

## Step 7: (Optional) Set Up Watch Mode for Development

You can set up TypeScript to watch for file changes and recompile automatically by running:

```bash
npx tsc --watch
```

## Done!

You now have a basic TypeScript project set up! You can start building your application.
