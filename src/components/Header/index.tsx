import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import logoPng from "../../assets/logoPng.png";
import Modal from "react-modal";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header( {onOpenNewTransactionModal} : HeaderProps ) {


  return (
    <Container>
      <Content>
        <img src={logoPng} alt="personalFinance" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

        
      </Content>
    </Container>
  );
}
