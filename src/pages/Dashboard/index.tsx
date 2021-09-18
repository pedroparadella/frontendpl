import { useState } from 'react';
import * as S from './styled';
import { Header } from '../../components/Header';
import { SearchBar } from './components/SearchBar';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { Card } from './components/Card';
import Placeholder from '../../assets/placeholder.png';
import { Modal } from '../../components/Modal';
import { CreateModal } from './components/CreateModal';

export const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

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
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
          <Card image={Placeholder} cardText="Lorem ipsum dolor sit amet consectetur" />
        </S.CardsWrapper>
      </S.Main>
    </S.Container>
  );
};
