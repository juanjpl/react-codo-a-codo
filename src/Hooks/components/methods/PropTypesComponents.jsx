import { centerStyle } from "../../styles"
import PropTypes from 'prop-types'

export const PropTypesComponents = ({name,age,dev,array,objeto,funcion})=>{

    const style = centerStyle + 'container-fluid bg-primary text-light py-4'

    return(
        <div className={style} >
            <h3>Proptypes:</h3>
            <h5>{name} </h5>
            <h5>{age} </h5>
            <h5>{dev.toString()} </h5>
            <h5>{array[1]} </h5>
            <h5>{objeto.a} </h5>
            <h5>{funcion()} </h5>
        </div>
    )
}

PropTypesComponents.propTypes={
    name: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    dev:PropTypes.bool.isRequired,
    array:PropTypes.array.isRequired,
    objeto:PropTypes.object.isRequired,
    funcion:PropTypes.func.isRequired,
}