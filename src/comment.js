import React, { useState } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import human from "./people.jpg";

function SingleComment ({ id, author, metadata, text, handleDeleteComment }) {
    return (
        <Comment>
            <Comment.Avatar src={human} />
            <Comment.Content>
                <Comment.Author as='a'>{author}</Comment.Author>
                <Comment.Metadata>
                    <div>{metadata}</div>
                </Comment.Metadata>
                <Comment.Text>{text}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    <Comment.Action onClick={() => handleDeleteComment(id)}>Delete</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    );
}

function Comments() {
    const [inputContent, setInputContent] = useState("");
    const [commentsList, setCommentsList] = useState([]);
    const [commentIdCounter, setCommentIdCounter] = useState(0);

    const handleAddComment = () => {
        const newComment = { id: commentIdCounter, text: inputContent };
        setCommentsList(prevCommentsList => [...prevCommentsList, newComment]);
        setCommentIdCounter(commentIdCounter + 1);
        setInputContent("");
    };

    const handleDeleteComment = (id) => {
        setCommentsList(prevCommentsList => prevCommentsList.filter(comment => comment.id !== id));
    };

    return (
        <Comment.Group style={{ marginLeft: "520px" }}>
            <Header as='h3' dividing>
                Comments
            </Header>

            {commentsList.map((comment) => (
                <SingleComment
                    key={comment.id}
                    id={comment.id}
                    author="Matt"
                    metadata="Today at 5:42PM"
                    text={comment.text}
                    handleDeleteComment={handleDeleteComment}
                />
            ))}

            <Form reply>
                <Form.TextArea
                    value={inputContent}
                    placeholder="댓글을 입력하세요!"
                    onChange={(e) => setInputContent(e.target.value)}
                />
                <Button
                    content='Add Reply'
                    labelPosition='left'
                    icon='edit'
                    primary
                    onClick={handleAddComment}
                />
            </Form>
            <br />
        </Comment.Group>
    );
}

export default Comments;