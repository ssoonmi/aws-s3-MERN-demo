import axios from "axios";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const createUser = (user) => dispatch => {
  const { images, image, name, email } = user;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);

  // for multiple files
  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  // for single file
  if (image) formData.append("image", image);

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };

  return axios.post("/api/users", formData, config)
    .then(res => {
      const user = res.data;
      return dispatch({ type: RECEIVE_USER, user });
    });
};

export const fetchUsers = () => dispatch => {
  return axios.get("/api/users")
    .then(res => {
      const users = res.data;
      return dispatch({ type: RECEIVE_USERS, users});
    });
};