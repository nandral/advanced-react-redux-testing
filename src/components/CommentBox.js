import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 10rem;
  height: 2rem;
  background-color:#e67e22;
  color:#eee
  font-size:1rem;
  outline:none;
  cursor: pointer;
  border-radius: 5px;
  margin: 1rem;
  &&:hover {
    background-color:#d35400;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  max-width: 20rem;
  align-items: center;
`;

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // TODO call action creator to SAVE_COMMENT

    this.setState({
      comment: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          <h3>Add a Comment</h3>
          <textarea
            cols="40"
            rows="5"
            placeholder="Type your comment here ..."
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <div>
            <Button>Submit</Button>
          </div>
        </Grid>
      </form>
    );
  }
}

export default CommentBox;
