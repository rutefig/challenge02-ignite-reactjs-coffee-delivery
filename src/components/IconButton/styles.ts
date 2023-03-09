import styled from 'styled-components'

export const IconButtonContainer = styled.button`
    width: 2.375rem;
    height: 2.375rem;

    border: none;
    border-radius: 6px;
    cursor: pointer;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
`