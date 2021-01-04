import jsonPlaceholder from "../apis/jsonPlaceholder";
// import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*

call function with id fetchUser(2) that will return 


const fetchUser = function(id) {
  async function(dispatch) {
    const response = await jsonPlaceholder.get('users/3');
    dispatch({type: "FETCH_USER", payload: response.data})
  }
}

*/

/* 
Memoize way of solving over-fetching isse 
*/

// Function that returns a function that calls a function.

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
