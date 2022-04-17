import * as React from "react";
import { Contained, Outlined, Text } from "./presentationals";

import { variant } from "./facade";

type Props =
  | React.ComponentProps<typeof Contained["Component"]>
  | React.ComponentProps<typeof Outlined["Component"]>
  | React.ComponentProps<typeof Text["Component"]>;

export const Button = (props: Props) => {
  switch (props.variant) {
    case variant.contained:
      return <Contained.Component {...props} />;
    case variant.outlined:
      return <Outlined.Component {...props} />;
    case variant.text:
      return <Text.Component {...props} />;
  }
};
