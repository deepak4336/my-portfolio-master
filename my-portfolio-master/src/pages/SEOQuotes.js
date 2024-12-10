import React, { useState } from "react";
import seoconfig from "./seoconfig"; // Assuming seoconfig.js is in the same directory
import "../App.css"; // Importing the CSS file

function App() {
	const [selectedItems, setSelectedItems] = useState({
		branding: { package: [], individual: [], adhoc: [] },
		local_seo: { package: [], individual: [], adhoc: [] },
		digital_marketing: {
			link_building: { package: [], individual: [] },
			blog_writing: [],
			copy_writing: [],
			adhoc: [],
		},
	});

	// Handle selection logic for package, individual, and adhoc items
	const handleSelectItem = (category, type, name, price, subCategory) => {
		const updatedCategory = { ...selectedItems[category] };

		if (subCategory) {
			const updatedSubCategory = { ...updatedCategory[subCategory] };

			if (type === "package") {
				if (
					updatedSubCategory.package.length > 0 &&
					updatedSubCategory.package[0].name === name
				) {
					updatedSubCategory.package = []; // Deselect package if already selected
				} else {
					updatedSubCategory.package = [{ name, price }];
					updatedSubCategory.individual = []; // Deselect individual if package selected
				}
			} else if (type === "individual") {
				updatedSubCategory.package = []; // Deselect package if individual selected
				if (updatedSubCategory.individual.some((item) => item.name === name)) {
					updatedSubCategory.individual = updatedSubCategory.individual.filter(
						(item) => item.name !== name
					); // Uncheck individual item
				} else {
					updatedSubCategory.individual = [
						...updatedSubCategory.individual,
						{ name, price },
					];
				}
			}

			updatedCategory[subCategory] = updatedSubCategory;
		} else {
			if (type === "package") {
				if (
					updatedCategory.package.length > 0 &&
					updatedCategory.package[0].name === name
				) {
					updatedCategory.package = []; // Deselect package if already selected
				} else {
					updatedCategory.package = [{ name, price }];
					updatedCategory.individual = []; // Deselect individual if package selected
				}
			} else if (type === "individual") {
				updatedCategory.package = []; // Deselect package if individual selected
				if (updatedCategory.individual.some((item) => item.name === name)) {
					updatedCategory.individual = updatedCategory.individual.filter(
						(item) => item.name !== name
					); // Uncheck individual item
				} else {
					updatedCategory.individual = [
						...updatedCategory.individual,
						{ name, price },
					];
				}
			}
		}

		setSelectedItems({ ...selectedItems, [category]: updatedCategory });
	};

	const handleStandardActivitySelect = (category, key, price, subCategory) => {
		const updatedCategory = { ...selectedItems[category] };

		if (subCategory) {
			const updatedSubCategory = { ...updatedCategory[subCategory] };

			if (updatedSubCategory.individual.some((item) => item.name === key)) {
				updatedSubCategory.individual = updatedSubCategory.individual.filter(
					(item) => item.name !== key
				); // Deselect standard activity
			} else {
				updatedSubCategory.individual = [
					...updatedSubCategory.individual,
					{ name: key, price },
				];
			}

			updatedCategory[subCategory] = updatedSubCategory;
		} else {
			if (updatedCategory.individual.some((item) => item.name === key)) {
				updatedCategory.individual = updatedCategory.individual.filter(
					(item) => item.name !== key
				); // Deselect standard activity
			} else {
				updatedCategory.individual = [
					...updatedCategory.individual,
					{ name: key, price },
				];
			}
		}

		setSelectedItems({ ...selectedItems, [category]: updatedCategory });
	};

	// Calculate total cost
	const calculateTotal = () => {
		let total = 0;
		Object.values(selectedItems).forEach((category) => {
			if (typeof category === "object") {
				Object.values(category).forEach((subCategory) => {
					total += [
						...(subCategory.package || []),
						...(subCategory.individual || []),
						...(subCategory.adhoc || []),
					].reduce((sum, item) => sum + (parseInt(item.price) || 0), 0);
				});
			}
		});
		return total;
	};

	// Render checkboxes for each category and item
	const renderCheckboxes = (activities, category, type, subCategory) => {
		if (!activities) return null; // Handle undefined activities
		return Object.keys(activities).map((key) => {
			const value = activities[key];
			if (typeof value === "object" && !Array.isArray(value)) {
				return (
					<div key={key}>
						<h4>{key.replace(/_/g, " ")}</h4>
						{renderCheckboxes(value, category, key, subCategory)}
					</div>
				);
			} else if (typeof value === "string" || typeof value === "number") {
				const displayPrice = value === "" ? `₹${value}` : `₹${value}`;
				return (
					<div key={key}>
						<label>
							<input
								type="checkbox"
								onChange={() =>
									handleSelectItem(category, type, key, value, subCategory)
								}
								checked={
									subCategory
										? selectedItems[category]?.[subCategory]?.[type]?.some(
												(item) => item.name === key
										  )
										: selectedItems[category]?.[type]?.some(
												(item) => item.name === key
										  )
								}
							/>
							{key.replace(/_/g, " ")} - {displayPrice}
						</label>
					</div>
				);
			}
			return null;
		});
	};

	const renderStandardActivities = (activities, category, subCategory) => {
		if (!activities) return null; // Handle undefined standard activities
		return Object.keys(activities).map((key) => {
			const value = activities[key];
			const displayPrice = value === "" ? "Included in Package" : `₹${value}`;
			return (
				<div key={key}>
					<label>
						<input
							type="checkbox"
							onChange={() =>
								handleStandardActivitySelect(category, key, value, subCategory)
							}
							checked={
								subCategory
									? selectedItems[category]?.[subCategory]?.individual?.some(
											(item) => item.name === key
									  )
									: selectedItems[category]?.individual?.some(
											(item) => item.name === key
									  )
							}
						/>
						{key.replace(/_/g, " ")} - {displayPrice}
					</label>
				</div>
			);
		});
	};

	// Render selected items grouped by category
	const renderSelectedItems = (category, label, subCategory) => {
		const currentCategory = selectedItems[category];
		const { package: packageItems, individual } = subCategory
			? currentCategory[subCategory]
			: currentCategory;

		// Only display the category if there's a selected item
		if ((packageItems?.length || 0) === 0 && (individual?.length || 0) === 0) {
			return null;
		}

		return (
			<div key={category}>
				<h3>{label}</h3>
				{packageItems?.length > 0 && (
					<div className="invoice-item">
						<span>Package</span>
						<span>₹{packageItems[0].price}</span>
					</div>
				)}
				{individual?.length > 0 && (
					<>
						<h4>Individual Items</h4>
						{individual.map((item, index) => (
							<div key={index} className="invoice-item">
								<span>{item.name.replace(/_/g, " ")}</span>
								<span>
									{packageItems?.length > 0
										? "Included in Package"
										: `₹${item.price}`}
								</span>
							</div>
						))}
					</>
				)}
			</div>
		);
	};

	return (
		<div className="container">
			<div className="left-pane">
				<h2>Select Services</h2>

				<h3>Branding</h3>
				<h4>Package Price</h4>
				<div>
					<label>
						<input
							type="checkbox"
							onChange={() =>
								handleSelectItem(
									"branding",
									"package",
									"Branding Package",
									seoconfig[0].branding.package_price
								)
							}
							checked={selectedItems["branding"]?.package?.length > 0}
						/>
						Branding Package - ₹{seoconfig[0].branding.package_price}
					</label>
				</div>
				<h4>Standard Activities</h4>
				{renderStandardActivities(
					seoconfig[0].branding.standard_activities,
					"branding"
				)}
				<h4>Adhoc Activities</h4>
				{renderCheckboxes(
					seoconfig[0].branding.adhoc_activities,
					"branding",
					"adhoc"
				)}

				<h3>Local SEO</h3>
				<h4>Package Price</h4>
				<div>
					<label>
						<input
							type="checkbox"
							onChange={() =>
								handleSelectItem(
									"local_seo",
									"package",
									"Local SEO Package",
									seoconfig[0].local_seo.package_price
								)
							}
							checked={selectedItems["local_seo"]?.package?.length > 0}
						/>
						Local SEO Package - ₹{seoconfig[0].local_seo.package_price}
					</label>
				</div>
				<h4>Standard Activities</h4>
				{renderStandardActivities(
					seoconfig[0].local_seo.standard_activities,
					"local_seo"
				)}
				<h4>Adhoc Activities</h4>
				{renderCheckboxes(
					seoconfig[0].local_seo.adhoc_activities,
					"local_seo",
					"adhoc"
				)}

				<h3>Digital Marketing</h3>
				<h4>Link Building (Package Price)</h4>
				<div>
					<label>
						<input
							type="checkbox"
							onChange={() =>
								handleSelectItem(
									"digital_marketing",
									"package",
									"Link Building Package",
									seoconfig[0].digital_marketing.link_building.package_price,
									"link_building"
								)
							}
							checked={
								selectedItems["digital_marketing"]?.link_building?.package
									?.length > 0
							}
						/>
						Link Building Package - ₹
						{seoconfig[0].digital_marketing.link_building.package_price}
					</label>
				</div>
				<h4>Standard Activities (Link Building)</h4>
				{renderStandardActivities(
					seoconfig[0].digital_marketing.link_building.standard_activities,
					"digital_marketing",
					"link_building"
				)}
				<h4>Blog Writing</h4>
				{renderStandardActivities(
					seoconfig[0].digital_marketing.blog_writing,
					"digital_marketing",
					"blog_writing"
				)}
				<h4>Copy Writing</h4>
				{renderStandardActivities(
					seoconfig[0].digital_marketing.copy_writing,
					"digital_marketing",
					"copy_writing"
				)}
			</div>

			<div className="right-pane">
				<h2>Quote Summary</h2>
				<div className="invoice">
					{renderSelectedItems("branding", "Branding")}
					{renderSelectedItems("local_seo", "Local SEO")}
					{renderSelectedItems(
						"digital_marketing",
						"Digital Marketing",
						"link_building"
					)}
					{renderSelectedItems(
						"digital_marketing",
						"Digital Marketing",
						"blog_writing"
					)}
					{renderSelectedItems(
						"digital_marketing",
						"Digital Marketing",
						"copy_writing"
					)}
					<div className="total">
						<h3>Total: ₹{calculateTotal()}</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
