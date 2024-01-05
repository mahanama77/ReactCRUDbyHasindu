import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import { PageContainer } from "../Table.styles";

import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useState, useEffect } from "react";
import { getData } from "../services/getData";
import { deleteData } from "../services/deleteData";
import { useNavigate } from "react-router-dom";

export const DataList = () => {
	const navigate = useNavigate();
	const [customerData, setCustomerData] = useState([]);

	async function fetchCustomerData() {
		const result = await getData();
		console.log(result);
		setCustomerData(result);
	}

	useEffect(() => {
		fetchCustomerData();
	}, []);

	return (
		<>		
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{ height: "100vh" }}
			>
				<Grid item sx={{paddingBottom:2}}>
				<Button
						variant="contained"
						color="success"
						startIcon={<AddCircleOutlineIcon />}
						disableElevation
						onClick={() => navigate("/save", {
							replace: true})}
					>
						ADD RECORD
					</Button>
				</Grid>

				<Grid item xs={11}>
					<TableContainer component={Paper} sx={{ backgroundColor: "#e0e0e0" }}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Full Name</TableCell>
									<TableCell align="left">City</TableCell>
									<TableCell align="left">DOB</TableCell>
									<TableCell align="left">TP</TableCell>
									<TableCell align="left">Email</TableCell>
									<TableCell align="left">Address 1</TableCell>
									<TableCell align="left">Address 2</TableCell>
									<TableCell align="left">NIC</TableCell>
									<TableCell align="left">Discount ID</TableCell>
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{customerData.map((customer) => (
									<TableRow key={customer.idCustomer}>
										<TableCell component="th" scope="row">
											{customer.Full_Name}
										</TableCell>
										<TableCell align="left">{customer.City}</TableCell>
										<TableCell align="left">{customer.DOB}</TableCell>
										<TableCell align="left">{customer.TP}</TableCell>
										<TableCell align="left">{customer.Email}</TableCell>
										<TableCell align="left">{customer.Address1}</TableCell>
										<TableCell align="left">{customer.Address2}</TableCell>
										<TableCell align="left">{customer.NIC}</TableCell>
										<TableCell align="left">{customer.discount_id}</TableCell>

										<TableCell align="left">
											<Grid container spacing={1} justifyContent="flex-start">
												<Grid item>
													<Button
														variant="contained"
														disableElevation
														onClick={() => {
															navigate("/update", {
																replace: true,
																state: { id: customer.idCustomer },
															});
														}}
													>
														UPDATE
													</Button>
												</Grid>
												<Grid item>
													<Button
														variant="contained"
														color="error"
														startIcon={<DeleteIcon />}
														disableElevation
														onClick={() => {
															deleteData(customer.idCustomer);
														}}
													>
														DELETE
													</Button>
												</Grid>
											</Grid>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</>
	);
};
