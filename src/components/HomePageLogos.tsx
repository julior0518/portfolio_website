import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import angular from "../images/angular_logo.png";

import arduino from "../images/arduino_logo.png";
import aws from "../images/aws_logo.png";
import csharp from "../images/csharp_logo.png";
import cplus from "../images/cplus_logo.png";
import css from "../images/css_logo.png";
import dart from "../images/dart_logo.png";
import figma from "../images/figma_logo.png";
import firbase from "../images/firebase_logo.png";
import flutter from "../images/flutter_logo.png";
import git from "../images/git_logo.png";
import github from "../images/github_logo.png";
import graphql from "../images/Graphql_logo.png";
import html from "../images/html_logo.png";
import js from "../images/js_logo.png";
import material from "../images/materialUi_logo.png";
import mongo from "../images/mongoDB_log.jpg";
import net from "../images/net_logo.png";
import next from "../images/next_logo.png";
import postgress from "../images/postgressSQL_logo.png";
import python from "../images/python_logo.png";
import react from "../images/react_logo.png";
import rxjs from "../images/rxjs_logo.png";
import sanity from "../images/sanity_logo.png";
import solidity from "../images/solidity_logo.png";
import sql from "../images/sql_logo.png";
import strapi from "../images/strapi_logo.png";
import vue from "../images/vue_logo.png";
import { relative } from "path";

export const HomePageLogos: React.FC = () => {
	const logos = [
		{ image: arduino, name: "arduino" },
		{ image: aws, name: "aws" },
		{ image: csharp, name: "C#" },
		{ image: cplus, name: "C++" },
		{ image: css, name: "css" },
		{ image: dart, name: "dart" },
		{ image: figma, name: "figma" },
		{ image: firbase, name: "firebase" },
		{ image: flutter, name: "flutter" },
		{ image: git, name: "git" },
		{ image: github, name: "github" },
		{ image: graphql, name: "graphql" },
		{ image: html, name: "html" },
		{ image: js, name: "js" },
		{ image: material, name: "materialUi" },
		{ image: mongo, name: "mongoDB" },
		{ image: net, name: "net" },
		{ image: next, name: "next" },
		{ image: postgress, name: "postgressSQL" },
		{ image: python, name: "python" },
		{ image: react, name: "react" },
		{ image: rxjs, name: "rxjs" },
		{ image: sanity, name: "sanity" },
		{ image: solidity, name: "solidity" },
		{ image: sql, name: "sql" },
		{ image: strapi, name: "strapi" },
		{ image: vue, name: "vue" },
	];

	return (
		<Box
			display={"flex"}
			alignItems="start"
			maxWidth={"lg"}
			overflow={"scroll"}
			sx={{
				"&::-webkit-scrollbar": {
					width: "8px",
				},
			}}
		>
			<Box
				sx={{
					position: "absolute",
				background: "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(255, 255, 255, 1))",
					height: '90px',
					width: "80px",
					zIndex: 10, 
				}}
			/>
				<Box
				sx={{
					position: "absolute",
				background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 1))",
					height: '90px',
					width: "80px",
					zIndex: 10, 
					right: 180
				}}
			/>
			

			{logos.map((logo, i) => (
				<Box
					key={i}
					sx={{
						minWidth: "40px",
						height: "40px",
						borderRadius: "50%",
						boxShadow: "4px 4px 8px #0000002a",
						border: "0.1px solid #0000002a",
						margin: 1,
						marginLeft: i == 0 ? 6 : 1,
						marginRight: i == (logos.length - 1) ? 6 : 1,
						padding: 1,
						display: "flex",
					
					}}
				>
					<img
						src={logo.image}
						style={{
							borderRadius: "50%",
							objectFit: "contain",
							width: "100%",
							height: "100%",
						}}
					/>
				</Box>
			))}
		

		</Box>
	);
};
