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
          colorPrimary: "#C42C27",
          colorPrimaryHover: "#D32F2F",
          colorPrimaryActive: "#9E1F1A",
          colorLink: "#C42C27",
          colorLinkHover: "#D32F2F",
          colorLinkActive: "#9E1F1A",
          colorSuccess: "#059669",
          colorWarning: "#D4AF37",
          colorInfo: "#071C3B",
          borderRadius: 8,
          fontFamily:
            "var(--font-geist-sans), Arial, -apple-system, BlinkMacSystemFont, sans-serif",
        },
        components: {
          Button: {
            colorPrimary: "#C42C27",
            colorPrimaryHover: "#D32F2F",
            colorPrimaryActive: "#9E1F1A",
            borderRadius: 8,
          },
          Menu: {
            darkItemBg: "#071C3B",
            darkSubMenuItemBg: "#05152E",
            darkItemSelectedBg: "rgba(196, 44, 39, 0.22)",
            darkItemSelectedColor: "#FFFFFF",
            darkItemHoverColor: "#FF8A80",
            darkItemColor: "#CBD5E1",
          },
          Layout: {
            siderBg: "#071C3B",
            headerBg: "#FFFFFF",
            bodyBg: "#F1F5F9",
          },
          Tabs: {
            colorPrimary: "#C42C27",
            inkBarColor: "#C42C27",
            itemSelectedColor: "#C42C27",
            itemHoverColor: "#D32F2F",
          },
          Input: {
            activeBorderColor: "#C42C27",
            hoverBorderColor: "#D32F2F",
          },
          Segmented: {
            itemSelectedBg: "#FFFFFF",
            itemSelectedColor: "#C42C27",
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
