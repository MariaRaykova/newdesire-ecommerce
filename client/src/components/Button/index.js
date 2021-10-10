import './index.scss'

const Button = ({title, className}) => {
    return (
        <button className={className} type="submit">{title}</button>
    )
}
export default Button