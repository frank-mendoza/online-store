
const Button = ({ ...props }) => {

  return (
    
    <button className={props.white ? "button border-white" :'button'} style={props.style}><span>{props.title}</span></button>
  )
}

export default Button