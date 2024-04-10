// import React from 'react';
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// // import { Box, Typography } from "@mui/material";
// function Footer() {
//     return (
//         <footer className="bg-dark text-white py-4">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12 text-center">
//                     <h4>SYV Biotech Private Limited</h4>
//                     <InstagramIcon />
//                     <TwitterIcon />
//                     <YouTubeIcon />
//                     © {new Date().getFullYear()} SYV Biotech Private Limited. All rights reserved.
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#707476", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
       
          <h4>SYV Biotech Private Limited</h4>
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          © {new Date().getFullYear()} SYV Biotech Private Limited. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
