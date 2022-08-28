import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { Button } from './Button'

describe('Button Component', () => {
	const mockedOnClick = jest.fn()

	it('should render correcty', () => {
		const component = renderer.create(<Button onClick={mockedOnClick}>Button</Button>)

		expect(component).toMatchSnapshot()
	})
	it('should be able to render Button and click', () => {
		render(<Button onClick={mockedOnClick}>Button</Button>)

		const button = screen.getByText(/button/i)

		fireEvent.click(button)

		expect(mockedOnClick).toBeCalled()
	})
})
