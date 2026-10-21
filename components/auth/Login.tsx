"use client";

import { Button, Card, Form, Input, Typography, message } from "antd";
import { useRouter } from "next/navigation";
import { useAdminLoginMutation } from "@/store/features/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/authSlice";
import { useEffect } from "react";
import Image from "next/image";

const { Title, Text } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [adminLogin, { isLoading }] = useAdminLoginMutation();

  const handleLogin = async (values: { email: string; password: string }) => {
    const email = values.email?.trim();
    const password = values.password?.trim();
    const deviceId = "web";
    try {
      const response = await adminLogin({
        email,
        password,
        deviceId,
      }).unwrap();

      const token =
        response.token ?? response.accessToken ?? response.data?.token ?? response.data?.accessToken;
      const username = response.data?.user?.name;
      if (!token) {
        message.error("Login failed: token not found in response.");
        return;
      }

      dispatch(setCredentials({ token, name: username }));
      message.success("Login successful.");
      router.push("/dashboard");
    } catch (error: unknown) {
      message.error(error instanceof Error ? error.message : "Invalid credentials");
    }
  };

  const adminToken = typeof window !== "undefined" ? sessionStorage.getItem("adminToken") : null;

  useEffect(() => {
    if (adminToken) {
      router.push("/dashboard");
    }
  }, [adminToken, router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width:"100%",
        background: "radial-gradient(ellipse at 50% 20%, #0D264D 0%, #071C3B 55%, #030C19 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 14,
          border: "1px solid rgba(196, 44, 39, 0.2)",
          borderTop: "4px solid #C42C27",
          boxShadow: "0 24px 48px -12px rgba(3, 12, 25, 0.65)",
          background: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            style={{
              width: 96,
              height: 96,
              margin: "0 auto 16px",
              borderRadius: "50%",
              boxShadow: "0 8px 24px rgba(7, 28, 59, 0.25), 0 0 0 2px rgba(196, 44, 39, 0.35)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
            }}
          >
            <Image
              src="/ramars_academy_emblem.png"
              alt="Ramar's Academy logo"
              width={96}
              height={96}
              priority
              unoptimized
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <Title level={3} style={{ margin: "0 0 4px", color: "#071C3B", fontWeight: 700 }}>
            Ramar's Academy
          </Title>

          <Text type="secondary" style={{ fontSize: 13, color: "#64748B" }}>
            NEET / JEE - Physics &bull; Admin Portal
          </Text>
        </div>

        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={handleLogin}
          autoComplete="on"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email.",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="admin@ramarsacademy.com"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password.",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            loading={isLoading}
            style={{
              height: 48,
              fontWeight: 600,
              fontSize: 15,
              marginTop: 12,
              background: "linear-gradient(135deg, #E53935 0%, #C42C27 100%)",
              border: "none",
              boxShadow: "0 4px 14px rgba(196, 44, 39, 0.35)",
            }}
          >
            Sign in
          </Button>
        </Form>
      </Card>
    </div>
  );
}
