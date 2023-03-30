import React, { useCallback, useState } from 'react';
import Input from './components/Input'

interface Usuario {
  cep: string;
  price: number;
}

const App: React.FC= () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }, [usuario]);

  return (
    <div>
      <Input placeholder='99999999' mask='cep' name='cep' onChange={handleChange}/>
      <Input placeholder='' mask='currency' name='price' onChange={handleChange}/>

      <button onClick={() => console.log(usuario)}>Salvar</button>
    </div>
  )
}

export default App;
