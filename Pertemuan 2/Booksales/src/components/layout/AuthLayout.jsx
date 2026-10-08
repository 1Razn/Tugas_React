import { Outlet } from "react-router";

export default function AuthLayout() {
	return (
		<div className="auth-container">
			<Outlet /> {/* Login atau Register dirender di sini */}
		</div>
	);
}