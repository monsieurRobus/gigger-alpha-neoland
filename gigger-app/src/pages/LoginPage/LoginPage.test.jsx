import { describe, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from './LoginPage'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'


describe('LoginPage', () => {
    test('should render the correct elements', () => {
        render(<BrowserRouter><MemoryRouter initialEntries={['/']}><LoginPage /></MemoryRouter></BrowserRouter>)
        
        expect(screen.getByText('Login')).toBeInTheDocument()
    })
})