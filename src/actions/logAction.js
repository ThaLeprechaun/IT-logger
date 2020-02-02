import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, UPDATE_LOG, SEARCH_LOGS, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT } from './types';

// export function getLogs(){
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

//Get logs from server
export function getLogs() {
  return async dispatch => {
    try {
      setLoading();

      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

// Add new log
export function addLog(log){
  return async dispatch => {
    try {
      setLoading();
  
      const res = await fetch("/logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_LOG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
} 

// Update log on server
export function updateLog(log){
  return async dispatch => {
    try {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
}

// search logs from server
export function searchLogs (text){
  return async dispatch => {
    try {
      setLoading();

      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_LOGS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.statusText
      });
    }
  };
}

// Delete log from server
export function deleteLog(id) {
  return async dispatch => {
    try {
      setLoading();

      await fetch(`/logs/${id}`, {
        method: "DELETE"
      });

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
}
// set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

// clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
