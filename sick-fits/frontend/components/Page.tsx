import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Meta from "./Meta";

const MyButton = styled.button<{ huge?: boolean }>`
  background: red;
  font-size: ${props => (props.huge ? "100px" : "50px")};
  span {
    font-size: 100px;
  }
`;

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Click Me
          <span>💩</span>
        </MyButton>
        <MyButton huge>
          Click Me
          <span>💩</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
