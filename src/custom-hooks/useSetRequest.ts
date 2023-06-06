/* eslint-disable prettier/prettier */
import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setAllGlobalState } from "../store"
import { Form } from "antd"
import React from "react"

export const useSetRequest = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => {
    return state.global
  })
  
  const [submittable, setSubmittable] = React.useState(false)

  // Watch all values
  const values = Form.useWatch([], form)

  React.useEffect(() => {
    form.validateFields().then(
      () => {
        setSubmittable(true)
      },
      () => {
        setSubmittable(false)
      },
    )
  }, [form, values])
  
  const setRequest = useCallback(
    (value: any, key: keyof any) => {
      dispatch(
        setAllGlobalState({
            ...state,
            createNewTask: {
                ...state.createNewTask,
                [key]: value
            }
        })
      )
    },
    [dispatch, state],
  )
  
  return {
    setRequest,
    form,
    submittable
  }
}
