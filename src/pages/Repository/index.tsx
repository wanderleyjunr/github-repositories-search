import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoGit from '../../assets/img/logo.svg';

interface IRepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<IRepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoGit} alt="logo explore git" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/69817179?v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositorio</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Start</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issus Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositories/">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
