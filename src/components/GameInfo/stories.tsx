import { Story, Meta } from '@storybook/react';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import { GameInfoMock } from 'components/GameInfo/mock';

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: GameInfoMock,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '104rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
);
