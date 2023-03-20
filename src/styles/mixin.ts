import { css } from "styled-components";

export const header = () => css`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  cursor: default;
`;

export const Input = () => css`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  width: 200px;
  margin: 15px;
  padding: 5px;
`;

export const Error = () => css`
  color: red;
  font-weight: bold;
  font-size: 13px;
  padding-top: 5px;
`;
