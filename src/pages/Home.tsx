import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to home!</h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  )
}