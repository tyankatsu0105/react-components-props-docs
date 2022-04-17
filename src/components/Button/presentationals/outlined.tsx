import * as React from "react";

import styled from "styled-components";

import { variant } from "../facade";

type Props = React.ComponentPropsWithRef<"button"> & {
  variant: typeof variant["outlined"];
};

const Outlined: React.FC<Props> = (props) => {
  const { variant, children, ...restProps } = props;

  return <Element {...restProps}>{children}</Element>;
};

export const Component = React.memo(Outlined);

const Element = styled.button`
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid green;
  color: green;

  cursor: pointer;
`;
