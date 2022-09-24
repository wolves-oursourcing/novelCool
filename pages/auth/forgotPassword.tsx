import withAppProvider from '../../hoc/withAppProvider';
import ForgotPasswordWrapper from '../../wrapper/auth/forgot-wrapper';

const ForgotPassword = () => {
  return (
    <div>
      <ForgotPasswordWrapper />
    </div>
  );
};

export default withAppProvider(ForgotPassword);
