import React, {useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";

function App() {
    const [postsJS, setPostsJS] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript2', body: 'Description'},
        {id: 3, title: 'Javascript3', body: 'Description'}
    ])

    const [postsPython, setPostsPython] = useState([
        {id: 1, title: 'Python1', body: 'Description'},
        {id: 2, title: 'Python2', body: 'Description'},
        {id: 3, title: 'Python3', body: 'Description'}
    ])
    return (
        <div className="App">
            <PostList posts={postsJS} title="Javascript posts"/>
            <PostList posts={postsPython} title="Python posts"/>
        </div>
    );
}

export default App;
