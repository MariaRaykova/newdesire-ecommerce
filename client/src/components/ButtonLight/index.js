import './index.scss'

const ButtonLight = ({title, onClick}) => {
    return (
        <button className="btn btn-white" type="submit"onClick={onClick}>{title}</button>
    )
}
export default ButtonLight