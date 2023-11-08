import { getAuthorizationHeader } from "../common-utils";
import axios from "axios";

import { BaseApi } from "../baseApi";
import { updateThemeUrl } from "@api/const";

class ThemeApi extends BaseApi {

  updateTheme = async (data) => {
    try {
      const response = await axios.post(updateThemeUrl, data, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export default ThemeApi;
