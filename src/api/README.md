## API

- We feel strongly that separating out your API calls into a separate directory really cleans up your application and reduces complexity in your work flow.
- **Rule of thumb** any time you make an HTTP Request, it should go in the `index.js` file in this directory.
- **Be sure to export** your logic out of the file and import it wherever you need to call that function throughout your application.
- You can also get clever if you'd like and build out some reusable functions for your CRUD operations.
