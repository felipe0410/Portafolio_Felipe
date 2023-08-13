"use client";
import { Box } from "@mui/system";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  const icons = [
    "/icons/aws.svg",
    "/icons/JS.svg",
    "/icons/phyton.svg",
    "/icons/docker.svg",
    "/icons/ML.svg",
    "/icons/react.svg",
  ];
  return (
    <main
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          backgroundImage: { sm: `url('/imgs/home1.svg')` },
          backgroundRepeat: "no-repeat",
          height: "90%",
          width: "100%",
          backgroundSize: "contain",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: { xs: "center", sm: "flex-end" },
        }}
        id={"container text"}
      >
        <Box
          width={{ md: "55%", lg: "70%" }}
          marginTop={{ sm: "60px" }}
          sx={{
            height: { xs: "55%", sm: "70%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxHeight: { xs: "295px", sm: "fit-content" },
            marginTop: { xs: "20px", sm: "0" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box id="container">
            <Typography
              sx={{
                color: "#C7F4EC",
                fontFamily: "Poppins",
                fontSize: { xs: "24px", sm: "36px" },
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
              }}
            >
              ¡HELLO! I AM
            </Typography>
            <Typography
              sx={{
                color: "#00FFD1",
                fontFamily: "Poppins",
                fontSize: { xs: "36px", sm: "64px" },
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                marginTop: "4px",
                marginBottom: "40px",
              }}
            >
              FELIPE MONTAÑA{" "}
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Poppins",
                fontSize: { xs: "15px", sm: "30px" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              DEVELOPER WEB FULL STACK / ML INGINEER{" "}
            </Typography>
          </Box>
          <Box alignSelf={{ md: "flex-end", lg: "center" }}>
            <Box>
              <Typography
                sx={{
                  color: "#C7F4EC",
                  fontFamily: "Poppins",
                  fontSize: { xs: "24px", sm: "48px" },
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Skills
              </Typography>
              <Box
                sx={{ display: "flex", marginTop: "10px", flexWrap: "wrap" }}
              >
                {icons.map((iconSrc, i) => (
                  <Box key={i} sx={{ marginRight: "20px" }}>
                    <Box
                      component={"img"}
                      src={iconSrc}
                      alt={`icon-${i}`}
                      width={{ xs: 35, sm: 70 }}
                      height={{ xs: 35, sm: 70 }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={{ sm: "none" }} width={"100%"}>
        <Box
          sx={{
            width: "100%",
            marginTop: "-222px",
          }}
          component={"img"}
          src={"/imgs/home1.svg"}
        />
      </Box>
    </main>
  );
}
