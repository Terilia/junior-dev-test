## How to run dev && build

To start the app in dev environment:
```
cd tr-countdown
npm update
npm start
```


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

To build the app for production:
```
cd tr-countdown
npm update
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

You may serve it with a static server:

  serve -s build

## Note

Due to a [React Bug](https://github.com/facebook/create-react-app/issues/6334) at the time of finalizing it might be required to install an older version of terser via:
```
npm install terser@3.14.1 --save-dev
```
