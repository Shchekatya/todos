import { Button } from '@mui/material'
import './not-found.scss'
import { useNavigate } from 'react-router-dom'



export const NotFound = () => {
  const navigate = useNavigate()
  return(
    <div className="not-found">
      <h1>Такой страницы пока не существует</h1>
      <Button
        onClick={()=>navigate("/")}
      >
        На главную
      </Button>
    </div>
  ) 
}