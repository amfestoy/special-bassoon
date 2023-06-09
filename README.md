# Spacemaker state management hjemmeoppgave

### To set up the project :woman_mechanic:

Install dependencies:
```sh 
npm i
```

Start app:
```sh
npm start
```

### Information about project
The main feature is in the folder solutionDesigner. Shared components are added to the share folder.

I know it has happend a lot with state management for React so I wanted to try a new library. I used https://docs.pmnd.rs/zustand/getting-started/introduction as it had a lot of traction on NPM and it was fun to try a new technology.

There is still stuff I would have added or fixed, so here is a list of a few things I have thought about. 
Happy to discuss this list in the interview:)
TODO:

- Add hover color to polygons.
- Same as above for selected color to polygons.
- Add mapbox token to environment variables. 
- Support union and intersect of 3 polygons
- Look at clever solutions for the state other than fixing an entire GEOJson.
- Fix test
- Fix that all types are added to dependencies and not only dev :upside_down_face:

### Used Create React App to get a foundation for a react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Runs tests.
I used chatGPT to help me write tests. This is a new workflow I have started playing with after it was released. I see that these don't work because statistics component takes the values from the state and not as prop. This I need to fix, but it was late so I stopped at this point. Happy to discuss in interview:)

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
