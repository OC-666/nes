import { FC } from 'react'

import { KB_value } from '../../../../../ss/controller/map'
import { Icon_keyboard } from './keyboard'
import { css_vars } from 'last.css/utils'

interface Map_value_props {
  value: KB_value
}

export
const Map_value: FC<Map_value_props> = ({ value }) =>
  <div style={{
    color: css_vars.bc(),
    backgroundColor: css_vars.fc(),
    borderRadius: 4,
    padding: `${css_vars.us(.4)} ${css_vars.us()}`,

    display: 'flex',
    alignItems: 'center',
  }}>
    <div style={{
      paddingTop: 1,
      marginRight: css_vars.us(.5),
    }}>
      <Icon_keyboard width={14} height={14} />
    </div>
    <div style={{
      textTransform: value.length === 1 && 'uppercase' || 'none',
    }}>{value}</div>
  </div>
