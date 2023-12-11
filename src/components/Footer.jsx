const { Paper, Typography } = require("@mui/material");

export function Footer() {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          height: "70px",
          width: "100%",
          // background:
          //   "linear-gradient(56deg, rgba(189,34,195,1) 6%, rgba(34,193,195,1) 51%, rgba(163,189,107,1) 78%, rgba(253,187,45,1) 100%);",
          background: "gray",
          opacity: "0.5",
        }}>
        <Typography sx={{ fontSize: "30px", fontFamily: "cursive" }}>
          Footer
        </Typography>
      </Paper>
    </>
  );
}
