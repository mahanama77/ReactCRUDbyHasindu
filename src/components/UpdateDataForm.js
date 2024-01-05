import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { saveData } from "../services/saveData";
import { getDataById } from "../services/getDataById";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { updateData } from "../services/updateData";

export const UpdateDataForm = (props) => {
    const navigate = useNavigate();

    const location = useLocation();
    const receivedCustomerId = location.state.id;

	const [customerData, setCustomerData] = useState({
		fullname: "",
		city: "",
		dob: "",
		tp: "",
		email: "",
		address1: "",
		address2: "",
		nic: "",
		discount_id: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
        setCustomerData((prev) => {
            return{...prev, [name]: value};
        })
	};

	const handleSubmit = () => {
		const data = {
			Full_Name: customerData.fullname,
			City: customerData.city,
			DOB: customerData.dob,
			TP: customerData.tp,
			Email: customerData.email,
			Address1: customerData.address1,
			Address2: customerData.address2,
			NIC: customerData.nic,
			discount_id: customerData.discount_id
		};
        console.log(data);
        updateData(receivedCustomerId,data);
        navigate('/',{replace: true});
	};

    async function fetchCustomerDataById() {
		const result = await getDataById(receivedCustomerId);

		setCustomerData(prevData => ({
            ...prevData,
            fullname: result.Full_Name,
			city: result.City,
			dob: result.DOB,
			tp: result.TP,
			email: result.Email,
			address1: result.Address1,
			address2: result.Address2,
			nic: result.NIC,
		    discount_id: result.discount_id,

        }));  
	};


    useEffect(() => {
		fetchCustomerDataById(receivedCustomerId);
	}, []);

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			style={{ height: "100vh" }}
		>
			<Grid item xs={5}>
				<Paper style={{ padding: 20 }}>
					<h1>UPDATE CUSTOMER DATA</h1>
					
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										fullWidth
										label="Full Name"
										name="fullname"
										value={customerData.fullname}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										fullWidth
										label="City"
										name="city"
										value={customerData.city}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										fullWidth
										label="Date Of Birth"
										name="dob"
										value={customerData.dob}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										fullWidth
										label="Telephone"
										name="tp"
										value={customerData.tp}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										fullWidth
										label="NIC"
										name="nic"
										value={customerData.nic}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>

								<Grid item xs={8}>
									<TextField
										fullWidth
										label="E-mail"
										name="email"
										value={customerData.email}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Address 1"
										name="address1"
										value={customerData.address1}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Address 2"
										name="address2"
										value={customerData.address2}
										onChange={handleChange}
										margin="normal"
									/>
								</Grid>
							</Grid>
						</Box>

						<Button
							type="submit"
							variant="contained"
							color="primary"
							style={{ marginTop: 20 }}
                            size="large"
							disableElevation
                            onClick={handleSubmit}
						>
							SUBMIT
						</Button>
					
				</Paper>
			</Grid>
		</Grid>
	);
};

export default UpdateDataForm;
