import request from "./request";

export const getAllUsers = async () => {
  return request.get("/users");
};

export const login = async (data) => {
  return request({
    url: "users/new",
    method: "POST",
    data,
  });
};

export const createUser = async (data) => {
  return request({
    url: "/users",
    method: "POST",
    data,
  });
};
