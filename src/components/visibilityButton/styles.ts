import styled from "styled-components";

export const VisibilityButtonElement = styled.span`
  color: #999;
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
`;

export const VisibilityIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  padding: 6px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
