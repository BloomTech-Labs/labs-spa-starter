# Form Component

- The following is an industry standard around organizing and piecing together your components.

### PropTypes

- For more information on PropTypes you can checkout [the React documentation on Prop Types here](https://reactjs.org/docs/typechecking-with-proptypes.html)
- We believe in adding as many forms of data checking as possible in your application. Starting with [Static Analysis Testing](https://kentcdodds.com/blog/eliminate-an-entire-category-of-bugs-with-a-few-simple-tools). The next step would be to type check your data. There are fully baked [super-sets of JavaScript](https://www.typescriptlang.org/) that exist and are commonly seen in use in industry.
- We use `PropTypes` in Lambda School Labs as a way to achieve yet another level of testing to your components. Ensuring that the data your passing around throughout your app is type checked is yet another rung on the testing for confidence ladder.

### Component Structure Diagram

- The following is a breakdown of how this component all fits together.
- Each piece of the UI is broken down into testable, reusable, components.
- All component logic is handled in the 'Container Component'.
- Everything gets imported into and exported out of `index.js`
  - This allows you to import and use this feature anywhere in the app.

```text
index.js -->
  imports and exports FormContainer for use throughout your application.

FormContainer.js -->
  A Container that is responsible for the feature's state and UI Elements built out by FormButton.js and FormInput.js. Most of your formal logic for handling this component's state will exist right here in this container.

  FormButton.js -->
    A simple button component. Notice the PropTypes for this component are set up in such a way that allow you to ensure that certain data makes its way into this component.

  FormInput.js -->
    A simple button component. Notice the PropTypes for this component are set up in such a way that allow you to ensure that certain data makes its way into this component.

```
