import { Story, Meta } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from 'components/BannerSlider';
import { makeBannersMock } from 'components/BannerSlider/mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items: makeBannersMock({ total: 3 }) },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);
