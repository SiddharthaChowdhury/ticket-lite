import styled from "styled-components";
import { CONST } from "../../../utils/constants";

export const ButtonFormStyled = styled.div`
  width: 100%;
  min-width: ${CONST.COLUMN_WIDTH - 20}px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .cta {
    display: inline-flex;
    gap: 5px;
  }
`;
