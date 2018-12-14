import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentsList from "components/CommentsList";

describe("App component", () => {
  const component = shallow(<App />);

  it("should contain CommentBox component", () => {
    expect(component.find(CommentBox).length).toEqual(1);
  });

  it("should contain CommentsList component", () => {
    expect(component.find(CommentsList).length).toEqual(1);
  });
});
