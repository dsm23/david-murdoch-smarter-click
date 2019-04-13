import * as React from 'react';
import { useReducer } from 'react';
import PropTypes from 'prop-types';
import Viewer from 'react-viewer';
import { Col, Row } from 'reactstrap';

import 'react-viewer/dist/index.css';

type State = {
  activeIndex: number | undefined,
  isVisible: boolean,
};

type Props = {
  items: {
    src: string,
    altText: string,
    caption?: string,
  }[],
  initialState: State,
};

type ActionType = {
  type: 'openPreviewer' | 'closePreviewer',
  newIndex?: number,
};

function reducer(state: State, action: ActionType): State {
  switch (action.type) {
    case 'openPreviewer':
      return { isVisible: true, activeIndex: action.newIndex };
    case 'closePreviewer':
      return { ...state, isVisible: false };
    default:
      throw new Error();
  }
}

const ImagePreviewer = ({ initialState, items }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isVisible, activeIndex } = state;

  return (
    <div>
      <Row>
        {items.map(({ src, altText }, index) => (
          <Col key={src}>
            <img
              src={src}
              className="img-thumbnail"
              style={{ cursor: 'pointer' }}
              alt={altText}
              onClick={() =>
                dispatch({
                  type: 'openPreviewer',
                  newIndex: index,
                })
              }
            />
          </Col>
        ))}
      </Row>
      <Viewer
        activeIndex={activeIndex}
        visible={isVisible}
        onClose={() =>
          dispatch({
            type: 'closePreviewer',
          })
        }
        images={items.map(({ src, altText }) => ({ src, alt: altText }))}
      />
    </div>
  );
};

ImagePreviewer.defaultProps = {
  initialState: {
    activeIndex: 0,
    isVisible: false,
  },
};

ImagePreviewer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }),
  ),
  initialState: PropTypes.shape({
    activeIndex: PropTypes.number,
    isVisible: PropTypes.bool,
  }),
};

export { ImagePreviewer };
export default ImagePreviewer;
