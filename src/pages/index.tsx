import Home, { HomeTemplateProps } from 'templates/Home';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { makeBannersMock } from 'components/BannerSlider/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: makeBannersMock({ total: 3 }),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingGames: gamesMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeGamesHighlight: highlightMock,
    },
  };
}
