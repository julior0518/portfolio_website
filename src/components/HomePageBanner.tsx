import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import nebulaImage from "../images/nebula.jpg";
import julioImage from "../images/julio.png";

export const HomePageBanner: React.FC = () => {
	const [isLarge, setIsLarge] = useState(false);
	const handleClick = () => {
		setIsLarge(!isLarge);
	};
	return (
		<Box
			width="100%"
			display="flex"
			marginBottom={2}
			sx={{
				background: "#0000001a",
				borderRadius: 2,
				boxShadow: "4px  4px 8px #0000004d",
				backgroundImage: `url(${nebulaImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",

				height: isLarge ? "600px" : "300px",
				transition: "width 0.5s, height 0.5s",
			}}
			onClick={handleClick}
		>
			<Box
				display={"flex"}
				sx={{
					borderRadius: 2,
					background:
						"linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
				}}
			>
				<Box width="70%" height={"100%"}>
					<Typography variant="h2" color="#ffffff" padding={4}>
						Hi, I am a web developer
					</Typography>
					<Typography variant="body1" color="#ffffff" padding={4}>
						My name is Julio
					</Typography>
				</Box>
				<Box
					sx={{
						width: "35%",
						height: "100%",
						aspectRatio: 1,
						overflow: "hidden",
						borderRadius: 2,
					}}
				>
					<img
						src={julioImage}
						alt="julio's image"
						style={{
							width: isLarge ? "200%" : "100%",
							height: "auto",
							opacity: isLarge ? 0 : "95%",
							transition: "width .5s, height .5s, opacity 0.4s ",
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};
