import * as S from './styled';
import { ReactComponent as SearchIcon } from '../../../../assets/search-icon.svg';
import { SvgIcon } from '../../../../components/SvgContainer';

export const SearchBar = () => {
  return (
    <>
      <S.SearchBackground>
        <S.SearchInputWrapper>
          <S.SearchInput placeholder="Digite aqui sua busca..." />
          <S.SearchIcon>
            <SvgIcon Icon={SearchIcon} />
          </S.SearchIcon>
        </S.SearchInputWrapper>
      </S.SearchBackground>
    </>
  );
};
