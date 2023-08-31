import { render, screen } from '@testing-library/react'
import App from '../app/page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a heading', async () => {
    render(<App />)
 
    const heading = screen.getByText('AI Easy');
 
    expect(heading).toBeInTheDocument()
  });
});