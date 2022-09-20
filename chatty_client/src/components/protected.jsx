import React from 'react';
import {useNavigate} from 'react-router-dom'

const Protected = ({children}) => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
  return (
    <>{children}</>
  )
}

export default Protected