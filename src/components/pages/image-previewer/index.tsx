import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

type Props = {
  items: {
    src: string,
    altText: string,
    caption: string,
  }[],
};

const ImagePreviewer = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => setAnimating(true);

  const onExited = () => setAnimating(false);

  const next = () => {
    if (!animating) {
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  };

  const previous = () => {
    if (!animating) {
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  };

  const goToIndex = (newIndex: number) => {
    if (!animating) {
      setActiveIndex(newIndex);
    }
  };

  const slides = items.map(item => (
    <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
      <img src={item.src} alt={item.altText} />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

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
