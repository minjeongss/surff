import Skeleton from "../components/Skeleton/Skeleton";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    commentSubtitle: "Skeleton UI가 필요한 요소에 이 컴포넌트를 사용합니다.",
  },
  args: {
    width: 60,
    height: 60,
  },
  argTypes: {
    width: {
      control: {
        type: "number",
      },
      description: "Skeleton의 너비",
    },
    height: {
      control: {
        type: "number",
      },
      description: "Skeleton의 높이",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {},
};

export const Text: Story = {
  args: {
    width: 202,
    height: 21,
  },
};
