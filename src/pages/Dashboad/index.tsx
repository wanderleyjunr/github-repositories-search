import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoGit from '../../assets/img/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoGit} alt="logo do git explore" />
      <Title>Explore reposiotórios no GitHub</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#s">
          <img
            src="https://avatars.githubusercontent.com/u/47747702?v=4"
            alt="Wanderley Junior"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit !</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#s">
          <img
            src="https://avatars.githubusercontent.com/u/47747702?v=4"
            alt="Wanderley Junior"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit !</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#s">
          <img
            src="https://avatars.githubusercontent.com/u/47747702?v=4"
            alt="Wanderley Junior"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit !</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
