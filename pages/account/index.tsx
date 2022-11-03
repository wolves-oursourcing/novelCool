import { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import { getCurrentUser, IUserInfo } from '../../services/user.service';
import AccountPageWrapper from '../../wrapper/account/account-wrapper';

const Account = () => {
  const [user, setUser] = useState<IUserInfo>();
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  return (
    <div>
      <AccountPageWrapper user={user} />
    </div>
  );
};

export default withAppProvider(Account);
