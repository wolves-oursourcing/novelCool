import withAppProvider from '../../hoc/withAppProvider';
import LoginWrapper from '../../wrapper/auth/login-wrapper';

const Login = () => {
  return (
    <div>
      <LoginWrapper />
    </div>
  );
};

export default withAppProvider(Login);
