import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const ReturnSections = (
  setSectionActive: any,
  sectionsHeader: any,
  sectionLinks: string[],
  sectionActive: number
) => {
  const styleTypographyHeader = {
    fontFamily: "Poppins",
    fontSize: { xs: "15px", sm: "20px" },
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "normal",
    ":hover": {
      oapacity: "50%",
    },
  };
  const iconsDrawer = [
    "/icons/drawer/home.svg",
    "/icons/drawer/projects.svg",
    "/icons/drawer/cerebro.svg",
    "/icons/drawer/email.svg",
  ];

  return sectionsHeader.map((e: any, i: any) => (
    <Box
      key={i}
      sx={{
        display: "flex",
        width: "100%",
        placeContent: "center",
        marginY: "30px",
      }}
    >
      <Box
        sx={{ display: { sm: "none" }, marginRight: "10px" }}
        component={"img"}
        src={iconsDrawer[i]}
      />
      <Link style={{ width: "70%" }} href={sectionLinks[i]} passHref>
        <Button
          onClick={() => setSectionActive(i)}
          sx={{
            color: sectionActive === i ? "#00223A" : "#fff",
            paddingX: { sm: "30px" },
            borderRadius: "50px",
            background: sectionActive === i ? "#1DFFD6" : "transparent",
            ":hover": {
              color: "#00223A",
              background: "#1dffd645",
              oapacity: "30%",
            },
          }}
        >
          <Typography sx={styleTypographyHeader}>{e}</Typography>
        </Button>
      </Link>
    </Box>
  ));
};

export default ReturnSections;
