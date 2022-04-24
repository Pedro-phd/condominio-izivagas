import { IThemesProps } from '@/types/styled'
import styled from 'styled-components'

interface IIndicator extends IThemesProps {
  color: 'green' | 'yellow' | 'red'
}

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  p {
    font-size: 30px;
    margin: 0 5px;
  }
`

export const IndicatorColor = styled.div`
  background: ${(props: IIndicator) => props.theme[props.color]};
  width: 25px;
  height: 25px;
  margin: 0 5px;
`
