const Button = (props) => {
  return (
    <button href='https://github.com/ngonzalia' className={`btn btn-${props.type} btn-text btn-text-${props.type}`}>
      <span>
      <img 
        src={require(`../assets/icon-${props.icon}.svg`)}
        alt={`${props.icon} icon`}
        className={`icon-${props.icon}`}
      />
      </span>
      {props.type} Download
    </button>
  )
}

export default Button;