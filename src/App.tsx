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
import { ROUTE_NAMES } from "./constants"
import { useAppSelector } from "./store/hooks"

const App = () => {
  const state = useAppSelector((state) => {
    return state.theme
  })
  return (
    <ConfigProvider theme={getThemeConfig(state)}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route
            path={ROUTE_NAMES.AUTHENTICATION?.SIGN_UP}
            element={<SignUp />}
          />
          <Route
            path={ROUTE_NAMES.AUTHENTICATION?.OTP_VERIFICATION}
            element={<OTPVerification />}
          />
        </Route>
        <Route
          path={ROUTE_NAMES.PROTECTED_ROUTES.DASHBOARD}
          element={<PageLayout />}
        >
          <Route index element={<Dashboard />} />
          <Route
            path={ROUTE_NAMES.PROTECTED_ROUTES.ONGOING_TASK}
            element={<OngoingTaskExpanded />}
          />
          <Route
            path={ROUTE_NAMES.PROTECTED_ROUTES.COMPLETED_TASK}
            element={<CompletedTaskExpanded />}
          />
          <Route
            path={ROUTE_NAMES.PROTECTED_ROUTES.UPCOMING_TASK}
            element={<UpcomingTaskExpanded />}
          />
          <Route
            path={ROUTE_NAMES.PROTECTED_ROUTES.CREATE_NEW_TASK}
            element={<CreateNewTask />}
          />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App
