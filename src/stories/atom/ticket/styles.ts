import styled from "styled-components";
import { Transform } from "@dnd-kit/utilities";

export const TicketStyled = styled.div<{ $transform: Transform | null }>`
  user-select: none;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transform: ${(p) =>
    p.$transform
      ? `translate3d(${p.$transform.x}px, ${p.$transform.y}px, 0)`
      : undefined};

  &:hover {
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
