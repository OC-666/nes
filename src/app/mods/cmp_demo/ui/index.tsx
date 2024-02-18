import { CSSProperties } from 'react'
import { Triangle } from '../../../../common/cmp/basic/triangle'
import { css_vars } from 'last.css/variables'

export
const CMP_demo = () => {
  return <div className='container'>
    <Triangle style={{ '--size': css_vars.fs } as CSSProperties} />
  </div>
}
