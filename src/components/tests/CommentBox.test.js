import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

describe("Render CommentBox", () => {
  let component;
  beforeEach(() => {
    component = mount(<CommentBox />);
  });

  afterEach(() => {
    component.unmount();
  });

  it("textarea", () => {
    expect(component.find("textarea").length).toEqual(1);
  });

  it("button", () => {
    expect(component.find("button").length).toEqual(1);
  });
});

describe("CommentBox Events", () => {
  let component;

  beforeEach(() => {
    component = mount(<CommentBox />);
    component.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    component.update();
  });

  afterEach(() => {
    component.unmount();
  });

  it("has textarea that users can type in", () => {
    expect(component.find("textarea").prop("value")).toEqual("new comment");
  });

  it("form submission should clear the textarea", () => {
    component.find("form").simulate("submit");
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
