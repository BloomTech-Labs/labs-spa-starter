# /pages

- This is the directory where all of your page-related components will live. We can classify a page as any container that is passed to a `Route` within our main app `index.js` file:

```js
// index.js

<Route path="/example-page" component={ExamplePage} />
```

- In the above example, we would classify the `ExamplePage` component as a page and create an `/ExamplePage` folder for it to live in.

- The basic structure of a page is made up of 3 files: a `Container` component, a `Render` component, and an `index` file. `Container` components are where all of your stateful logic and API request code related to the page should live. We use the `Container` component to calculate the data that we want the `Render` component to show on our UI. `Render` components are pure components that _only_ receive props and return JSX elements to be rendered to our UI. Our `index` file is what we use to configure the name of our page's export.
