import { Box } from "@mui/system";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import FormContact from "./formContac";

export default function Home() {
  const icons = [
    {
      icon: "/icons/contact/phone.svg",
      label: "3144098591",
      link: "",
      href: "tel:3144098591",
    },
    {
      icon: "/icons/contact/email.svg",
      label: "andres.montana.r4@gmail.com",
      link: "",
      href: "mailto:andres.montana.r4@gmail.com",
    },
    {
      icon: "/icons/contact/github.svg",
      label: "github.com/felipe0410",
      link: "https://github.com/felipe0410?tab=repositories",
      href: "https://github.com/felipe0410?tab=repositories",
    },
    {
      icon: "/icons/contact/linkedin.svg",
      label: "linkedin.com/in/felipe-montaña/",
      link: "https://www.linkedin.com/in/felipe-monta%C3%B1a/",
      href: "https://www.linkedin.com/in/felipe-monta%C3%B1a/",
    },
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
          backgroundImage: { lg: `url('/imgs/contact.svg')` },
          backgroundRepeat: "no-repeat",
          height: "90%",
          width: "100%",
          backgroundSize: "contain",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundPosition: "right",
        }}
      >
        <Box
          width={{sm:"90%"}}
          sx={{
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            id="form"
            marginBottom={"20px"}
            sx={{
              alignSelf: { xs: "center", lg: "auto" },
              width: { xs: "70%", lg: "auto" },
            }}
          >
            <FormContact />
          </Box>
          <Box
            width={"100%"}
            alignSelf={"flex-start"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box width={{ xs: "70%", lg: "100%" }}>
              {icons.map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    marginRight: "20px",
                    display: "flex",
                    marginY: "20px",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={e.icon}
                    alt={`icon-${i}`}
                    width={40}
                    height={40}
                  />
                  <a
                    target="_blank"
                    href={e.href}
                    style={{
                      marginLeft: "20px",
                      color: "#FFF",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontFamily: "Poppins",
                        fontSize: { xs: "10px", sm: "15px" },
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                      }}
                    >
                      {e.label}
                    </Typography>
                  </a>
                </Box>
              ))}
            </Box>
            <Box
              width={"100%"}
              sx={{
                display: { xs: "flex", lg: "none" },
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Box
                width={{ xs: "70%", sm: "initial" }}
                component={"img"}
                src="/imgs/contact.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
