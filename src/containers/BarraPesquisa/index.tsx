import { useDispatch, useSelector } from 'react-redux'
import { CampoBusca, ContainerBusca, InputBusca } from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraDePesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  return (
    <ContainerBusca>
      <CampoBusca>
        <InputBusca
          type="text"
          placeholder="Buscar contato"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </CampoBusca>
    </ContainerBusca>
  )
}

export default BarraDePesquisa
