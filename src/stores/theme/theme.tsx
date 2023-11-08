import { flow, types } from "mobx-state-tree";
import { toJS } from "mobx";
import { catchError } from "@utils/common-functions";
import { themeApi } from "@api";
import { notification } from "@utils/notifications";

export const theme = types
  .model({
    selectedTheme: types.optional(types.maybeNull(types.string), localStorage.getItem("theme")),
    loadingChangeTheme: types.optional(types.boolean, false),

  })
  .views((self) => ({
    get getSelectedTheme() {
      return toJS(self.selectedTheme);
    },
  }))
  .actions((self) => {
    const changeTheme = flow(function* (data) {
      let response = null
      try {
        self.selectedTheme = data
        response = data
        yield data
      } catch (error) {
        catchError(error, "changeTheme");
      } finally {
        return response
      }
    });

    const updateDefaultTheme = flow(function* (data) {
      self.loadingChangeTheme = true;
      let response = null;
      try {
        const res = yield themeApi.updateTheme(data);
        response = res;
        if (res?.success) {
          notification.success("Default theme has been settled for all types of users");
        }
      } catch (error) {
        catchError(error, "updateDefaultTheme");
      } finally {
        self.loadingChangeTheme = false;
        return response;
      }
    });


    return {
      changeTheme,
      updateDefaultTheme,
    };
  });

export function initTheme() {
  return theme.create({});
}
