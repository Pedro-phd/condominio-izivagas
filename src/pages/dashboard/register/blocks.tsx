import { ArrowLeft } from '@/components/Icons/ArrowLeft'
import { ArrowRight } from '@/components/Icons/ArrowRight'
import clientApi from '@/utils/axios'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import * as S from './styles'

type StateBlocks = {
  name: string
  slots: number
}

export default function NewBlocks() {
  const [state, setState] = useState<StateBlocks>({
    name: '',
    slots: 0
  })

  const handleCreate = () => {
    clientApi.post('api/blocks/new', {
      name: state.name,
      slots: state.slots
    })
  }

  return (
    <S.Container>
      <S.Card>
        <S.BreadcrumbsContainer>
          <S.Breadcrumbs href="/dashboard">
            <ArrowLeft />
            Voltar
          </S.Breadcrumbs>
          <S.Breadcrumbs href="/dashboard/edit/blocks">
            Editar
            <ArrowRight />
          </S.Breadcrumbs>
        </S.BreadcrumbsContainer>
        <S.Title>Novo Bloco</S.Title>

        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          placeholder="Nome"
          onChange={(e) =>
            setState((old) => ({ ...old, name: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic"
          label="Quantidade de Vagas"
          variant="outlined"
          placeholder="Quantidade de Vagas"
          type="number"
          onChange={(e) =>
            setState((old) => ({ ...old, slots: parseInt(e.target.value) }))
          }
        />

        <Button variant="contained" onClick={handleCreate}>
          Cadastrar Bloco
        </Button>
        <Button variant="contained" onClick={() => console.log(state)}>
          Logar
        </Button>

        <S.SubTitle>Resultado</S.SubTitle>
        <S.Text>Nome: {state.name}</S.Text>
        <S.Text>Slots: {state.slots}</S.Text>
      </S.Card>
    </S.Container>
  )
}
