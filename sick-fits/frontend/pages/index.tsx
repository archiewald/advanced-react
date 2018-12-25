import React from "react";

import Link from "next/link";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Next.js</h1>
        <Link href="/sell ">
          <a>Sell!</a>
        </Link>
      </div>
    );
  }
}

export default Home;
