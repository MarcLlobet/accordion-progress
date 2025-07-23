import styled from "styled-components"
import type { ReactNode } from "react"

const HeaderComponent = styled.header`
  padding: 32px 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`

export type HeaderProps = {children?: ReactNode}

export const Header = ({children = null}: HeaderProps) => {
  return (
    <HeaderComponent role="presentation">
      {children}
    </HeaderComponent>
  )
}