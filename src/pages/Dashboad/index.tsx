import { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';

// import api from '../../services/api';

import logoGit from '../../assets/img/logo.svg';
import api from '../../services/api';

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRespositories] = useState<IRepository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@gitExplore:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem(
      '@gitExplore:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<IRepository>(`repos/${newRepo}`);

      const repository = response.data;

      setRespositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Error na busca deste repositorio.');
    }
  }

  return (
    <>
      <img src={logoGit} alt="logo do git explore" />
      <Title>Explore reposiotórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <a href="#s" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
