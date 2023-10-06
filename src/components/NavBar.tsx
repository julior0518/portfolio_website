import { Box, Icon, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "@mui/icons-material/Home";

export const NavBar: React.FC = () => {
	return (
		<Box>
			<Box
				display="flex"
				justifyContent="space-between"
				padding={1}
				marginTop={1}
				marginBottom={1}
			>
				<Box></Box>
				<Box display={"flex"}>
					<RoundButton to={"/"} icon={<Home/>}/>
					<RoundButton to={"/"} icon={<Home/>}/>
					<RoundButton to={"/"} icon={<Home/>}/>

				</Box>
			</Box>
		</Box>
	);
};


interface FixedBoxProps {
	to: string;
	icon: ReactNode;
}

const RoundButton: React.FC<FixedBoxProps> = ({ to, icon }) => {
	return (
		<Box
			sx={{
				width: "50px",
				height: "50px",
				borderRadius: "50%",
				backgroundColor: "#0000000a",
				marginLeft: 2,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				boxShadow: "2px 2px 4px #0000002a",
			}}
		>
			<Link
				to={to}
				style={{
					textDecoration: "none",
					color: "#0000004d",
					paddingTop: 4,
					paddingLeft: 2,
				}}
			>
				{icon}
			</Link>
		</Box>
	);
};
