import { HighlightProps } from 'components/Highlight';

type MockProps = {
  withFloatImage?: boolean;
  alignment?: 'left' | 'right';
};

export const makeHighlightMock = ({
  withFloatImage = false,
  alignment = 'right',
}: MockProps): HighlightProps => {
  return {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/link',
    floatImage: withFloatImage ? '/img/red-dead-float.png' : '',
    alignment,
  };
};
