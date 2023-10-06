import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { HomePageBanner } from "../components/HomePageBanner";
import { HomePageLogos } from "../components/HomePageLogos";


const HomePage: React.FC = () => {

	return (
		<Box>
			<HomePageBanner/>
            <HomePageLogos />
			<HomePageBanner/>

		</Box>
	);
};

export default HomePage;
