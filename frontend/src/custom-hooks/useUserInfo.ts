/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react"
import { Apiresponse } from "../models/client/response"
import { Encryption } from "../common/components/encryption/encryption"
import { useNavigate } from "react-router-dom"
import { ROUTE_NAMES } from "../utils/constants"

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<Apiresponse.AuthInfo>(
    new Apiresponse.AuthInfo(),
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("*****")) {
      const response: Apiresponse.AuthInfo = JSON.parse(
        Encryption.decrypt(sessionStorage.getItem("*****") as string)
      )
      setUserInfo(response)
    } else {
      navigate(ROUTE_NAMES.AUTHENTICATION.SIGN_IN)
    }
  }, [navigate])


  return { userInfo }
}

export default useUserInfo
