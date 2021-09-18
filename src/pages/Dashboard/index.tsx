import * as S from './styled';
import { Header } from '../../components/Header';
import { SearchBar } from './components/SearchBar';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { Card } from './components/Card';

export const Dashboard = () => {
  return (
    <S.Container>
      <Header />
      <SearchBar />

      <S.Main>
        <S.MainTitleWrapper>
          <Title titleText="Resultado de busca" />
          <Button buttonText="Novo Card" />
        </S.MainTitleWrapper>

        <S.CardsWrapper>
          <Card cardText="Lorem ipsum dolor sit amet consectetur" />
        </S.CardsWrapper>
      </S.Main>
    </S.Container>
  );
};
