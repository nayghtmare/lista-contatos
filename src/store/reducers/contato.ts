import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'João Pedro Silva',
      email: 'joaopedrosilva@gmail.com',
      telefone: '(99) 99999-9999',
      id: 1
    },
    {
      nome: 'Marcos Oliveira Monteiro',
      email: 'marcosoliveiramonteiro@gmail.com',
      telefone: '(66) 6666666-6666',
      id: 2
    },
    {
      nome: 'Carina Santos',
      email: 'carinasantos@gmail.com',
      telefone: '(33) 33333-3333',
      id: 3
    },
    {
      nome: 'Mônica Ferreira',
      email: 'monicaf@gmail.com',
      telefone: '(11) 11111-1111',
      id: 4
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Ja existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
