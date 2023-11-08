import { cast, flow, types } from "mobx-state-tree";
import { userApi } from "../../api";
import { notification } from "../../utils/notifications";
import { constRoute } from "@utils/route";
import { catchError } from "@utils/common-functions";
import {
  allUserDataModel,
  postDataModel, searcDataModel, userDataModel,
} from "@stores/store-utils";
import { toJS } from "mobx";
export const user = types

  .model({
    postData: types.maybeNull(types.array(postDataModel)),
    allPostData: types.maybeNull(types.array(postDataModel)),
    allUserData: types.maybeNull(types.array(allUserDataModel)),
    searchData: types.maybeNull(types.array(searcDataModel)),
    userData: types.maybeNull(userDataModel),
    allPostLoading: types.optional(types.boolean, false),
    allUsersLoading: types.optional(types.boolean, false),
    loadingCreatePost: types.optional(types.boolean, false), 
    loadingDeletePost: types.optional(types.boolean, false),
    loadingDeleteUser: types.optional(types.boolean, false),
    loadingSearchData: types.optional(types.boolean, false), 
    loadingPasswordResetEmail: types.optional(types.boolean, false), 
    loadingVerifyPasswordResetCode: types.optional(types.boolean, false),
    loadingResetPassword: types.optional(types.boolean, false),
    loadingEmailVerification: types.optional(types.boolean, false),
    loadingLogin: types.optional(types.boolean, false),
  })
  .views((self) => ({
    get getPostData() {
      return toJS(self.postData);
    },
    get getSearchData() {
      return toJS(self.searchData);
    },
    get getUserData() {
      return toJS(self.userData);
    },
    get getAllUserData() {
      return toJS(self.allUserData);
    },
    get getAllPostData() {
      return toJS(self.allPostData);
    },
    
  }))
  .actions((self) => {
    const onUserLogin = flow(function* (data, navigate) {
      self.loadingLogin = true;
      let response = null;
      try {
        const res = yield userApi.login(data);
          localStorage.setItem("token", res?.token);
          localStorage.setItem("userId", res?.result?.id);
          localStorage.setItem("blogRole", res?.result?.role);
          response = res;
          if(response?.success){
            notification.success("Signed in successfully");
            navigate(`${constRoute?.dashboard}`);
          }
          self.userData = response?.result
      } catch (error) {
        catchError(error, "onUserLogin");
      } finally {
        self.loadingLogin = false;
      }
    });

    const getAllPaginatedPosts = flow(function* (data) {
      // self.allPostLoading = true;
      let response = null;
      try {
        const res = yield userApi.getAllPostsPaginated(data)
        response = res;
        if(res?.success){
          self.postData = response?.posts;
        }
      } catch (error) {
        catchError(error, "getAllPaginatedPosts");
        // response = error.response;
      } finally {
        // self.allPostLoading = false;
        return response;
      }
    });

    const getAllPosts = flow(function* (navigate = null) {
      self.allPostLoading = true;
      let response = null;
      try {
        const res = yield userApi.loadAllPosts();
        response = res;
        self.allPostData = res;
      } catch (error) {
        catchError(error, "getAllPosts");
        response = error.response;
      } finally {
        self.allPostLoading = false;
        return response;
      }
    });
    const getAllUsers = flow(function* () {
      self.allUsersLoading = true;
      let response = null;
      try {
        const res = yield userApi.loadAllUsers();
        response = res;
        self.allUserData = res?.results;
      } catch (error) {
        catchError(error, "getAllUsers");
        response = error.response;
      } finally {
        self.allUsersLoading = false;
        return response;
      }
    });
    

    const likePosts = flow(function* (data) {
      // self.allPostLoading = true;
      let response = null;
      try {
        // self.allPostLoading = true;
        const res = yield userApi.likedPosts(data);
        response = res;
        if(res?.success){
          notification.success(res?.message);
        }
      } catch (error) {
        if(error?.response?.data?.error?.message){
          notification.error(error?.response?.data?.error?.message)
        }else{
          catchError(error, "likePosts");
        }
      } finally {
        // self.allPostLoading = false;
        return response;
      }
    });

    const createPost = flow(function* (data) {
      self.loadingCreatePost = true;
      let response = null;
      try {
        const res = yield userApi.createPosts(data);
        response = res;
        if(res?.success){
          notification.success(res?.message);
        }
      } catch (error) {
        notification.error(error?.response?.data?.error?.message);
        catchError(error, "createPost");
        response = error.response;
      } finally {
      self.loadingCreatePost = false;
        return response;
      }
    });

    const onSignedUp = flow(function* (data, navigate = null) {
      let response = null;
      try {
        const res = yield userApi.signedUpUser(data);
        response = res;
        if(response?.success){
          localStorage.removeItem('signUpPayload')
          notification.success(res?.message);
          navigate(`${constRoute?.login}`)
        }
      } catch (error) {
        notification.error(error?.response?.data?.message);
        // catchError(error, "createPost");
        response = error.response;
      } finally {
        return response;
      }
    });

    const loadCommentPost = flow(function* (data) {
      let response = null;
      try {
        const res = yield userApi.commentPosting(data);
        response = res;
        if(res?.success){
          notification.success(res?.message);
        }
      } catch (error) {
        notification.error(error?.response?.data?.message);
        // catchError(error, "createPost");
        response = error.response;
      } finally {
        return response;
      }
    });

    const deletePost = flow(function* (data) {
      self.loadingDeletePost = true;
      let response = null;
      try {
        const res = yield userApi.deletePostSpecific(data);
        response = res;
        if(res?.success){
          notification.success(res?.message);
        }
      } catch (error) {
        notification.error(error?.response?.data?.message);
        // catchError(error, "createPost");
        response = error.response;
      } finally {
      self.loadingDeletePost = false;
      return response;
      }
    });

    const deleteUser = flow(function* (data) {
      self.loadingDeleteUser = true;
      let response = null;
      try {
        const res = yield userApi.loadDeleteUser(data);
        response = res;
        if(res?.success){
          notification.success(res?.message);
        }
      } catch (error) {
        notification.error(error?.response?.data?.message);
        catchError(error, "deleteUser");
        response = error.response;
      } finally {
      self.loadingDeleteUser = false;
      return response;
      }
    });

    const loadSerachPost = flow(function* (data) {
      let response = null;
      self.loadingSearchData = true
      try {
        const res = yield userApi.serachPost(data);
        response = res;
        if(res?.success){
          // notification.success(res?.message);
          self.searchData = response?.results;
        }
      } catch (error) {
      self.loadingSearchData = false
      notification.error(error?.response?.data?.message);
        // catchError(error, "createPost");
        response = error.response;
      } finally {
      self.loadingSearchData = false
      return response;
      }
    });

    const loadResetPassEmailVerification = flow(function* (data) {
      let response = null;
      self.loadingPasswordResetEmail = true
      try {
        const res = yield userApi.passwordResetEmail(data);
        response = res;
        if(response?.success) notification.success(response?.message)
      } catch (error) {
      self.loadingPasswordResetEmail = false
      notification.error(error?.response?.data?.message);
        catchError(error, "createPost");
        response = error.response;
      } finally {
      self.loadingPasswordResetEmail = false
      return response;
      }
    });

    const loadVerifyPasswordResetCode = flow(function* (data) {
      let response = null;
      self.loadingVerifyPasswordResetCode = true
      try {
        const res = yield userApi.verifyPasswordResetCode(data);
        response = res;
        if(response?.success) notification.success(response?.message)
      } catch (error) {
      self.loadingVerifyPasswordResetCode = false
      notification.error(error?.response?.data?.message);
        catchError(error, "loadVerifyPasswordResetCode");
        response = error.response;
      } finally {
      self.loadingVerifyPasswordResetCode = false
      return response;
      }
    });

    const loadResetPassword = flow(function* (data) {
      let response = null;
      self.loadingResetPassword = true
      try {
        const res = yield userApi.resetPassword(data);
        response = res;
        if(response?.success) notification.success(response?.message)
      } catch (error) {
      self.loadingResetPassword = false
      notification.error(error?.response?.data?.message);
        catchError(error, "loadResetPassword");
        response = error.response;
      } finally {
      self.loadingResetPassword = false
      return response;
      }
    });

     const onSignedUpEmailVerification = flow(function* (data) {
      let response = null;
      self.loadingEmailVerification = true
      try {
        const res = yield userApi.emailVerification(data);
        response = res;
      } catch (error) {
      self.loadingEmailVerification = false
      notification.error(error?.response?.data?.message);
        catchError(error, "loadResetPassword");
        response = error.response;
      } finally {
      self.loadingEmailVerification = false
      return response;
      }
    });

    const onSignedUpVerifyEmailSuccess = flow(function* (data) {
      let response = null;
      // self.loadingEmailVerification = true
      try {
        const res = yield userApi.verifyEmailSuccess(data);
        response = res;
      } catch (error) {
      // self.loadingEmailVerification = false
      notification.error(error?.response?.data?.message);
        catchError(error, "loadResetPassword");
        response = error.response;
      } finally {
      // self.loadingEmailVerification = false
      return response;
      }
    });
    
    return {
      getAllPosts,
      likePosts,
      onUserLogin,
      createPost,
      onSignedUp,
      loadCommentPost,
      deletePost,
      getAllPaginatedPosts,
      loadSerachPost,
      loadResetPassEmailVerification,
      loadVerifyPasswordResetCode,
      loadResetPassword,
      onSignedUpEmailVerification,
      onSignedUpVerifyEmailSuccess,
      getAllUsers,
      deleteUser
    };
  });

export function initUser() {
  return user.create({});
}
