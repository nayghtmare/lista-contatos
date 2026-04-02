import styled, { createGlobalStyle } from 'styled-components'

export const ContainerCard = styled.div`
  background-color: #3a3a3b;
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
`

export const ContainerBotao = styled.div`
  padding-top: 18px;
  width: 100%;
  border-top: 2px solid rgb(0, 0, 0);
`

export const CardTexto = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  border: none;
  margin-top: 16px;
  margin-bottom: 6px;
  padding-left: 12px;
  padding-top: 12px;
  line-height: 10px;
  font-size: 14px;
  color: #0000008e;
  font-weight: bold;
`

export const Botao = styled.button`
  margin-right: 12px;
  padding: 8px 12px;
  background-color: #9029b9;
  border-radius: 7px;
  border: none;
  font-size: 12px;
  font-weight: none;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
`

export const NomeH3 = styled.h3`
  color: #fff;
  font-weight: bold;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #9029b9;
`

export const BotaoRemover = styled(Botao)`
  background-color: #561a6e;
`
