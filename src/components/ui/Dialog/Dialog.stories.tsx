import type { Meta, StoryObj } from "@storybook/react";

import { Dialog, DialogProps } from "./Dialog";

const render = (args: DialogProps) => <Dialog {...args} />;

export default {
  title: "Components/Dialog",
  component: Dialog,
  render,
  args: {
    isOpen: true,
  },
  argTypes: {},
} as Meta<typeof Dialog>;
type ComponentStory = StoryObj<typeof Dialog>;

export const Default: ComponentStory = {
  args: {
    children: "Hello world",
  },
};

export const WithFocusTrap: ComponentStory = {
  args: {
    children: (
      <>
        <form action="#" className="grid gap-2 p-5">
          <label className="grid gap-1">
            email
            <input type="text" name="email" />
          </label>
          <label className="grid gap-1">
            password
            <input type="password" name="password" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    ),
  },
};

export const VeryLong: ComponentStory = {
  args: {
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vulputate tincidunt rhoncus. Ut ultrices luctus dictum. Quisque non
          auctor est. Cras vitae dui placerat nunc placerat auctor eu eget erat.
          Praesent consequat erat eu odio convallis elementum. Integer posuere
          viverra leo, non aliquet tortor. Donec sed turpis quam. Maecenas ut
          eros et sapien placerat maximus. Suspendisse facilisis felis massa, eu
          faucibus felis auctor eu.
        </p>

        <p>
          Duis justo mauris, vulputate at hendrerit id, fringilla a tellus.
          Donec bibendum risus consequat sem lacinia luctus. Fusce vitae
          interdum leo. Integer accumsan tortor eget orci luctus euismod. Nullam
          in ipsum dictum, laoreet massa at, faucibus velit. Etiam eu porttitor
          mauris. Morbi cursus nec purus sit amet pretium. Curabitur ac nisi at
          turpis volutpat ultricies. Sed a imperdiet velit. Nulla ac eros vitae
          turpis ultrices molestie. Proin pretium lectus fermentum porttitor
          gravida. Sed pulvinar, lorem et viverra volutpat, massa lacus dictum
          nibh, eget tristique mi nisl non turpis. Fusce placerat lorem ut quam
          pellentesque, quis mollis velit euismod. Nulla non aliquet diam.
          Aliquam nec dolor leo.
        </p>

        <p>
          Ut mollis et ipsum id rhoncus. Aliquam ut tristique justo. Aliquam
          lacinia luctus posuere. Nulla pharetra rhoncus risus vel dictum. Duis
          bibendum sagittis neque sit amet cursus. Pellentesque et faucibus sem.
          Integer vehicula quam sed mi molestie iaculis. Fusce eget mauris
          maximus, sollicitudin odio sit amet, molestie felis. Vivamus congue
          finibus maximus. Curabitur sodales, justo quis dictum sollicitudin,
          lorem leo cursus est, et pretium justo nisl vitae nisi. Aliquam ut
          facilisis quam. Vestibulum ornare dolor nec dignissim iaculis.
        </p>

        <p>
          Donec accumsan orci eget velit aliquam ultricies. Pellentesque dictum
          hendrerit diam. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Vivamus nunc turpis, lobortis
          aliquam ultricies congue, tempor eget libero. Aliquam sed massa ac
          massa maximus tempor at ut neque. Aenean bibendum ligula sed blandit
          rutrum. Etiam convallis neque et urna dapibus elementum. Mauris non
          massa vitae justo malesuada rhoncus.
        </p>

        <p>
          Vestibulum a arcu tellus. Mauris ac ipsum id purus commodo facilisis.
          Mauris efficitur, massa vitae finibus molestie, dui lectus varius
          nisl, vulputate bibendum purus turpis eleifend urna. Duis in erat
          ligula. Nullam eget euismod nunc. Donec quis turpis eget magna tempus
          vulputate in id dui. Nulla augue dolor, gravida non dapibus eget,
          aliquet eget eros. Phasellus blandit augue nisi, ac bibendum sem
          bibendum nec. Donec lacinia arcu lectus, cursus faucibus lectus
          ultricies non. Cras nec venenatis sapien.
        </p>
      </>
    ),
  },
};
