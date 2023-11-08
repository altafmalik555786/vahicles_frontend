import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import { Modal } from "antd";

interface Props {
  open?:any;
  setOpen?:any;
  content?:any;
}
const ContentDetailPopup: React.FC<Props> = observer(({ open, setOpen, content, ...props }) => {

  const cancelHandler = () => {
    setOpen({...open, isShown:false})
  }
  return (
    <div className={style.mainWrapper}>
      <Modal
        open={open?.isShown}
        onCancel={cancelHandler}
        footer={false}
      >
        <h2 style={{color:'brown'}}>Blog detail</h2>
        <p>{open?.content}</p>
      </Modal>
    </div>
  );
});

export default memo(ContentDetailPopup);
