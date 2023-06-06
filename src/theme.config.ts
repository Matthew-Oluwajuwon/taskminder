/* eslint-disable prettier/prettier */
import { ThemeConfig } from "antd"

export const getThemeConfig = (state: any): ThemeConfig | undefined => {
  return {
    token: {
      colorPrimary: "#E15341",
    },
    components: {
      Modal: {
        borderRadiusLG: 0,
        borderRadiusSM: 0,
        borderRadiusXS: 0,
        contentBg: state.value === "dark" ? "#0E0D0D" : "#ffffff"
      },
    },
  }
}
