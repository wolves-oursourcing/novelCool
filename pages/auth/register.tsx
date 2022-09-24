import withAppProvider from '../../hoc/withAppProvider';
import RegisterWrapper from '../../wrapper/auth/register-wrapper';

const Register = () => {
  return (
    <div>
      <RegisterWrapper />
    </div>
  );
};

export default withAppProvider(Register);
