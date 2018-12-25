import React from "react";

import Link from "next/link";

class Sell extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Sell Page</h1>
        <Link href="/">
          <a>Home!</a>
        </Link>
      </div>
    );
  }
}

export default Sell;
