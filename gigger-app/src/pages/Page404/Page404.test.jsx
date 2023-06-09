import { describe, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page404 from './Page404'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

describe('Page404', () => {
    test('should render the correct elements', () => {
        render(<BrowserRouter><MemoryRouter initialEntries={["/dashboard/lalala"]}><Page404 /></MemoryRouter></BrowserRouter>)
        
        expect(screen.getByText('404')).toBeInTheDocument()
    })
})
