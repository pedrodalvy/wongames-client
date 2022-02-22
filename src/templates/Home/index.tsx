import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';
import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];

  newGames: GameCardProps[];

  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];

  upcommingHighlight: HighlightProps;
  upcommingGames: GameCardProps[];
  upcommingMoreGames: GameCardProps[];

  freeGames: GameCardProps[];
  freeGamesHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingHighlight,
  upcommingGames,
  upcommingMoreGames,
  freeGames,
  freeGamesHighlight,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <S.SectionMostPopular>
      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Showcase title="Upcomming" games={upcommingGames} />
      <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Showcase
        title="Free games"
        highlight={freeGamesHighlight}
        games={freeGames}
      />
    </S.SectionFreeGames>
  </Base>
);

export default Home;
