"use client";
import { Box } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "next-i18next";

const Container = (children: any) => {
  const { i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Box>{children}</Box>
    </I18nextProvider>
  );
};

export default Container
