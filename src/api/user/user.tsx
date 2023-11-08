import { getAuthorizationHeader } from "../common-utils";
import axios from "axios";
import { baseUrl } from "../const";
import { BaseApi } from "../baseApi";

class UserApi extends BaseApi {

  login = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  loadAllPosts = async () => {
    try {
      const response = await axios.get(`${baseUrl}getAllPosts`, {
        headers: {
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  loadAllUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}getAllUsers`, {
        headers: {
          "Content-Type": "application/json",
          authorization: getAuthorizationHeader()
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  getAllPostsPaginated = async (data) => {
    try {
      const response = await axios.get(`${baseUrl}getAllPostsPaginated?page=${data?.page}&pageSize=${data?.pageSize}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: getAuthorizationHeader()
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  likedPosts = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}likePost`, data,{
        headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  createPosts = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}createPost`, data,{
        headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  signedUpUser = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}register`, data,{
        headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  commentPosting = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}commentPost`, data,{
        headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  deletePostSpecific = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}deletePost`,data,{
        headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  loadDeleteUser = async (data) => {
    try {
      const response = await axios.delete(`${baseUrl}deleteUser/${data?.id}`,{
        headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  serachPost = async (data) => {
    try {
      const response = await axios.get(`${baseUrl}search/post?q=${data}`,{
        headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  passwordResetEmail = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}passwordResetEmail`,data,{
        // headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  verifyPasswordResetCode = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}verifyPasswordResetCode`,data,{
        // headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  resetPassword = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}resetPassword`,data,{
        // headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  emailVerification = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}email-verification`,data,{
        // headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  verifyEmailSuccess = async (data) => {
    try {
      const response = await axios.get(`${baseUrl}verify-email-success/?token=${data?.token}`,{
        // headers: { authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
}

export default UserApi;
