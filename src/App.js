import React, {useRef, useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript2', body: 'Description'},
        {id: 3, title: 'Javascript3', body: 'Description'}
    ])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div className="App">
            <from>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </from>
            <PostList posts={posts} title="Javascript posts"/>
        </div>
    );
}

export default App;
