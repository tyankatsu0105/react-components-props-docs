import * as React from "react";

import styled from "styled-components";

import { variant } from "../facade";

type Props = React.ComponentPropsWithRef<"button"> & {
  /**
   * hogehoge
   */
  variant: typeof variant["contained"];
};

const Contained: React.FC<Props> = (props) => {
  const { variant, children, ...restProps } = props;

  return <Element {...restProps}>{children}</Element>;
};

export const Component = React.memo(Contained);

const Element = styled.button`
  padding: 4px 12px;
  border-radius: 6px;
  background-color: green;
  color: white;

  cursor: pointer;
`;
