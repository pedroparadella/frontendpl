import { useContext, useState } from 'react';
import * as S from './styled';
import { ReactComponent as SearchIcon } from '../../../../assets/search-icon.svg';
import { SvgIcon } from '../../../../components/SvgContainer';
import { PokeContext } from '../../../../PokeContext';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { searchByName, clearSearch } = useContext(PokeContext);
  const handleClick = () => {
    const searchQuery = search.replace(/ /g, '');
    searchQuery === '' ? clearSearch() : searchByName(searchQuery);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const searchQuery = search.replace(/ /g, '');
      searchQuery === '' ? clearSearch() : searchByName(searchQuery);
    }
  };

  return (
    <>
      <S.SearchBackground>
        <S.SearchInputWrapper>
          <S.SearchInput
            value={search}
            placeholder="Digite aqui sua busca..."
            onChange={e => setSearch(e.currentTarget.value)}
            onKeyUp={e => handleKeyUp(e)}
          />
          <S.SearchIcon onClick={handleClick}>
            <SvgIcon Icon={SearchIcon} />
          </S.SearchIcon>
        </S.SearchInputWrapper>
      </S.SearchBackground>
    </>
  );
};
