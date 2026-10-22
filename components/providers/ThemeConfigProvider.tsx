"use client";

import React from "react";
import { ConfigProvider } from "antd";

export default function ThemeConfigProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#C8232C",
          colorPrimaryHover: "#DC2626",
          colorPrimaryActive: "#991B1B",
          colorLink: "#071527",
          colorLinkHover: "#C8232C",
          colorLinkActive: "#991B1B",
          colorSuccess: "#0D9488",
          colorWarning: "#D4AF37",
          borderRadius: 8,
          fontFamily:
            "var(--font-geist-sans), Arial, -apple-system, BlinkMacSystemFont, sans-serif",
        },
        components: {
          Button: {
            colorPrimary: "#C8232C",
            colorPrimaryHover: "#DC2626",
            colorPrimaryActive: "#991B1B",
            borderRadius: 8,
          },
          Menu: {
            darkItemBg: "#071527",
            darkSubMenuItemBg: "#050E1A",
            darkItemSelectedBg: "rgba(200, 35, 44, 0.20)",
            darkItemSelectedColor: "#FFFFFF",
            darkItemHoverColor: "#FCA5A5",
            darkItemColor: "#CBD5E1",
          },
          Layout: {
            siderBg: "#071527",
            headerBg: "#FFFFFF",
            bodyBg: "#F4F6F9",
          },
          Tabs: {
            colorPrimary: "#C8232C",
            inkBarColor: "#C8232C",
            itemSelectedColor: "#C8232C",
            itemHoverColor: "#DC2626",
          },
          Input: {
            activeBorderColor: "#C8232C",
            hoverBorderColor: "#DC2626",
          },
          Segmented: {
            itemSelectedBg: "#FFFFFF",
            itemSelectedColor: "#C8232C",
          },
          Card: {
            borderRadiusLG: 10,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
