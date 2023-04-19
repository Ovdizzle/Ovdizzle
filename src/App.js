import Navbar from "./Components/navbar components/Navbar";
import "./App.css";
import "tailwindcss/tailwind.css";
import Home from "./Components/app/home/Home.js";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import SamplePacks from "./Components/app/SoundsLayout";
import Sounds from "./Components/navbar components/Sounds";
import UploadContent from "./UploadContent";
import Join from "./Components/app/Join";
import PacksCard from "./Components/cards/PacksCard";
import { Card, createTheme, ThemeProvider } from "@mui/material";
import HeroSlide from "./slider/HeroSlide";
import Item from "./Components/cards/Item";
import CardArray from "./Components/cards/CardArray";
import SoundsLayout from "./Components/app/SoundsLayout";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#293d04",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  typography: {
    color: ["var(--secondary)"],
    fontFamily: [
      "calibri",
      "dynapuff",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: "0.75rem",
          wordSpacing: 1,
          letterSpacing: 0,
          // lineHeight: 1.25,
        },
      },
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "12pt",
            fontWeight: 400,
            color: "var(--binance_brightash)",
          },
        },
        {
          props: {
            variant: "h5",
          },
          style: {
            fontWeight: 600,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: "13pt",
            fontWeight: 400,
          },
        },
        {
          props: {
            variant: "poster",
          },
          style: {
            fontSize: 20,
            color: "red",
            fontWeight: 500,
            fontFamily: "",
          },
        },
        {
          props: {
            variant: "smallHeading",
          },
          style: {
            lineHeight: 1.25,
            fontWeight: 700,
            letterSpacing: "-.015em",
            color: "#121214",
            fontSize: "2.25rem",
            // color: "var(--binance_black)",
            fontWeight: 700,
            fontFamily: "",
          },
        },
      ],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sounds' element={<SoundsLayout />}>
            <Route path='packs' element={<CardArray />} />
            <Route path='packs/item' element={<Item />} />
          </Route>
          <Route path='/upload' element={<UploadContent />} />
          <Route path='/Join' element={<Join />} />
          <Route path='/hero' element={<HeroSlide />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
