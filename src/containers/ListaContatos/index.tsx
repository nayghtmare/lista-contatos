import { ContainerMain } from './style'
import Contato from '../../components/contatos'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  const filtraContato = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }
  return (
    <ContainerMain>
      <ul>
        {filtraContato().map((i) => (
          <li key={i.nome}>
            <Contato
              id={i.id}
              nome={i.nome}
              email={i.email}
              telefone={i.telefone}
            />
          </li>
        ))}
      </ul>
    </ContainerMain>
  )
}

export default ListaContato
