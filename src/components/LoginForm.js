import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate, Navigate } from "react-router-dom";

import { login } from "../redux/actions/userActions";

import { AiFillCloseCircle } from "react-icons/ai";
import { Spinner } from "react-bootstrap";

const validationSchema = yup.object({
	email: yup
		.string()
		.email("Please Provide valid Email")
		.required("Email is required..!!"),
	password: yup
		.string("Please Provide Correct Password")
		.required("Password is required..!!"),
});

function LoginForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	/* const [error, setError] = useState(""); */
	const [success, setSuccess] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const { error } = useSelector((state) => state.auth);

	const onSubmit = async (values) => {
		try {
			setLoading(true);
			await dispatch(login({ ...values })).then(() => navigate("/feeds"));

			setSuccess(true);
		} catch (err) {
			console.log("err1", err);
		}
	};

	console.log("err1", error);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validateOnBlur: true,
		validationSchema,
		onSubmit,
	});

	return (
		<div className="auth-form-sec">
			<div className="auth-topbar">
				<FaLinkedin />
			</div>
			<div className="auth-form-inn">
				<div className="auth-form">
					<h2>Login</h2>
					<p className="sub-heading">
						New User? Please <Link to="/register">Register</Link>
					</p>
					{error.authError ? (
						<span className="error-msg text-danger">
							<AiFillCloseCircle /> {error.authError}
						</span>
					) : null}
					{success ? (
						<span className="success-msg text-success">Logged In..!!!</span>
					) : null}
					<form onSubmit={formik.handleSubmit}>
						<input
							type="text"
							name="email"
							className="form-control"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Enter Email.."
						/>
						{formik.errors.email ? (
							<span className="text-danger error-msg">
								{formik.errors.email}
							</span>
						) : null}
						<input
							type="password"
							name="password"
							className="form-control"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Enter Password.."
						/>
						{formik.errors.password ? (
							<span className="text-danger error-msg">
								{formik.errors.password}
							</span>
						) : null}
						<div className="text-center">
							<button
								type="submit"
								className="btn btn-info btn-comm mt-3"
								disabled={!formik.isValid}
							>
								{isLoading && (
									<Spinner
										as="span"
										animation="border"
										size="sm"
										role="status"
										aria-hidden="true"
										style={{ display: "inline-block", marginRight: "5px" }}
									/>
								)}
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
