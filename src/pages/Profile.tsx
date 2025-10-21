import { useLocation } from "react-router-dom"

export default function Profile() {
  const location = useLocation();
  const {id, name} = location.state || {};
  return <h1>this is Profile page {id} - {name}</h1>
}