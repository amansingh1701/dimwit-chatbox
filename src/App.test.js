import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('render the title of an application', () => {
    render(<App />)

    const titleEl = screen.getByText(/Counter Application/)
    expect(titleEl).toBeInTheDocument()
  })

  test('render the Powered By text', () => {
    render(<App />)

    const poweredByEl = screen.queryByText(/powered by/i)
    expect(poweredByEl).toBeInTheDocument()
  })

  test('render the Powered By link', () => {
    render(<App />)

    const poweredByLink = screen.getByTestId('powered-by')
    expect(poweredByLink).toHaveAttribute('title')
    expect(poweredByLink).toHaveAttribute(
      'href',
      'https://www.cluemediator.com/'
    )
  })

  test('render initial counter text', () => {
    render(<App />)

    const counterText = screen.getByTestId('counter-text')
    expect(counterText).toHaveClass('counter')
    expect(counterText).toHaveTextContent('0')
  })

  test('render buttons', () => {
    render(<App />)

    const btnIncrement = screen.getByTestId('btn-increment')
    const btnDecrement = screen.getByTestId('btn-decrement')

    expect(btnIncrement).toBeInTheDocument()
    expect(btnIncrement.textContent).toEqual('Increment')

    expect(btnDecrement).toBeInTheDocument()
    expect(btnDecrement.textContent).toEqual('Decrement')
  })
})
