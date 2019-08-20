import { userAgentContext } from './Context'
import { useContext } from 'react';

export function Adaptive({ wide = null, narrow = null }) {
    const { isMobile } = useContext(userAgentContext)
    return isMobile ? narrow : wide
}