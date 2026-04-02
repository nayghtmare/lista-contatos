import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/contato'
const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}) => {
  const dispatch = useDispatch()
  const [estaEditando, setEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (telefoneOriginal.length && emailOriginal.length > 0) {
      setTelefone(telefoneOriginal)
      setEmail(emailOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  return (
    <S.ContainerCard>
      <label id="nome">
        <S.NomeH3 id="nome">{nome}</S.NomeH3>
      </label>
      <S.CardTexto
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.CardTexto
        disabled={!estaEditando}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <S.ContainerBotao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.ContainerBotao>
    </S.ContainerCard>
  )
}

export default Contato
