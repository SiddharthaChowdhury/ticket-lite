import styled from "styled-components";
import { CONST } from "../../../utils/constants";

export const Button = styled.button<{ $isDisabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${CONST.INPUT_HEIGHT}px;
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: ${(p) =>
    p.$isDisabled
      ? "none"
      : `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`};

  &:hover {
    cursor: pointer;
    box-shadow: ${(p) =>
      p.$isDisabled
        ? "none"
        : `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`};
  }
`;
