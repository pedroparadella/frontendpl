import { useCallback, useContext, useEffect, useState } from 'react';
import * as S from './styled';
import { Header } from '../../components/Header';
import { SearchBar } from './components/SearchBar';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { Card } from './components/Card';
import { Modal } from '../../components/Modal';
import { CreateModal } from './components/CreateModal';
import { PokeContext } from '../../PokeContext';

export const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const data = useContext(PokeContext);

  const handleCreate = () => {
    setShowCreateModal(true);
  };

  return (
    <S.Container>
      {/* <Modal title="Excluir" text="Certeza que deseja excluir?" type="DELETE" /> */}
      <CreateModal show={showCreateModal} />
      <Header />
      <SearchBar />

      <S.Main>
        <S.MainTitleWrapper>
          <Title> Resultado de busca</Title>
          <Button buttonText="Novo Card" onClick={handleCreate} />
        </S.MainTitleWrapper>

        <S.CardsWrapper>
          {data.map(poke => (
            <Card image={poke.image} cardText={poke.name} />
          ))}
        </S.CardsWrapper>
      </S.Main>
    </S.Container>
  );
};
