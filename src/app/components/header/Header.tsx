"use client";
import {
  Box,
  IconButton,
  Drawer,
  List,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ReturnSections from "./sections";
type Flags = "us" | "es";

const Header = () => {
  const [flag, setFlag] = useState<Flags>("us");
  const [sectionActive, setSectionActive] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const arrayFlag = {
    us: "/icons/flagIcon/es.svg",
    es: "/icons/flagIcon/us.svg",
  };
  const sectionsHeader = ["HOME", "PROJECTS" /*"SKILLS"*/, "CONTACT"];
  const sectionLinks = ["/", "/projects" /*"/skills"*/, "/contact"];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const headerDesktop: any = () => {
    return (
      <Box
        id={"headerDesktop"}
        alignItems={"center"}
        display={"flex"}
        width={"70%"}
        height={"100px"}
        sx={{ justifyContent: "space-evenly", maxWidth: "900px;" }}
      >
        {ReturnSections(
          setSectionActive,
          sectionsHeader,
          sectionLinks,
          sectionActive
        )}
      </Box>
    );
  };

  const drawerResponsive: any = () => {
    return (
      <Box width={"90%"} marginTop={"10px"} marginLeft={"10px"}>
        <IconButton onClick={handleDrawerToggle}>
          <Box component={"img"} src="/icons/drawer/menu.svg" />
        </IconButton>
        <Drawer
          sx={{ width: "300px" }}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          PaperProps={{ style: { backgroundColor: "transparent" } }}
        >
          <List
            sx={{
              display: "block",
              background: "#274D69",
              width: "225px",
              height: "100%",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <Box sx={{ marginTop: "30px" }}>
              {ReturnSections(
                setSectionActive,
                sectionsHeader,
                sectionLinks,
                sectionActive
              )}
            </Box>
          </List>
        </Drawer>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: { xs: "space-between", sm: "center" },
      }}
    >
      <Box>{isMobile ? drawerResponsive() : headerDesktop()}</Box>
      <Box display={"none"}>
        <Button
          sx={{
            alignSelf: "center",
            position: { sm: "absolute" },
            right: "2%",
            top: { xs: "8px", sm: "15px" },
          }}
        >
          <Box
            width={{ xs: "40px", sm: "60px" }}
            src={arrayFlag[flag]}
            component={"img"}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
