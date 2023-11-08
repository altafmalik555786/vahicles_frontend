import { observer } from "mobx-react";
import { memo, useEffect, useState } from "react";
import style from "./style.module.scss"
import Table from "@components/common-components/table";
import { useStore } from "@stores/root-store";
import { Spin } from "antd";
import { AiFillEye, AiOutlineComment, AiTwotoneDelete, AiTwotoneEdit, AiTwotoneHeart } from "react-icons/ai";
import moment from "moment";
import ContentDetailPopup from "./content-detail-Popup";
import CommentsViesPopup from "./comments-vies-popup";

interface Props {}
const AllPosts: React.FC<Props> = observer(({ ...props }) => {
  const {user:{getAllPosts, allPostLoading, getAllPostData}} = useStore(null);
  const [contentPopUp, setContentPopUp] = useState({isShown:false, content:''});
  const [commentPopUp, setCommentPopUp] = useState({isShown:false, comment:[]});
  useEffect(() => {
    loadAllPosts();
  },[])
  const loadAllPosts = async () => {
    await getAllPosts();
  }

  const viewContentHandler = (content) => {
    setContentPopUp({...contentPopUp, isShown:true, content})
  }

  const viewCommentsHandler = (comment) => {
    setCommentPopUp({...contentPopUp, isShown:true, comment})
  };

  const column = [
    {
      title:'Title',
      key:'title',
      render: (_, data) => {
        return <div style={{fontWeight:'bold', textTransform:'capitalize'}}>
          {data?.title || '--'}
        </div>
      }
    },
    {
      title:'Content',
      key:'content',
      width:"30%",
      render: (_, data) => {
        return <div className={style.contentWrapper}>
          <AiFillEye style={{fill:'blue', marginRight:4, cursor:'pointer'}} onClick={() => viewContentHandler(data?.content)}/>{data?.content || '--'}
        </div>
      }
    },
    {
      title:<span style={{display:'flex', justifyContent:'center', whiteSpace:'nowrap'}}>Likes & Comments</span>,
      key:'likes',
      render: (_, data) => {
        return <div style={{display:'flex', gap:10, justifyContent:'center'}}>
          <div style={{color:'brown', display:'flex'}}><AiTwotoneHeart style={{fill:'brown', cursor:'pointer', fontSize:16}}/>{data?.likes?.length || 0}</div>
          <div style={{color:'blue', display:'flex'}}><AiOutlineComment onClick={() => viewCommentsHandler(data?.comments)} style={{fill:'blue', cursor:'pointer', fontSize:16}}/>{data?.comments?.length || 0}</div>
        </div>
      }
    },
    {
      title:'CreatedAt',
      key:'creationAt',
      render: (_, data) => {
        return <div>
          {moment(data?.creationAt).format("d/mm/yyyy hh:mm") || '--'}
        </div>
      }
    },
    {
      title:'Creator',
      key:'creator',
      render: (_, data) => {
        return <div style={{fontWeight:'bold', textTransform:'capitalize'}}>
          {data?.user?.name || '--'}
        </div>
      }
    },
    {
      title:<span style={{display:'flex', justifyContent:'center'}}>Actions</span>,
      key:'action',
      render: (_, data) => {
        return <div style={{display:'flex', gap:6, justifyContent:'center', alignItems:'center'}}>
          <AiTwotoneDelete style={{color:'red', fontSize:'16px'}}/>
          <AiTwotoneEdit style={{color:'green', fontSize:'16px'}}/>
        </div>
      }
    }
  ]
  return (
    <div className={style.mainWrapper}>
        {allPostLoading ? <Spin style={{display:'flex', justifyContent:'center'}}/>
         :<Table dataSource={getAllPostData} columns={column}/>}
         <ContentDetailPopup open={contentPopUp} setOpen={setContentPopUp}/>
         <CommentsViesPopup open={commentPopUp} setOpen={setCommentPopUp}/>
    </div>
  );
});

export default memo(AllPosts);
 