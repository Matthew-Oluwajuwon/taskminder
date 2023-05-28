/* eslint-disable prettier/prettier */
import { Button } from "antd"
import React from "react"

interface Props {
  label: string
}

export const SubmitButton: React.FC<Props> = ({ label }) => {
  return (
    <Button
      type="primary"
      htmlType="submit"
      className="bg-primary-color rounded-none flex items-center justify-center py-5 font-[Epilogue-600]"
      block
    >
      {label}
    </Button>
  )
}
