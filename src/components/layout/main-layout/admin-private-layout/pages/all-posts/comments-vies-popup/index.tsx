import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import { Modal, Pagination, Table } from "antd";
import moment from "moment";

interface Props {
  open?:any;
  setOpen?:any;
}
const CommentsViesPopup: React.FC<Props> = observer(({ open, setOpen, ...props }) => {

  const cancelHandler = () => {
    setOpen({...open, isShown:false})
  }
  const commentColumn = [
    {
      title: "sr",
      render: (_, data, ind) => (<span>{ind}</span>)
    },
    {
      title: "comments",
      render: (_, data, ind) => <span>{data?.text || "-"}</span>,
    },
    {
      title: "Date/time",
      render: (_, data, ind) => (
        <span>{moment(data?.createdAt)?.format("M/D/YY hh:mm") || ""}</span>
      ),
    },
  ];
  return (
    <div className={style.mainWrapper}>
      <Modal
      className={style.modalWrapper}
        open={open?.isShown}
        onCancel={cancelHandler}
        footer={false}
      >
        <h2 style={{color:'brown'}}>Blog Comments</h2>
        <Table
          pagination={false}
          className={style.tableWrapper}
          style={{ width: "100%", marginBottom: 3 }}
          dataSource={open?.comment}
          columns={commentColumn}
        />
        <Pagination
          defaultCurrent={1}
          onChange={(e) => console.log(e)}
          total={open?.comments?.length}
        />
      </Modal>
    </div>
  );
});

export default memo(CommentsViesPopup);
