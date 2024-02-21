
import { useParams } from "react-router-dom"

export default function VanDetail() {

    const vanId = (useParams().id)

    return <h1>Van details for van number {vanId}</h1>
}