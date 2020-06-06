import React, { useContext } from "react";

import ReactPDF from "@react-pdf/renderer";

import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Font,
	Image
} from "@react-pdf/renderer";

import nutricionistaBG from "../../../../assets/img/infoPics/nutricionista.jpg";
import masazeBG from "../../../../assets/img/infoPics/masaze.jpg";

Font.register({
	family: "Montserrat",
	weight: 500,
	src:
		"https://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYC3USBnSvpkopQaUR-2r7iU.ttf"
});

Font.register({
	family: "Montserrat",
	weight: 300,
	src:
		"https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3gnD-w.ttf)"
});

Font.register({
	family: "Montserrat",
	weight: 700,
	src:
		"https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.ttf"
});

const indigo = "#1e2732";
const orange = "#f85838";

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: indigo,
		color: "white",
		width: "100%",
		height: "100%"
	},
	sectionBanner: {
		display: "flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		fontFamily: "Montserrat",
		fontWeight: "bold"
	},
	sectionBottom: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		height: "60%"
	},
	infoTitle: {
		fontFamily: "Montserrat",
		fontWeight: "bold",
		fontSize: 21
	},
	infoBannerTitle: {
		fontFamily: "Montserrat",
		fontWeight: "bold",
		fontSize: 30,
		backgroundColor: "#f85838",
		padding: "10pt 15pt",
		margin: "10pt",
		marginBottom: "20pt",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		marginTop: "52%"
	},
	infoValue: {
		fontFamily: "Montserrat",
		fontWeight: "light",
		marginLeft: "20pt",
		fontSize: 21
	},
	infoContainer: {
		display: "flex",
		flexDirection: "row",
		marginBottom: "15pt"
	},
	jumboImg: {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "40%",
		objectFit: "cover"
	},
	desc: {
		fontFamily: "Montserrat",
		fontWeight: "normal",
		fontSize: 24
	},
	thanks: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "30pt"
	}
});

// Create Document Component
const ReservationEN = (props) => {
	const { formData } = props;

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{props.section == "Nutricionista" ? (
					<Image src={nutricionistaBG} style={styles.jumboImg} />
				) : (
					<Image src={masazeBG} style={styles.jumboImg} />
				)}

				<View style={styles.sectionBanner}>
					<Text style={styles.infoBannerTitle}>{props.section}</Text>
				</View>
				<View style={styles.sectionBottom}>
					<View>
						<View style={styles.thanks}>
							<Text style={styles.desc}>Thank you for the reservation!</Text>
							<Text style={styles.desc}>
								You can find your entered data below.
							</Text>
						</View>

						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>First name:</Text>
							<Text style={styles.infoValue}>{formData.firstName}</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Last name:</Text>
							<Text style={styles.infoValue}>{formData.lastName}</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Phone:</Text>
							<Text style={styles.infoValue}>{formData.phone}</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Date:</Text>
							<Text style={styles.infoValue}>{formData.date}</Text>
						</View>
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Brief description:</Text>
							<Text style={styles.infoValue}>{formData.description}</Text>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	);
};

export default ReservationEN;
