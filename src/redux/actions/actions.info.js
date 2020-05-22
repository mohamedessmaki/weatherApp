 

export const SET_STATUS = "SET_STATUS"
export const SET_LOADING = "SET_LOADING"
export const SET_PENDING = "SET_PENDING"
 

export const setStatus = status => ({ type: SET_STATUS, status })

export const setLoading = loading => ({ type: SET_LOADING, loading })

export const setPending = pending => ({ type: SET_PENDING, pending })