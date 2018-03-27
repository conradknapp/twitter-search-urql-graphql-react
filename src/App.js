import React from "react";
import "./App.css";

import { Connect, query } from "urql";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    keyword: "dassurma"
  };

  handleSearch = (event, keyword) => {
    event.preventDefault();
    this.setState({ keyword });
  };

  render() {
    return (
      <div className="App">
        <Connect
          query={query(myQuery, { identity: this.state.keyword })}
          children={({ loaded, data }) => {
            return loaded ? (
              <Profile data={data} handleSearch={this.handleSearch} />
            ) : (
              <div>loading</div>
            );
          }}
        />
      </div>
    );
  }
}

const myQuery = `
  query($identity: UserIdentity!) {
    twitter {
      user (identifier: name, identity: $identity) {
        created_at
        description
        screen_name
        name
        profile_image_url
        url
        tweets_count
        followers_count
        tweets(limit: 1) {
          text
        }
      }
    }
  }
`;

export default App;
