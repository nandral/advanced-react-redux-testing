import React from "react";
import CommentBox from "components/CommentBox";
import CommentsList from "components/CommentsList";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  max-width: 25rem;
  align-items: center;
`;

const App = () => (
  <Grid>
    <CommentBox />
    <CommentsList />
  </Grid>
);

export default App;
