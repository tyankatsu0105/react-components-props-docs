import * as React from "react";

import styled from "styled-components";

import { variant } from "../facade";

type Props = React.ComponentPropsWithRef<"button"> & {
  variant: typeof variant["text"];
};

const Text: React.FC<Props> = (props) => {
  const { variant, children, ...restProps } = props;

  return <Element {...restProps}>{children}</Element>;
};

export const Component = React.memo(Text);

const Element = styled.button`
  padding: 4px 12px;
  border-radius: 6px;
  color: green;

  cursor: pointer;
`;
