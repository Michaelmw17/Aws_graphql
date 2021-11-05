### Overview

We'll start from scratch, creating a new Next.js app. We'll then, step by step, use the [Amplify CLI](https://github.com/aws-amplify/amplify-cli) to build out and configure our cloud infrastructure and then use the [Amplify JS Libraries](https://github.com/aws-amplify/amplify-js) to connect the Next.js app to the APIs we create using the CLI.

The app will be a 3 page multi-user blog post application. The app we will displaying a list of posts with data like the title, content, and author of the post.
## Current stack: 

- React
- Tailwind CSS
- Graphql
- Node.js
- AWS Amplify
- (Planning to add) TypeScript
### Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started---creating-the-nextjs-application)
- [Adding an API](#adding-an-aws-appsync-graphql-api)

## Requirements

### [📄 1, 2 & 3 page Requirements](https://github.com/forexco/code-challenge-1)

### Environment & prerequisites


Using [Bash shell](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) to run Amplify CLI commands nd also to run a local version of the Next.js app.


## Getting Started - Creating the Next.js Application

First need to create a new Next.js project.

```
$ npx create-next-app amplify-next
```

cd into amplify-next directory & install AWS Amplify, AWS Amplify UI React and a few other libraries:

```
$ cd amplify-next
$ npm install aws-amplify @aws-amplify/ui-react react-simplemde-editor@4.1.5 react-markdown uuid
```

Since we will be using Tailwind, let's also install the tailwind dependencies:

```sh
npm install tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/typography
```

Create the necessary Tailwind configuration files:

```sh
npx tailwindcss init -p
```

Update __tailwind.config.js__ to add the Tailwind `typography` plugin to the array of plugins:

```js
plugins: [
  require('@tailwindcss/typography')
],
```

Within __styles/globals.css__ add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Installing the CLI

AWS Amplify CLI:

```bash
# NPM
$ npm install -g @aws-amplify/cli

# cURL (Mac & Linux)
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL

```

Configure the CLI with our credentials.


```sh
$ amplify configure

- Specify the AWS Region: ap-southeast-2
- Specify the username of the new IAM user: amplify-cli-user
> In the AWS Console, click Next: Permissions, Next: Tags, Next: Review, & Create User to create the new IAM user. Then return to the command line & press Enter.
- Enter the access key of the newly created user:   
? accessKeyId: (<ACCESS_KEY_ID>)  
? secretAccessKey: (<SECRET_ACCESS_KEY>)
- Profile Name: amplify-cli-user
```

### Initializing A New Project

```bashin
$ amplify init

- Enter a name for the project: amplifynext
- Initialize the project with the above configuration? No
- Enter a name for the environment: dev
- Choose your default editor: Visual Studio Code (or your default editor)
- Please choose the type of app that youre building: javascript
- What javascript framework are you using: react
- Source Directory Path: . (this sets the base directory to the root directory)
- Distribution Directory Path: .next
- Build Command: npm run-script build
- Start Command: npm run-script start
- Select the authentication method you want to use: AWS profile
- Please choose the profile you want to use: amplify-cli-user (or your preferred profile)
```

The Amplify CLI has initialized a new project & you will see a new folder: __amplify__ & a new file called `aws-exports.js` in the root directory. These files hold your project configuration.

To view the status of the amplify project at any time, you can run the Amplify `status` command:

```sh
$ amplify status
```

To view the amplify project in the Amplify console at any time, run the `console` command:

```sh
$ amplify console
```

## Adding an AWS AppSync GraphQL API

To add a GraphQL API, we can use the following command:

```sh
$ amplify add api

? Please select from one of the above mentioned services: GraphQL
? Provide API name: NextBlog
? Choose the default authorization type for the API: API key
? Enter a description for the API key: public
? After how many days from now the API key should expire (1-365): 365 (or your preferred expiration)
? Do you want to configure advanced settings for the GraphQL API: No
? Do you have an annotated GraphQL schema? N 
? Choose a schema template: Single object with fields
? Do you want to edit the schema now? (Y/n) Y
```

The CLI should open this GraphQL schema in vscode

__amplify/backend/api/NextBlog/schema.graphql__

Update the schema to the following:   

```graphql
type Post @model {
  id: ID!
  title: String!
  content: String!
}
```

After saving the schema, go back to the CLI and press enter.

### Deploying the API

To deploy the API, run the push command:

```
$ amplify push

? Are you sure you want to continue? Y

# You will be walked through the following questions for GraphQL code generation
? Do you want to generate code for your newly created GraphQL API? Y
? Choose the code generation language target: javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions: ./graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions? Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested]: 2
```

Now the API is live and you can start interacting with it!

### Testing the API

To test it out we can use the GraphiQL editor in the AppSync dashboard. To open the AppSync dashboard, run the following command:

```sh
$ amplify console api

> Choose GraphQL
```

In the AppSync dashboard, click on __Queries__ to open the GraphiQL editor. In the editor, create a new post with the following mutation:

```graphql
mutation createPost {
  createPost(input: {
    title: "My First Post"
    content: "Aws world"
  }) {
    id
    title
    content
  }
}
```

Then, query for the posts:

```graphql
query ListPosts {
  ListPosts {
    items {
      id
      title
      content
    }
  }
}
```

### Configuring the Next app

Now, the API is created & we can test it out in our application

The first thing we need to do is to configure our Next.js app to be aware of our Amplify project. We can do this by referencing the auto-generated `aws-exports.js` file that was created by the CLI.

Create a new file called __configureAmplify.js__ in the root of the project and add the following code:


```js
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
```

Open __pages/\_app.js__ and import the Amplify configuration below the last import:

```js
import '../configureAmplify'
```

Now, our app is ready to start using our AWS services.

## Development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# Aws_graphql
