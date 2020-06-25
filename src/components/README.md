# Component Tree Architecture

- For components, we have established a pattern for you to use throughout your application. Each directory should consist of a single feature. That **does NOT** mean that you need to have a single file per component. You can have as many files as you'd like in a component directory. You should also feel at liberty to include multiple components in a file where you see fit. **It DOES** mean that you should organize all the pieces of your component into an `index.js` file and export out that single component to be used throughout your app.

- Your `components` should focus on solving a singular problem/performing some operation in order to allow users to interact with the data your application serves up.
- `Container` components are where you craft out your feature by combining some logic/UI/components together.
  - It's a good idea to use `common` (reusable) components inside your containers.
- Be sure to import/export your container component out of the `index.js` file so that you can easily import it throughout your application.

![example list component](https://tk-assets.lambdaschool.com/2f650085-d27c-47b6-a8ea-a5c4ee53d039_ScreenShot2020-06-25at8.18.47AM.png)

- A good example of what we're trying to achieve here can be found in the `ExampleListComponent` directory.
- The `RenderExampleList.js` file is used to operate on the iterator (.map) function and focuses on one singular issue, displaying data. (Notice the use of `proptypes`).
- The `ExampleListContainer.js` pieces everything together nicely and takes care of the formal logic.
- `index.js` simply imports and exports the component for easy use later.
