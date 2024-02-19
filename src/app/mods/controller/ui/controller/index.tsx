import styled from '@emotion/styled'
import { css_vars, at_light, at_dark } from 'last.css/utils'

import { unit_size } from './common'
import { D_pad } from './d-pad'
import { SS } from './ss'
import { ABXY } from './abxy'

const Box = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [at_light]: {
    backdropFilter: 'blur(4px)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px -10px 20px 0px inset,' +
      'rgba(0, 0, 0, 0.28) 0px 5px 10px 0px'
  },
  [at_dark]: {
    backdropFilter: 'blur(6px)',
    border: '1px solid ' + css_vars.fc(.3),
  },
  padding: `${unit_size(1.2)} ${unit_size(.8)}`,
  borderRadius: unit_size(1),
})

export
const Controller = () => {
  return <Box>
    <D_pad />
    <SS />
    <ABXY />
  </Box>
}
