import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./common/layout/auth";
import { OTPVerification, SignIn, SignUp } from "./views/authentication";
import { ConfigProvider } from "antd";
import { getThemeConfig } from "./theme.config";
import { PageLayout } from "./common/layout/page";
import { Dashboard, TaskExpanded } from "./views/dashboard";

const App = () => {
  return (
    <ConfigProvider theme={getThemeConfig("")}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
        </Route>
        <Route element={<PageLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:id" element={<TaskExpanded />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App
