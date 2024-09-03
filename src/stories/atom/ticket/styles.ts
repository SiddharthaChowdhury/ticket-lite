import styled from "styled-components";

export const TicketStyled = styled.div`
  user-select: none;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;

  &:hover {
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
