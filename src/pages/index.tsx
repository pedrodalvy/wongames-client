import Home, { HomeTemplateProps } from 'templates/Home';
import { makeBannersMock } from 'components/BannerSlider/mock';
import { makeGameCardsMock } from 'components/GameCardSlider/mock';
import { makeHighlightMock } from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: makeBannersMock({ total: 3 }),
      newGames: makeGameCardsMock({ total: 10 }),
      mostPopularHighlight: makeHighlightMock({ withFloatImage: true }),
      mostPopularGames: makeGameCardsMock({ total: 10 }),
      upcommingHighlight: makeHighlightMock({
        withFloatImage: true,
        alignment: 'left',
      }),
      upcommingGames: makeGameCardsMock({ total: 10 }),
      upcommingMoreGames: makeGameCardsMock({ total: 10 }),
      freeGames: makeGameCardsMock({ total: 10 }),
      freeGamesHighlight: makeHighlightMock({ withFloatImage: false }),
    },
  };
}
