/**
* @vitest-environment jsdom
*/

import { describe, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FooterComponent from './FooterComponent'



describe('Footer', () => {
    test('should render the correct span elements', () => {
        render(<FooterComponent />)
        
        expect(screen.getByText('gigger')).toBeInTheDocument()
        expect(screen.getByText('by Carlos Díaz.')).toBeInTheDocument()
        expect(screen.getByText('All rights reserved')).toBeInTheDocument()
    })
})

describe('Footer', () => {
    test('should render the anchor elements', () => {
        render(<FooterComponent />)
    
        expect(screen.getByAltText(/github/)).toBeInTheDocument()
    })
})