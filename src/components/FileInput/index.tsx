import { SyntheticEvent, useRef, useState } from 'react';
import { Button } from '../Button';
import * as S from './styled';

export const FileInput = () => {
  const inputFile = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState('');

  const handleInputChange = (e: SyntheticEvent) => {
    const { files } = e.target as HTMLInputElement;
    files && setFile(files[0].name);
  };

  const handleClick = () => {
    inputFile.current?.click();
  };
  return (
    <S.FileInputWrapper>
      <S.HiddenInput type="file" ref={inputFile} onChange={handleInputChange} />
      <S.Filename filename={file}>{file === '' ? 'Nenhum arquivo selecionado' : file}</S.Filename>
      <Button buttonText="Escolher arquivo" onClick={handleClick} customStyle="UPLOAD" />
    </S.FileInputWrapper>
  );
};
