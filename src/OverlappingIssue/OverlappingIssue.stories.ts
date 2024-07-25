import type { Meta, StoryObj } from "@storybook/react";

import { expect, fn, within, userEvent } from "@storybook/test";

import { OverlappingIssue } from "./OverlappingIssue";

const meta: Meta<typeof OverlappingIssue> = {
  component: OverlappingIssue,
  args: {
    onClick: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof OverlappingIssue>;

export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Click" }));
    await expect(canvas.getByTestId("count")).toHaveTextContent("1");
  },
};

export const PlaywrightTest: Story = {};
