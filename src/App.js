import React, {useMemo, useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'b', body: 'Smth'},
        {id: 2, title: 'c', body: 'n'},
        {id: 3, title: 'a', body: 'blabla'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log("getSortedPosts invoked")
        if (filter.sort)
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const create = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (postToRemove) => {
        setPosts(posts.filter(p => p.id !== postToRemove.id))
    }

    return (
        <div className="App">
            <PostForm create={create}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Javascript posts"/>
                :
                <h1 style={{textAlign: "center"}}>
                    Посты не были найдены
                </h1>
            }
        </div>
    );
}

export default App;
