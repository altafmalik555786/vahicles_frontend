import { observer } from "mobx-react";
import style from "./style.module.scss";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Modal,
  Pagination,
  Row,
  Table,
  Upload
} from "antd";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import {
  CommentOutlined,
  LikeOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useStore } from "@stores/root-store";
import { useEffect, useRef, useState } from "react";
import { validateMessages } from "@utils/json-data";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import { AiOutlineSend, AiOutlineDelete } from "react-icons/ai";
import { ConfirmationModal } from "@components/common-components/confirmation-modal";
import useWindowSize from "@utils/hooks/useWindowSize";
import CustomButton from "@components/common-components/custom-button";
const Home = observer(() => {
  const {
    user: {
      getPostData,
      allPostLoading,
      likePosts,
      createPost,
      loadingCreatePost,
      loadCommentPost,
      deletePost,
      loadingDeletePost,
      getAllPaginatedPosts,
      loadSerachPost,
      getSearchData,
      loadingSearchData,
    },
  } = useStore(null);
  const [blogForm] = Form.useForm();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);
  const [commentVal, setCommentVal] = useState(null);
  const [open, setOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const [confirmData, setConfirmData] = useState(null);
  const [pageSize, setPageSize] = useState(8);
  const [searchVal, setSearchVal] = useState("");
  const [posDetails, setPosDetails] = useState(getPostData);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const innerWidth = useWindowSize().width
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const userId = localStorage.getItem("userId");
  const { Search } = Input;
  useEffect(() => {
    getAllPostsData(pageSize);
  }, []);

  useEffect(() => {
    setPosDetails(getPostData);
  }, [getPostData]);
  console.warn("posDetails", posDetails);
  const getAllPostsData = async (data) => {
    setIsLoading(true);
    setTimeout(async () => {
      await getAllPaginatedPosts({ page: 1, pageSize: data });
      setIsLoading(false); 
    }, 2000); 
  };

  console.warn("getSearchData", getSearchData);
  const likedHandler = async (id) => {
    const resp = await likePosts({ postId: id });
    if (resp?.success) {
      getAllPostsData(pageSize);
    }
  };
  const blogFormHandler = async (value) => {
    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('title', value.topic);
    formData.append('content', value.content);
    // const data = { title: value.topic, content: value.content, formData};
    console.warn('value', value)
    const resp = await createPost(formData);
    if (resp?.success) {
      blogForm.resetFields();
      setIsModalOpen(false);
      getAllPostsData(pageSize);
    }
  };


  const handleFileChange = (e) => {
    console.warn(e.target.files[0])
    setSelectedFile(e.target.files[0]);
  };
  const formRender = () => {
    return (
      <Form
        form={blogForm}
        name={"basic"}
        onFinish={blogFormHandler}
        autoComplete={"off"}
        validateMessages={validateMessages}
        className={style.loginForm}
        layout="vertical"
      >
         <Form.Item
          label={"Image"}
          name={"image"}
          rules={[
            {
              required: true,
              message: `Please provide a Image`,
            },
          ]}
        >
          <div className={style.fileUpload}>
          <label className={style.uploadLabel}>
            <input type="file" className={style.fileInput} onChange={(e) => handleFileChange(e)}/>
            <UploadOutlined className={style.plusIcon} />
            Upload
          </label>
        </div>
        </Form.Item>
        <Form.Item
          label={"Topic"}
          name={"topic"}
          rules={[
            {
              required: true,
              message: `Please provide a Topic`,
            },
          ]}
        >
          <Input placeholder="Enter Topic name" />
        </Form.Item>
        <Form.Item
          label={"Content"}
          name={"content"}
          rules={[
            {
              required: true,
              message: "please provide details",
            },
          ]}
        >
          <TextArea
            placeholder="Enter details..."
            className={style.passwordInput}
          />
        </Form.Item>
        <div>
          <div style={{ display: "flex", justifyContent: "start" }}>
            <CustomButton loading={loadingCreatePost} disabled={loadingCreatePost} title="Post"
              htmlType="submit"
            />
          </div>
        </div>
      </Form>
    );
  };

  // ****************************************************************************

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const commentColumn = [
    // {
    //   title: "sr",
    //   render: (_, data, ind) => (<span>{ind}</span>)
    // },
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  // ***********************************************************************************
  return (
    <div className={style.mainWrapper}>
      <Row gutter={[0,20]}
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
          paddingTop: 10,
        }}
      >
        <Col md={12} lg={12} sm={24} xs={24}
          style={{
            display: "flex",
            justifyContent: innerWidth > 470 ? "flex-start" : 'center',
          }}
        >
          <Search
            className={style.searchWrapper}
            placeholder="Search post"
            enterButton={
              <span
                onClick={async () => {
                  const res = await loadSerachPost(searchVal);
                  if (res?.success) {
                    if (res?.results.length) setPosDetails(res?.results);
                    else setPosDetails(getPostData);
                  }
                }}
              >
                Search
              </span>
            }
            size="large"
            loading={loadingSearchData}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </Col>
        <Col md={12} lg={12} sm={24} xs={24}
          style={{
            display: "flex",
            justifyContent: innerWidth > 470 ? "flex-end" : 'center',
          }}
        >
          <>
            <Button
              style={{ fontSize: "16px", width: "300px", height: "40px" }}
              type="primary"
              onClick={showModal}
            >
              Create Blog
            </Button>
            <Modal
              title="Create Post"
              open={isModalOpen}
              footer={null}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Card>{formRender()}</Card>
            </Modal>
          </>
        </Col>
      </Row>
      <h1 style={{ textAlign: "center", color: "#fff" }}>
        All User Blogs Here
      </h1>

      <Row gutter={10} style={{ padding: 10 }}>
        {
          posDetails?.map((item, index) => {
            return (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={8}
                lg={6}
                style={{ marginTop: 10 }}
              >
                <Card style={{border:'2px solid blue'}} title={item?.title} bordered={true}>
                  <div className={style.imageContainer}>
                    <img src={item?.img || 'https://img.freepik.com/free-photo/toon-showing-blank-placard_1160-189.jpg?w=740&t=st=1697898252~exp=1697898852~hmac=dad14bc045cb64e2fcbe0535bca107f6b887debc63b6867319dbed6df5496910'} alt="img" />
                  </div>
                <div className={style.contentWrapper}>
                  <p>{item.content}</p>
                </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 10,
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{ display: "flex", gap: 10, alignItems: "center" }}
                    >
                      <span>
                        <LikeOutlined
                          className={
                            item?.likes?.includes(userId)
                              ? style.likedIconClass
                              : style.notLikedIconClass
                          }
                          style={{ fontSize: 18 }}
                          onClick={() => likedHandler(item?._id)}
                        />
                        <span>{item?.likes?.length}</span>
                      </span>
                      {/* <DislikeOutlined style={{ fontSize: 18 }} /> */}
                      <CommentOutlined
                        style={{ fontSize: 18 }}
                        onClick={() => {
                          setOpen(true);
                          setPostData({
                            title: item?.title,
                            comments: item?.comments,
                          });
                        }}
                      />
                      <span>{item?.comments?.length}</span>
                    </div>
                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <span>Posted by:</span> <b style={{textTransform:'capitalize'}}>{item?.user?.name || '--'}</b>
                    </span>
                  </div>
                  {/* {isComment === item?._id ?  */}
                  <div style={{ display: "flex" }}>
                    <TextArea
                      style={{
                        height: 0,
                        borderTop: 0,
                        borderLeft: 0,
                        borderRight: 0,
                        marginTop: 10,
                        color: "#121212",
                        borderBottom:"1px solid blue"
                      }}
                      value={postId === item?._id ? commentVal : ""}
                      onChange={(e) => {
                        setCommentVal(e.target.value);
                        setPostId(item?._id);
                      }}
                    />
                    <AiOutlineSend
                      style={{
                        fontSize: "18px",
                        cursor: "pointer",
                        fill: "blue",
                        position: "absolute",
                        right: 30,
                        bottom: 62,
                      }}
                      onClick={async () => {
                        const data = {
                          postId: item?._id,
                          comment: commentVal,
                        };
                        const resp = await loadCommentPost(data);
                        if (resp?.success) {
                          setCommentVal("");
                          getAllPostsData(pageSize);
                        }
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 10,
                    }}
                  >
                    <AiOutlineDelete
                      onClick={() =>
                        setConfirmData({ open: true, id: item?._id, imgId:item?.imgId })
                      }
                      style={{
                        fontSize: "20px",
                        fill: "red",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </Card>
              </Col>
            );
          })
          // )
        }
      </Row>
      <div
        style={{
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <span
          style={{
            border: "1px solid #fff",
            padding: "6px 10px",
            borderRadius: 6,
            cursor: "pointer",
            whiteSpace:'nowrap'
          }}
          onClick={() => getAllPostsData(pageSize + 8)}
        >
          {isLoading ? "Loading..." : "Load more"}
        </span>
      </div>
      <Drawer
        width="310"
        title={postData?.title || ""}
        placement="right"
        className={style.drawerWrapper}
        onClose={onClose}
        open={open}
      >
        <h3 style={{ textAlign: "center", marginTop: 0 }}>User Comments</h3>
        <Table
          pagination={false}
          className={style.tableWrapper}
          style={{ width: "100%", marginBottom: 3 }}
          dataSource={postData?.comments}
          columns={commentColumn}
        />
        <Pagination
          defaultCurrent={1}
          onChange={(e) => console.log(e)}
          total={postData?.comments?.length}
        />
      </Drawer>
      <ConfirmationModal
        description="This action is not be undo so be careful."
        modelTitle={"Delete Post"}
        warningText="Are you sure to want delete this post"
        loadingConfirmBtn={loadingDeletePost}
        confirmBtnDisable={loadingDeletePost}
        isOpen={confirmData?.open}
        onConfirm={async () => {
          const res = await deletePost({id:confirmData?.id, imgId:confirmData.imgId});
          if (res?.success) {
            setConfirmData({ ...confirmData, open: false });
            getAllPostsData(pageSize);
          }
        }}
        onCancel={() => setConfirmData({ ...confirmData, open: false })}
      />
    </div>
  );
});

export default Home;
