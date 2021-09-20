import { useContext, useState } from 'react';
import * as S from './styled';
import { ReactComponent as SearchIcon } from '../../../../assets/search-icon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/clear-search-icon.svg';
import { SvgIcon } from '../../../../components/SvgContainer';
import { PokeContext } from '../../../../PokeContext';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { searchByName, clearSearch, isSearch } = useContext(PokeContext);

  const handleClick = () => {
    const searchQuery = search.replace(/ /g, '');
    searchQuery === '' ? clearSearch() : searchByName(searchQuery);
  };

  const handleClearSearch = () => {
    setSearch('');
    clearSearch();
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      const searchQuery = search.replace(/ /g, '');
      searchQuery === '' ? clearSearch() : searchByName(searchQuery);
    }
    if (e.code === 'Escape') {
      handleClearSearch();
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
          <S.ClearSearch onClick={handleClearSearch} show={isSearch}>
            <SvgIcon Icon={CloseIcon} />
          </S.ClearSearch>
          <S.SearchIcon onClick={handleClick}>
            <SvgIcon Icon={SearchIcon} />
          </S.SearchIcon>
        </S.SearchInputWrapper>
      </S.SearchBackground>
    </>
  );
};
