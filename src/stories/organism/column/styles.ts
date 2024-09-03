import styled from "styled-components";
import { CONST } from "../../../utils/constants";

export const ColumnStyled = styled.div<{ $isDragOver: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${CONST.COLUMN_WIDTH}px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: ${(p) =>
    p.$isDragOver
      ? "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};

  .colTitle {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }
  .tickets {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  .addTicketBtn {
    margin-top: 10px;
    width: ${CONST.COLUMN_WIDTH - 20}px;
  }
`;
