# Food Security Monitoring System - Frontend Developer Technical Test

## Overview

This project is a **Food Security Monitoring System** that visualizes food security data on a **map-based interface**. It integrates several food security metrics like **IPC Phase Classification**, **Food Consumption Score (FCS)**, and **Reduced Coping Strategy Index (rCSI)**, allowing users to explore food security data dynamically.

I developed this project as part of a frontend developer technical test. The system is built using **React**, **React-Leaflet**, and **Mapbox**, with data visualization provided by dynamic **GeoJSON layers** and **custom Leaflet markers**.

Additionally, I designed a **Figma prototype** to outline the user interface and experience.

## Live Demo on AWS S3 bucket

The project is deployed on Vercel and can be accessed at the following link:

### [Link to Live Demo](http://foodsecurity.s3-website.eu-north-1.amazonaws.com/)

## Figma Design

A Figma design was created to visualize the user interface and flow of the project. This design demonstrates how the user interacts with the map-based interface and explores the food security metrics visually.

### [Link to Figma Design](<https://www.figma.com/design/uto2dXzb4rnmiP3yfS3nKr/SVG-World-Map-(Community)?m=auto&is-community-duplicate=1&fuid=875051776690994702>)

> **Note:** This is the first design isn't interactable, its just an idea how it can be, of course its subject to change.

---

## Features

- **Map-based interface** using **React-Leaflet** and **Mapbox**.
- **GeoJSON integration** for visualizing African countries and their food security data.
- **Popup Information**: Displays food security data such as **FCS**, **rCSI**, and **Health Access** when a country is clicked.
- **Figma Design** for the UI and UX.

> **Note:** Color-coding based on the severity of hunger has not been implemented at this time, as the severity data is not yet available.

## Requirements

To run this project locally, ensure you have the following tools installed:

- **Node.js** (v18 or later)
- **npm** or **yarn** (Package manager)
- **Git** (for version control)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/food-security-monitoring.git
   cd food-security-monitoring
   ```
2. **Install the dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Run the application**:
   Using npm:

   ```bash
    npm run dev
   ```

   Using yarn:

   ```bash
   npm  dev
   ```

The application should now be running on http://localhost:5173.

## What Has Been Done

1. **Figma Design**:

   Created an interactive Figma prototype to define the UI/UX for the project, with a focus on clarity and ease of interaction with the map-based interface.

2. **Map-based Interface**:

   - Used React-Leaflet with Mapbox to create an interactive map.
   - Displayed African countries using GeoJSON layers.
   - Used markers to display food security data for each country.

3. **Data Integration**:

   - Fetched data from the provided food security API to display metrics like:
     - Food Consumption Score (FCS)
     - Reduced Coping Strategy Index (rCSI)
     - Health Access
   - Custom popups show these details when clicking on a country.

4. **Responsiveness**:

   - Ensured the application is responsive on both desktop and tablet devices, with adjustments made to the popup sizes and map zoom levels based on screen size.
   - Used CSS media queries for adjusting layout and font sizes.

5. **Deployment**:

   Deployed the application on AWS S3 bucket for easy access and demonstration.

---

## Future Improvements

- Add color-coding for markers based on hunger severity when that data becomes available.
- Add more detailed filtering options for users to explore food security data over different time periods.
- Expand the dataset to include more metrics and country-specific data.
- Implement further mobile optimizations to improve usability on smaller screens.
- Improve first load times.
