import { ThemeConfig } from "antd"

export const getThemeConfig = (state: string): ThemeConfig | undefined => {
    return {
        token: {
            colorPrimary: "#E15341"
        },
        components: {
            Modal: {
                borderRadiusLG: 0,
                borderRadiusSM: 0,
                borderRadiusXS: 0
            }
        }
    }
}