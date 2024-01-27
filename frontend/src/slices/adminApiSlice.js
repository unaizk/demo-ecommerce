import { apiSlice } from "./apiSlice";



export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        adminLogin : builder.mutation({
            query:(data)=>({
                url : `/api/admin/auth`,
                method : 'POST',
                body : data
            })
        }),
        adminRegister : builder.mutation({
            query:(data)=>({
                url : `/api/admin/`,
                method : 'POST',
                body : data
            })
        }),
        adminLogout : builder.mutation({
            query : ()=>({
                url : `/api/admin/logout`,
                method : 'POST'
            })
        }),
        productAdd : builder.mutation({
            query : (data)=>({
                url : `/api/admin/add-product`,
                method : 'POST',
                body : data
            })
        }),
        getProduct : builder.mutation({
            query : ()=>({
                url : `/api/admin/getAll-products`,
                method : 'GET',
            })
        }),
    })
})

export const  {useAdminLoginMutation , useAdminLogoutMutation , useAdminRegisterMutation, useProductAddMutation , useGetProductMutation} = adminApiSlice