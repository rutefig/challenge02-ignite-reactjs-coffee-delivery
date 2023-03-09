import styled from 'styled-components'

export const ButtonContainer = styled.button`
    width: 8.25rem;
    height: 2.875rem;

    border: none;
    border-radius: 6px;
    cursor: pointer;

    background: ${(props) => props.theme['yellow']};

    color: ${(props) => props.theme['white']};
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
`