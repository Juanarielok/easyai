import { render, screen } from '@testing-library/react'
import App from '../app/page'
import RootLayout from '../app/layout'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a heading', async () => {
    render(<RootLayout> 
      <App /> 
    </RootLayout>);
 
    const heading = screen.getByText('AI Easy');
 
    expect(heading).toBeInTheDocument()
  });
});