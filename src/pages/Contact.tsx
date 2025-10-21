import { useNavigate } from "react-router-dom"

export default function Contact() {
  const navigate = useNavigate();
  return (
  <div>
      <h1>this is About page</h1>
      <button onClick={() => navigate('/profile',{state: {
        id: 1,
        name: 'dika'
      }})}>
        go profile
      </button>
  </div>
)
}