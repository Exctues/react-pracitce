import React from 'react';
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post-btns">
                    <button onClick={() => navigate(`posts/${props.post.id}`)}>
                       Открыть
                    </button>
                    <button onClick={() => props.remove(props.post)}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
