import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

function App() {
  
  const navigate = useNavigate()

  const onChange = (newDate) => {
    navigate(`/chart/${newDate.toISOString().substring(0, 10)}`)
  }

  return (
    <div>
        <DatePicker selected={new Date()} onChange={onChange}/>
    </div>
  )
}

export default App
