import React from 'react'
import styled from 'styled-components'

const TitleHeader = ({children}) => {
    return (
        
            <h1>{children}</h1>            
        
    )
}

const Wrapper = styled(TitleHeader)`
    

`

export default TitleHeader