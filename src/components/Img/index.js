import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    };
  }
  handleLoad = () => {
    this.setState({
      imageLoaded: true
    });
  };

  render() {
    const { imageUrl, width, placeholder } = this.props;
    if(!imageUrl) {
      return <img src={placeholder} />;
    }
    return (
      <div className="image-wrapper" style={{ width, paddingTop: this.state.imageLoaded ? `${this.image.height}px` : width }}>
        <img
          src={placeholder}
          className={`placeholder ${this.state.imageLoaded && 'hidden'}`}
        />
        <img
          src={ imageUrl }
          onLoad={this.handleLoad}
          className={`image ${this.state.imageLoaded && 'loaded'}`}
          ref={el => this.image = el}
        />
      </div>
    );
  }
}

Img.propTypes = {
  imageUrl: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string
};

Img.defaultProps = {
  imageUrl: '',
  width: '100%',
  placeholder: ''
};

export default Img;