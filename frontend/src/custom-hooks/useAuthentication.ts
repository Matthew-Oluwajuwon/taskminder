/* eslint-disable prettier/prettier */
import { useCallback, useEffect } from "react"
import { Apiresponse } from "../models/client/response"
import Notify from "../common/components/notification/notify"
import {
  INITIALIZER_TYPE,
  NOTIFICATION_TYPE,
  ROUTE_NAMES,
} from "../utils/constants"
import { TypeOptions } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Encryption } from "../common/components/encryption/encryption"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react"
import { SerializedError } from "@reduxjs/toolkit"

const useAuthentication = (
  data: any,
  isLoading: boolean,
  error: FetchBaseQueryError | SerializedError | undefined,
  isError: boolean,
  initializer?: string,
) => {
  const navigate = useNavigate()
  const authenticate = useCallback(() => {
    const response: Apiresponse.API = data
    if (data && !isLoading) {
      Notify(
        NOTIFICATION_TYPE.SUCCESS as TypeOptions,
        response?.responseMessage as string,
      )
      sessionStorage.setItem("*****", Encryption.encrypt(response.data))
      if (response.data?.token) {
        sessionStorage.setItem("***", response.data?.token)
      }
      navigate(
        initializer === INITIALIZER_TYPE.SIGNUP || !response.data?.isVerified
          ? ROUTE_NAMES.AUTHENTICATION.OTP_VERIFICATION
          : ROUTE_NAMES.PROTECTED_ROUTES.DASHBOARD,
        {
          replace: true,
        },
      )
    } else if (isError) {
      if ("data" in error!) {
        const err: Apiresponse.API = error?.data as Apiresponse.API
        // Access the 'data' property safely
        Notify(
          NOTIFICATION_TYPE.ERROR as TypeOptions,
          err?.responseMessage as string,
        )
      }
    }
  }, [data, error, initializer, isError, isLoading, navigate])

  useEffect(() => {
    authenticate()
  }, [authenticate])
}

export default useAuthentication
