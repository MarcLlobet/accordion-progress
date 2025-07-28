import styled from "styled-components";
import type { ReactNode } from "react";

const PageComponent = styled.main`
  width: calc(100% - 45px * 2);
  max-width: 820px;
  margin: auto;
  padding: 16px;
  background: var(--innerBackground);
  border: 1px solid var(--border);
  border-radius: 8px;
`;

export type PageProps = { children?: ReactNode };

export const Page = ({ children = null }: PageProps) => {
  return <PageComponent>{children}</PageComponent>;
};
