import { observer } from "mobx-react";
import { memo, useEffect, useState } from "react";
import style from "./style.module.scss";
import Table from "@components/common-components/table";
import { useStore } from "@stores/root-store";
import { Spin } from "antd";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { ConfirmationModal } from "@components/common-components/confirmation-modal";

interface Props {}
const AllUsers: React.FC<Props> = observer(({ ...props }) => {
  const {
    user: {
      getAllUsers,
      allUsersLoading,
      getAllUserData,
      deleteUser,
      loadingDeleteUser,
    },
  } = useStore(null);
  const [confirmData, setConfirmData] = useState(null);
  const [isFirstLoading, setIsFirstLoading] = useState(true)
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
   const resp = await getAllUsers();
   if(resp?.success){
    setIsFirstLoading(false);
   }
  };

  const deleteHandler = async (id) => {
    const payload = { id };
    const resp = await deleteUser(payload);
    if (resp?.success) {
      setConfirmData({ ...confirmData, open: false });
      getAllUsers();
    }
  };
  const column = [
    {
      title: "User Name",
      key: "userName",
      render: (_, data) => {
        return <div style={{fontWeight:'bold', textTransform:'capitalize'}}>{data?.name || "--"}</div>;
      },
    },
    {
      title: "User Email",
      key: "email",
      render: (_, data) => {
        return <div>{data?.email || "--"}</div>;
      },
    },
    {
      title: "Contact",
      key: "contact",
      render: (_, data) => {
        return <div>{data?.contact || "--"}</div>;
      },
    },
    {
      title: "Address",
      key: "address",
      render: (_, data) => {
        return <div>{data?.address || "--"}</div>;
      },
    },
    {
      title: (
        <span style={{ display: "flex", justifyContent: "center" }}>
          Actions
        </span>
      ),
      key: "action",
      render: (_, data) => {
        return (
          <div
            style={{
              display: "flex",
              gap: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiTwotoneDelete
              style={{ color: "red", fontSize: "16px", cursor:"pointer" }}
              onClick={() => setConfirmData({ open: true, id: data?._id })}
            />
            <AiTwotoneEdit style={{ color: "green", fontSize: "16px", cursor:"pointer" }} />
          </div>
        );
      },
    },
  ];
  return (
    <div className={style.mainWrapper}>
      {isFirstLoading ? (
        <Spin style={{ display: "flex", justifyContent: "center" }} />
      ) : (
        <Table dataSource={getAllUserData} columns={column} />
      )}
      <ConfirmationModal
        description="This action is not be undo so be careful."
        modelTitle={"Delete User"}
        warningText="Are you sure to want delete this post"
        loadingConfirmBtn={loadingDeleteUser}
        confirmBtnDisable={loadingDeleteUser}
        isOpen={confirmData?.open}
        onConfirm={() => deleteHandler(confirmData?.id)}
        onCancel={() => setConfirmData({ ...confirmData, open: false })}
      />
    </div>
  );
});

export default memo(AllUsers);
