import { render, screen } from "@testing-library/react"
import { expect, test } from 'vitest'
import { Text, type TextProps } from "."

const renderComponent = (props?: TextProps) => {
  return render(<Text {...props ?? {}} />)
}

test('renders paragraph by default', () => {
  renderComponent()

  const element = screen.getByRole('paragraph')
  expect(element).toBeVisible()
})

test('renders paragraph element by default', () => {
  const {container} = renderComponent()

  const paragraph = container.querySelector('p')
  expect(paragraph).toBeVisible()
})

test('renders text', () => {
  renderComponent({children: 'Mock text'})

  const element = screen.getByText('Mock text')
  expect(element).toBeVisible()
})

test('renders custom heading by prop', () => {
  renderComponent({as: 'h1'})

  const element = screen.getByRole('heading')
  expect(element).toBeVisible()
})

test('renders custom element by prop', () => {
  const {container} = renderComponent({as: 'h6'})

  const h6 = container.querySelector('h6')
  expect(h6).toBeVisible()
})