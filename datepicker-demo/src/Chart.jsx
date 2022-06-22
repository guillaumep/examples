import { useParams } from "react-router-dom"

const Chart = () => {
    const {date} = useParams()
    return (
        <p>Date is: {date}</p>
    )
}

export default Chart;