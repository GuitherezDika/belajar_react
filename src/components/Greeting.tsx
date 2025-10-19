import React from 'react';
interface GreetingProps {
  name?: string;
  onGreet?: (message: string) => void;
}

const Greeting: React.FC<GreetingProps> = ({name, onGreet}) => {
  const handleClick = () => {
    const msg = `Hello ${name}!`;
    if(onGreet) onGreet(msg);
    alert(msg);
  }

  return (
    <div>
      <p>Hi <strong>{name}</strong></p>
      <button onClick={handleClick}>Greet</button>
    </div>
  )
}

export default Greeting;