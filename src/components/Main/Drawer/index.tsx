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
import { useRouter } from "next/navigation";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

interface nested {
  isOpen: boolean;
  openName: string;
}

export default function Header(props: Props) {
  const router = useRouter();
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
          link: "classes",
        },
        {
          icons: "",
          name: "Sections",
          link: "sections",
        },
        {
          icons: "",
          name: "Subjects",
          link: "subject",
        },
        {
          icons: "",
          name: "Teachers",
          link: "teachers",
        },
        {
          icons: "",
          name: "Students",
          link: "students",
        },
        {
          icons: "",
          name: "Periods",
          link: "periods",
        },
        {
          icons: "",
          name: "Years",
          link: "years",
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
          link: "receipt",
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
          link: "dashboard/studentinquiry",
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
          link: "dashboard/receiptinquiry",
        },
      ],
    },
  ];

  const { window } = props;
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
          <Image
            src={require("../../../assets/Images/Logo.png")}
            width={50}
            height={50}
            alt="Logo"
          />
        </div>
        <div>
          <text style={{ color: "#12B27C", fontWeight: "bold", fontSize: 20 }}>
            Coaching App
          </text>
        </div>
      </div>
      <List>
        {Links.map((text, index) => {
          return (
            <div>
              <ListItem
                key={index}
                disablePadding
                style={{
                  borderRadius: 10,
                  color: "#12B27C",
                  margin: 5,
                }}
                onClick={() => setOpen({ openName: text.name, isOpen: true })}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <InboxIcon style={{ color: "#12B27C" }} />
                    ) : (
                      <MailIcon style={{ color: "#12B27C" }} />
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
                        disablePadding
                        style={{
                          paddingLeft: 15,
                          backgroundColor: "#12B27C",
                          borderRadius: 10,
                          color: "#fff",
                          margin: 5,
                        }}
                        onClick={() => router.push(`/${value.link}`)}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            {i % 2 === 0 ? (
                              <InboxIcon style={{ color: "#fff" }} />
                            ) : (
                              <MailIcon style={{ color: "#fff" }} />
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {/* {Links.map((val, index) => {
          return <div>{val.link}</div>;
        })} */}
      </Box>
    </Box>
  );
}
