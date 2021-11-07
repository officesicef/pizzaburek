import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const push = (navigateTo) => {
  if (navigateTo !== '') {
    history.push(navigateTo);
  }
};

export default { history, push };
