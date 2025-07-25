import styled from "styled-components";

export const VisibilityButtonElement = styled.button`
  color: #999;
  display: flex;
  flex-direction: row;
  gap: 8px;
  appearance: none;
  background: transparent;
  border: 0;
  font-size: 16px;
  line-height: 24px;
`;

export const VisibilityIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  padding: 6px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
