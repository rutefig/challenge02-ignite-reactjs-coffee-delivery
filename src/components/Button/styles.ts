import styled from 'styled-components'

export const ButtonContainer = styled.button`
    width: 132px;
    height: 46px;

    border: none;
    border-radius: 6px;

    background: ${(props) => props.theme['yellow']};

    color: ${(props) => props.theme['white']};
    font-size: 0.875rem; //14px
    line-height: 160%;
    text-transform: uppercase;
`