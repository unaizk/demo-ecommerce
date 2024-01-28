import { apiSlice } from "./apiSlice";

const USER_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (data) =>({
                url : `${USER_URL}/auth`,
                method : 'POST',
                body : data
            })
        }),
        register : builder.mutation({
            query:(data)=>({
                url : `${USER_URL}`,
                method : 'POST',
                body : data
            })
        }),
        logout : builder.mutation({
            query : ()=>({
                url : `${USER_URL}/logout`,
                method : 'POST'
            })
        }),
        getListedProducts : builder.mutation({
            query : ()=>({
                url : `${USER_URL}/listed-products`,
                method : 'GET'
            })
        }),
    })
})


export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useGetListedProductsMutation} = userApiSlice