const baseUrl = "https://jsonplaceholder.typicode.com/users";
export const getUsers = async () => {
  let users = null;
  try {
    let response = await fetch(baseUrl);
    users = await response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "LIST",
    payload: users || [],
  };
};

export const getUserDetails = async (id=0) => {
    let user = null;
    try {
      let response = await fetch(`${baseUrl}/${id}`);
      user = await response.json();
    } catch (err) {
      console.log(err);
    }
    return {
      type: "USER_DETAILS",
      payload: user || {},
    };
  };
// export const addUser = (user = {}) => {
//   return {
//     type: "USER_ADDED",
//     payload: users||[],
//   };
// };
