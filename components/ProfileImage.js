import React, { Component } from "react";
import { string, arrayOf, shape, func } from "prop-types";
import { Editmode, Chunk } from "editmode-react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  renderSource(source, i) {
    const { media, srcset } = source;
    return media ? (
      <source key={i} media={`(${media})`} srcSet={srcset.join(", ")} />
    ) : (
      <source key={i} srcSet={srcset.join(", ")} />
    );
  }

  setLoaded() {
    this.setState({ isLoaded: true });
  }

  render() {
    const { className } = this.props;
    return (
      <Editmode projectId="prj_TnN3cMjGrc4u">
        <picture className={className}>
          <Chunk identifier="cnk_7dc3b2df3bd0a8c9b117" />
        </picture>
      </Editmode>
    );
  }
}

Image.propTypes = {
  src: string.isRequired,
  alt: string,
  sources: arrayOf(
    shape({
      media: string,
      srcset: arrayOf(string).isRequired,
    })
  ),
  className: string,
  loader: func.isRequired,
};

Image.defaultProps = {
  alt: "",
  sources: { media: null },
  className: null,
};

export default Image;
