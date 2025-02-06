
interface Props {
  icon: string
  tooltip: string
}

function ButtonLoad({ icon, tooltip }: Props) {
  return (
    <div className="tooltip" data-tip={tooltip}>
      <button disabled className="btn skeleton" type="submit">
        <span className={icon} role="img" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ButtonLoad
