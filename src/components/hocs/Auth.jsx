import { useNavigate } from 'react-router-dom'

const Auth = (Component) => {
    const navigate = useNavigate()
    return (props) => {
    
        if (!props.user) {
            navigate("/login")
        }

        return <Component {...props} />
    }
}

export default Auth