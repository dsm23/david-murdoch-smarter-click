import * as React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

type Props = {
  items: {
    src: string,
    altText: string,
    caption?: string,
  }[],
};

const ImagePreviewer = ({ items }: Props) => (
  <Carousel>
    {items.map(({ src, altText }) => (
      <div key={src}>
        <img src={src} alt={altText} />
      </div>
    ))}
  </Carousel>
);

ImagePreviewer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }),
  ),
};

export { ImagePreviewer };
export default ImagePreviewer;
