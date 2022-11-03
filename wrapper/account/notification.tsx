import { Typography } from 'antd';
import moment from 'moment';

export interface IPropsNotificaitonComponent {
  notifications: any;
}

const NotificationComponent = (props: IPropsNotificaitonComponent) => {
  const { Title } = Typography;
  const { notifications } = props;
  return (
    <div className="notification-component">
      <Title level={2}>Notifications</Title>
      {notifications && notifications.length > 0 ? (
        notifications.map(noti => (
          <div className="notification-block" key={noti.id}>
            <div className="notification-block-up">
              <p className="title">Title message</p>
              <p className="timer">{moment(new Date()).format('DD/MM/YYYY hh:mm')}</p>
            </div>
            <div className="notification-block-message">
              <p className="message">This is notificaiton</p>
            </div>
          </div>
        ))
      ) : (
        <div className="notification-block no-content">
          <p>No notifications</p>
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
