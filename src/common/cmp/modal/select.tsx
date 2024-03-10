import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'
import { Modal, type Shown } from '.'

interface Props_modal_select<V> {
  title?: string
  val?: V
  set(new_v: V): void
  shown: Shown
  opts: {
    lab: string
    val: V
  }[]
}

export
function Modal_select<V>(props: Props_modal_select<V>) {
  return <Modal
    shown={props.shown}
    Children={() =>
      <Box_opts>
        {props.title && <header>
          <h5>{props.title}</h5>
        </header>}
        <div>{
          props.opts.map(opt =>
            <div onClick={() => {
              props.set(opt.val)
            }}>
              {opt.lab}
            </div>
          )
        }</div>
      </Box_opts>
    }
  />
}

const Box_opts = styled.div({
  h5: {
    marginTop: '-2em',
    marginBottom: '3em',
    fontSize: '1rem',
    fontWeight: '500',
    color: css_vars.fc(.8),
    textAlign: 'center',
    // letterSpacing: '.1em',
  },
  div: {
    div: {
      lineHeight: 3.5,
      cursor: 'pointer',
      paddingLeft: '1em',
      paddingRight: '8em',
      display: 'flex',
      alignItems: 'center',

      '&:hover::before': {
        borderColor: css_vars.fc(),
      },
      '&::before': {
        content: '""',
        display: 'inline-block',
        width: '.4em',
        height: '.4em',
        borderRadius: '50%',
        border: '2px solid ' + css_vars.fc(.38),
        marginRight: '1em',
      },
    },
    'div + div': {
      // borderTop: '1px solid ' + css_vars.fc(.1),
    },
  },
})
