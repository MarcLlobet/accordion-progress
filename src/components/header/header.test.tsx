import { render, screen } from "@testing-library/react"
import { expect, test } from 'vitest'
import { Header, type HeaderProps } from "."

const renderComponent = (props?: HeaderProps) => {
  return render(<Header {...props ?? {}} />)
}

test('renders header by default', () => {
  renderComponent()

  const element = screen.getByRole('presentation')
  expect(element).toBeVisible()
})

test('renders main element by default', () => {
  const {container} = renderComponent()

  const paragraph = container.querySelector('header')
  expect(paragraph).toBeVisible()
})

test('renders children', () => {
  renderComponent({children: 'Mock text'})

  const element = screen.getByText('Mock text')
  expect(element).toBeVisible()
})