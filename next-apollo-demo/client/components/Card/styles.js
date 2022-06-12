import styled from "@emotion/styled";


export const H1 = styled("h1")({
   color: "#111",
   fontFamily: "'Helvetica Neue', sans-serif",
   fontSize: "70px",
   fontWeight: "bold",
   letterSpacing: "-1px",
   lineHeight: "1",
   textAlign: "center"
});

export const DEV = styled("div")({
  boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
  textAlign: "center",
  padding: "15px",
  marginBottom: "20px",
  display:"inline-block",
  width:"20%",
  marginRight:"30px",
  borderRadius:"15px",
  cursor:"pointer",
  fontFamily:"system-ui"
});

export const IMG = styled("img")({
  width: "70px",
  height: "70px"
});

export const ITEM = styled("div")({
  textAlign:"center",
  margin: "0 auto"
});
