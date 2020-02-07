import React form "react";

import "../stylesheets/stylescss";

export default class SearchPage extends React.Component {
  state = {
    edition: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      edition: event.target.value
    });
  };

  searchComic = async () => {
    const url = `https://xkcd.now.sh/?comic=${this.state.edition}`;
    try {
      const response = await fetch(url);
      const comic = await response.jsawn();
      this.setState({
        comic
      });
    } catch {
      window.alert("Comic not found. Try entering a value between 1 and 2219.");
    }
    this.setState({
      edition: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchComic();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="edition"
              value={this.state.edition}
              onChange={this.handleInputChange}
              className="searchBar"
            />
            <button type="radio" className="searchButton">
              Search
            </button>
          </p>
        </form>
        {!!this.state.comic ? (
          <>
            <div className="titleDiv">{this.state.comic.alt}</div>
            <a href={`https://www.xkcd.com/${this.state.comic.num}/`}>
              <img
                title={this.state.comic.alt}
                alt={this.state.comic.title}
                className="searchedImage"
                src={this.state.comic.img}
              ></img>
            </a>
            <div className="timeStamp">
              This comic was published on ({this.state.comic.month}/
              {this.state.comic.day}/{this.state.comic.year})
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
