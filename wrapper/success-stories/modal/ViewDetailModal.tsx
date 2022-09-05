import { Modal } from 'antd';
import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

const ViewDetailModal: FC<{
  text: string;
}> = ({ text }) => {
  const [open, setOpen] = useState(true);
  const destroyModal = () => {
    setOpen(false);
  };
  return (
    <Modal
      width={929}
      className="view-detail-modal"
      footer={null}
      closable={false}
      visible={open}
      onOk={() => {
        destroyModal();
      }}
      onCancel={destroyModal}
    >
      <div className="modal-wrapper">
        <div className="text">{text}</div>
        <div className="image">
          <Image src="/img/modal_phone.png" width={297} height={515} />
        </div>
      </div>
    </Modal>
  );
};
export function viewDetail({ text }: { text: string }): void {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<ViewDetailModal text={text} />, div);
}
