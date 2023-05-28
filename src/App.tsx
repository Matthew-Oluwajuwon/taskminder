import { Route, Routes } from "react-router-dom"
import AuthLayout from "./common/layout/auth"
import { OTPVerification, SignIn, SignUp } from "./views/authentication"
import { ConfigProvider } from "antd"
import { getThemeConfig } from "./theme.config"
import { PageLayout } from "./common/layout/page"
import {
  CompletedTaskExpanded,
  CreateNewTask,
  Dashboard,
  OngoingTaskExpanded,
  UpcomingTaskExpanded,
} from "./views/dashboard"

const App = () => {
  return (
    <ConfigProvider theme={getThemeConfig("")}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
        </Route>
        <Route path="/dashboard" element={<PageLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="ongoing-task" element={<OngoingTaskExpanded />} />
          <Route path="completed-task" element={<CompletedTaskExpanded />} />
          <Route path="upcoming-task" element={<UpcomingTaskExpanded />} />
          <Route path="create-new-task" element={<CreateNewTask />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App
