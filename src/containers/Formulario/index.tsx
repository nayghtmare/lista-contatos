import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from '../../styles'
import { BotaoCadastrar, CampoInfo, TituloNovo } from './style'
import { useDispatch } from 'react-redux'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, telefone, 7)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <Container>
      <TituloNovo>Adicionar Contato</TituloNovo>
      <form onSubmit={cadastrarContato}>
        <CampoInfo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <CampoInfo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <CampoInfo
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="text"
          placeholder="Telefone"
        />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </form>
    </Container>
  )
}

export default Formulario
