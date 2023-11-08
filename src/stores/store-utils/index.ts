import { types } from "mobx-state-tree";

export const userModel = types.model({
  name: types.maybeNull(types.string),
  _id: types.maybeNull(types.string),
})
 
const commentModel = types.model({
  createdAt: types.maybeNull(types.string),
  text: types.maybeNull(types.string),
  _id: types.maybeNull(types.string),
})
export const postDataModel = types.model({
    title: types.maybeNull(types.string),
    img: types.maybeNull(types.string),
    imgId: types.maybeNull(types.string),
    content: types.maybeNull(types.string),
    user: types.maybeNull(userModel),
    _id: types.maybeNull(types.string),
    likes:types.maybeNull(types.array(types.string)),
    comments: types.maybeNull(types.array(commentModel))
  });

  export const allUserDataModel = types.model({
    address: types.maybeNull(types.string),
    contact: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    _id: types.maybeNull(types.string),
  })

  export const searcDataModel = types.model({
    title: types.maybeNull(types.string),
    content: types.maybeNull(types.string),
    user: types.maybeNull(userModel),
    _id: types.maybeNull(types.string),
    likes:types.maybeNull(types.array(types.string)),
    comments: types.maybeNull(types.array(commentModel))
  });
  

export const userDataModel = types.model({
  email: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  id: types.maybeNull(types.string),
})
  
  