import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const Loginapi = createApi({
  reducerPath: 'Loginapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://getpuppeteer.com/api/',
  }),
  endpoints: builder => ({
    // Login
    getlogin: builder.mutation({
      query: newdata => {
        // console.log(newdata, 'data');
        return {
          url: 'login',
          method: 'POST',
          body: newdata,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
            
    // Register
    getRegister:builder.mutation({
      query: newreg => {
        console.log(newreg, 'data');
        return {
          url: 'register',
          method: 'POST',
          body: newreg,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
      //  send_phone_otp
    send_phone_otp:builder.mutation({
      query: send_no_otp => {
        // console.log(send_no_otp, 'data');
        return {
          url: 'send_phone_verification_otp',
          method: 'POST',
          body: send_no_otp,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
    // verify_phone_otp
    varifyotp:builder.mutation({
      query: varify_otp => {
        // console.log(send_no_otp, 'data');
        return {
          url: 'verify_phone_otp',
          method: 'POST',
          body: varify_otp,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
    // send_no_otp
    resendvarifyotp:builder.mutation({
      query: resend_otp => {
        // console.log(send_no_otp, 'data');
        return {
          url: 'resend_verification_otp',
          method: 'POST',
          body: resend_otp,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
      //  reset_password
    reset_password:builder.mutation({
      query: resetpassword => {
        // console.log(send_no_otp, 'data');
        return {
          url: 'reset_password',
          method: 'POST',
          body: resetpassword,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
    // log_out
    logout:builder.mutation({
      query:(token)=>({
        url:'logout',
        method:'GET',
        headers: {
         Authorization: 'Bearer ' + token,
        },

      })
   }),
  // creare_event
  creareevent:builder.mutation({
    query: createevents=> {
      // console.log(send_no_otp, 'data');
      return {
        url: 'create_events',
        method: 'POST',
        body: createevents,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
    },
  }),
  // get_member_events
  getmemberevents:builder.mutation({
    query: get_member=> {
      // console.log(send_no_otp, 'data');
      return {
        url: 'get_member_events',
        method: 'Get',
        body: get_member,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
    },
  }),
  })
});
export const {useGetloginMutation,useGetRegisterMutation,
  useSend_phone_otpMutation,useVarifyotpMutation,
useResendvarifyotpMutation,useReset_passwordMutation,
useCreareeventMutation,useGetmembereventsMutation,useLogoutMutation} = Loginapi;
