import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../api/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(id)
        fetchComments(id)
    }, [])

    return (
        <div>
            <h2>You have opened page with the post with ID = {id}</h2>
            {isLoading || post == null
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>}
            <h2>
                Комментарии
            </h2>

            {isComLoading || comments == null
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div style = {{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>}
        </div>
    )
};

export default PostIdPage;
