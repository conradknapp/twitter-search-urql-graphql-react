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
    const userValues = Object.entries(user);
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

        <ul>{userValues.map((el, i) => <li key={i}>{String(el)}</li>)}</ul>

        <img
          style={{ height: "200px" }}
          src={user.profile_image_url}
          alt="Redundant alt attribute"
        />
      </div>
    );
  }
}

export default Profile;
