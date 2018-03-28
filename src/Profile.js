import React from "react";

class Profile extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { user } = this.props.data.twitter;
    let tweet;
    if (user) {
      [tweet] = user.tweets.map(({ text }) => text);
    }
    return (
      <div className="container">
        <h1>Explore Twitter Users</h1>
        <form
          className="Search__Form"
          onSubmit={event =>
            this.props.handleSearch(event, this.state.searchTerm)
          }
        >
          <input
            className="Search__Input"
            type="text"
            onChange={this.handleChange}
          />
          <button className="Search__Button">Search</button>
        </form>

        <ul className="Search__Results">
          {user
            ? Object.entries(user).map(([key, val], i) => (
                <li key={i}>
                  <span style={{ fontWeight: "bold" }}>{String(key)}</span>{" "}
                  {String(val)}
                </li>
              ))
            : "no user found"}
        </ul>

        <p>Most Recent Tweet</p>
        <ul className="Search__Results--Tweet">{user ? tweet : ""}</ul>
        <img
          style={{ height: "15em", marginTop: "1em" }}
          src={user ? user.profile_image_url : ""}
          alt={user ? user.name : ""}
        />
      </div>
    );
  }
}

export default Profile;
