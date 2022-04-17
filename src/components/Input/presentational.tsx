import * as React from "react";

import styled, { css } from "styled-components";

type Props = React.ComponentPropsWithRef<"div"> & {
  /**
   * errorが発生したかどうか
   */
  isError?: boolean;

  /**
   * isError = trueの場合に表示するエラーメッセージ
   */
  errorMessage?: string;
  /**
   * input elementへ渡すprops
   */
  inputProps?: React.ComponentPropsWithRef<"input">;
};

const Presentational = (props: Props) => {
  const { inputProps, isError, errorMessage, ...restProps } = props;

  return (
    <Wrap {...restProps}>
      <Element {...inputProps} isError={isError} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

const Wrap = styled.div``;

type ElementProps = Props["inputProps"] & {
  isError: Props["isError"];
};
const Element = styled.input<ElementProps>`
  padding: 4px 12px;
  border: 1px solid #333;
  border-radius: 6px;

  ${(props) =>
    props.isError &&
    css`
      border-color: red;
    `}
`;

const ErrorMessage = styled.p`
  color: red;
`;
