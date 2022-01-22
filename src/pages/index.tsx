import Home, { HomeTemplateProps } from 'templates/Home';
import highlightMock from 'components/Highlight/mock';
import { makeBannersMock } from 'components/BannerSlider/mock';
import { makeGameCardsMock } from 'components/GameCardSlider/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: makeBannersMock({ total: 3 }),
      newGames: makeGameCardsMock({ total: 10 }),
      mostPopularHighlight: highlightMock,
      mostPopularGames: makeGameCardsMock({ total: 10 }),
      upcommingHighlight: highlightMock,
      upcommingGames: makeGameCardsMock({ total: 10 }),
      upcommingMoreGames: makeGameCardsMock({ total: 10 }),
      freeGames: makeGameCardsMock({ total: 10 }),
      freeGamesHighlight: highlightMock,
    },
  };
}
