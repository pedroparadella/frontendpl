import styled, { css } from 'styled-components';

interface FilenameProps {
  filename: string;
}

export const FileInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--grey-strong);
  border-radius: 0.5rem;
  height: 3.75rem;
  font-size: 1.125rem;
  font-weight: 200;
  padding: 0 0.4rem 0 1.5625rem;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Filename = styled.p<FilenameProps>`
  ${props =>
    props.filename === '' &&
    css`
      color: var(--grey-strong);
    `}
`;
