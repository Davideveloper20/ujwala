import { styled } from "@mui/system";

export const ButtonMain = styled("button")({
  // background: theme => theme.palette.primary.main,
  // color: theme => theme.palette.primary.contrastText,
  background: "white",
  color: "black",
  width: "100%",
  borderRadius: "3px",
  height: "30px",
  border: "0.5px solid slategrey",
  // border: "0.5px solid",
  cursor: "pointer",
  // "&:hover": { background: "#fff000" },
  "&:hover": { background: "#fff00038" },
  fontFamily: "Cinzel, serif",

  // fontFamily: "Montserrat, sans-serif",
  fontSize: "18px",
  fontWeight: 600,
  // "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },

  // fff00038  hsl(0deg 0% 0% / 16%)  hsl(0deg 0% 13% / 18%)
});

export const ButtonSecondary = styled("button")({
  // background: theme => theme.palette.primary.main,
  // color: theme => theme.palette.primary.contrastText,
  background: "white",
  color: "black",
  width: "100%",
  borderRadius: "3px",
  height: "30px",
  border: "0.5px solid slategrey",
  // border: "0.5px solid",
  cursor: "pointer",
  // "&:hover": { background: "#fff000" },
  // "&:hover": { background: "#fff00038" },
  "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },

  fontFamily: "Cinzel, serif",

  // fontFamily: "Montserrat, sans-serif",
  fontSize: "12px",
  fontWeight: 600,
  whiteSpace: "nowrap",

  // fff00038  hsl(0deg 0% 0% / 16%)  hsl(0deg 0% 13% / 18%)
});
