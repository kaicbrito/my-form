const BasicForm = () => {
  return (
    <form autoComplete="off">
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" placeholder="Digite seu nome completo" />
      <label htmlFor="cpf">CPF</label>
      <input id="cpf" type="text" placeholder="Digite seu CPF" />
      <label htmlFor="telefone">Telefone</label>
      <input id="telefone" type="text" placeholder="Digite seu telefone" />
      <label htmlFor="endereco">Endereço</label>
      <input
        id="endereco"
        type="text"
        placeholder="Digite o nome da rua e número"
      />
      <label htmlFor="cidade">Cidade</label>
      <input id="cidade" type="text" placeholder="Digite sua cidade" />
      <label htmlFor="estado">Estado</label>
      <input id="estado" type="text" placeholder="Digite seu estado" />
      <label htmlFor="cep">CEP</label>
      <input id="cep" type="text" placeholder="Digite seu CEP" />
      <label htmlFor="pai">Nome do Pai</label>
      <input id="pai" type="text" placeholder="Digite o nome do seu pai" />
      <label htmlFor="mae">Nome da Mãe</label>
      <input id="mae" type="text" placeholder="Digite o nome da sua mãe" />
      <label htmlFor="nascimento">Data de nascimento</label>
      <input
        id="nascimento"
        type="text"
        placeholder="Digite sua data de nascimento"
      />
      <label htmlFor="sexo">Sexo</label>
      <input id="sexo" type="text" placeholder="Digite seu sexo" />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Digite seu email" />
      <button className="button">Enviar</button>
    </form>
  );
};
export default BasicForm;
