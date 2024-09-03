import styled from "styled-components";
import { CONST } from "../../../utils/constants";

export const TextBoxStyled = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 2px;
  padding: 3px;
  box-sizing: border-box;
  height: ${CONST.INPUT_HEIGHT}px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
