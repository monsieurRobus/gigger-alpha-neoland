import { describe, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page404 from './Page404'

describe('Page404', () => {
    test('should render the correct elements', () => {
        render(<Page404 />)
        
        expect(screen.getByText('404')).toBeInTheDocument()
    })
})