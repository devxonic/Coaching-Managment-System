"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/Images/Logo.png";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  children: any;
}

interface nested {
  isOpen: boolean;
  openName: string;
}

export default function Header(props: Props) {
  const router = useRouter();
  let pathName = usePathname();
  pathName = pathName.substring(1);
  console.log(pathName.substring(1));
  let Links = [
    {
      icons: "",
      name: "Home",
      link: "Home",
    },
    {
      icons: "",
      name: "Setups",
      nested: [
        {
          icons: "",
          name: "Classes",
          link: "dashboard/classes",
        },
        {
          icons: "",
          name: "Sections",
          link: "dashboard/sections",
        },
        {
          icons: "",
          name: "Subjects",
          link: "dashboard/subject",
        },
        {
          icons: "",
          name: "Teachers",
          link: "dashboard/teachers",
        },
        {
          icons: "",
          name: "Students",
          link: "dashboard/students",
        },
        {
          icons: "",
          name: "Periods",
          link: "dashboard/periods",
        },
        {
          icons: "",
          name: "Years",
          link: "dashboard/years",
        },
      ],
    },
    {
      icons: "",
      name: "Transactions",
      nested: [
        {
          icons: "",
          name: "Receipt",
          link: "dashboard/receipt",
        },
      ],
    },
    {
      icons: "",
      name: "Inquiry",
      nested: [
        {
          icons: "",
          name: "Student Inquiry",
          link: "dashboard/student",
        },
      ],
    },
    {
      icons: "",
      name: "Reports",
      nested: [
        {
          icons: "",
          name: "Receipt Inquiry",
          link: "dashboard/receipt",
        },
      ],
    },
  ];

  const { window } = props;
  const { children } = props;
  const [open, setOpen] = React.useState<nested>();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            backgroundColor: "#12B27C",
            borderRadius: 500,
            padding: 10,
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src={logo} width={50} height={50} alt={"Logo"} />
        </div>
        <div>
          <p style={{ color: "#12B27C", fontWeight: "bold", fontSize: 20 }}>
            Coaching App
          </p>
        </div>
      </div>
      <List>
        {Links.map((text, index) => {
          return (
            <div key={index}>
              <ListItem
                disablePadding
                style={{
                  borderRadius: 10,
                  color: "#000",
                  // margin: 5,
                }}
                onClick={() => setOpen({ openName: text.name, isOpen: true })}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <InboxIcon style={{ color: "#000" }} />
                    ) : (
                      <MailIcon style={{ color: "#000" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
              {open?.isOpen && open?.openName == text.name
                ? text.nested?.map((value, i) => {
                    return (
                      <ListItem
                        key={i}
                        style={{
                          borderRadius: 10,
                          color: value.link === pathName ? "#fff" : "#000",
                          marginBottom: 5,
                          width: "95%",
                          marginLeft: "5%",
                          padding: 0,
                          backgroundColor:
                            value.link === pathName ? "#12B27C" : "#fff",
                        }}
                        onClick={() => router.push(`/${value.link}`)}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            {i % 2 === 0 ? (
                              <InboxIcon
                                style={{
                                  color:
                                    value.link === pathName ? "#fff" : "#000",
                                }}
                              />
                            ) : (
                              <MailIcon
                                style={{
                                  color:
                                    value.link === pathName ? "#fff" : "#000",
                                }}
                              />
                            )}
                          </ListItemIcon>
                          <ListItemText color="#fff" primary={value.name} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })
                : null}
            </div>
          );
        })}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#f2f2f2",
          color: "#000000",
          display: { sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Wellcome To Coaching App !
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>
  );
}
