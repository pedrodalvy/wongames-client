import Banner, { BannerProps } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '#',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => <Banner {...args} />;
