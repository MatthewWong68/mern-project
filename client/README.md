# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Adding new updatePost functionality:


App.js

import {useState} from 'react';

const [currentId, setCurrentId] = useState(null)
<Post setCurrentId={setCurrentId} />
<Form currentId={currentId} setCurrentId={setCurrentId} />


components/Form/Form.js

const Form = ({ currentId, setCurrentId }) => {


components/Posts/Posts.js

const Posts = ({ setCurrentId }) => {
<Post setCurrentId={setCurrentId} />


components/Posts/Post/Post.js

const Post = ({ post, setCurrentId }) => {
onCLick={() => setCurrentId(post._id)}


components/Form/Form.js

import { updatePost } from '../../actions/posts';

if (currentId) {
    dispatch(updatePost(currentId, postData));
} else {
    dispatch(createPost(postData));
}


/api/index.js

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);


/actions/posts.js

export const updatePost = (id, post) => async (dispatch) => {
try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data });
} catch (error) {
    console.log(error.message);
    }
}


/reducers/posts.js

case 'UPDATE':
    return posts.map((post) => post._id === action.payload._id ? action.payload : post);


/components/Form/Form.js

import { useSelector } from "react-redux";
import { useEffect } from 'react';

const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

useEffect(() => {
    if (post) setPostData(post)
}, [post])    



## Adding new functions:

server:

routes/posts.js

controllers/posts.js


client:

api/index.js

actions/posts.js

reducers/posts.js