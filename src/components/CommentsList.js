import React from "react";

const comments = [
  "Best React course is Advanced Redux from Stephen",
  "React 16.7 has react hooks, awesome",
  "React 16.6 has lot of Suspense"
];

class CommentsList extends React.Component {
  render() {
    return (
      <div>
        <h4>Comments</h4>
        <ul>
          {comments.map(comment => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
