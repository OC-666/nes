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
      <div>
        {props.title && <header>{props.title}</header>}
        <div>{
          props.opts.map(opt =>
            <div
              onClick={() => {
                props.set(opt.val)
              }}
            >{opt.lab}</div>
          )
        }</div>
      </div>
    }
  />
}
