# ByBid - Online Auction Platform

ByBid is a React-based online auction platform where users can browse
active auction items, view current bid information, and add items to
their favorite list. The project was developed as a React assignment
with a focus on component-based development, state management,
responsive UI, and interactive functionality.

## Features

-   Responsive navigation bar
-   Hero/banner section
-   Active Auctions section
-   Auction items loaded from JSON data
-   Current bid price and remaining time display
-   Bid item images and bid counts
-   Add items to Favorites
-   Disable the favorite button after an item is added
-   Remove items from Favorites
-   Automatic favorite total price calculation
-   React Toastify notifications
-   Table-based auction item display
-   Responsive layout for different screen sizes
-   Footer section

## Technologies Used

-   React.js
-   Vite
-   JavaScript (ES6+)
-   Tailwind CSS
-   DaisyUI
-   React Icons
-   React Toastify
-   JSON

## Project Structure

``` text
ByBid/
├── public/
│   └── images/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── ActiveAuctions/
│   │   ├── Banner/
│   │   ├── Favorites/
│   │   ├── Navbar/
│   │   └── Footer/
│   │
│   ├── data/
│   │   └── bids.json
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

## Auction Data

Auction items are stored in a JSON file. Each item contains:

``` json
{
  "id": 1,
  "title": "Example Auction Item",
  "description": "Description of the item.",
  "currentBidPrice": 250,
  "timeLeft": "2d 5h",
  "bidsCount": 12,
  "image": "image-url"
}
```

## Favorite System

When a user clicks the favorite button:

1.  The selected auction item is added to the Favorites section.
2.  A success notification is displayed using React Toastify.
3.  The favorite button becomes disabled.
4.  The button changes to indicate that the item has already been
    favorited.
5.  The favorite total price is updated automatically.

Users can remove an item from Favorites using the remove button. The
total price is then recalculated automatically.

## Installation

Clone the repository:

``` bash
git clone <your-repository-url>
```

Navigate to the project directory:

``` bash
cd ByBid
```

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available Scripts

``` bash
npm run dev
```

Runs the application in development mode.

``` bash
npm run build
```

Creates a production build.

``` bash
npm run preview
```

Previews the production build locally.

## Learning Objectives

This project demonstrates practical use of:

-   React components
-   Props
-   `useState`
-   Event handling
-   Array methods such as `map()` and `filter()`
-   `reduce()` for calculating totals
-   Conditional rendering
-   Passing functions between components
-   JSON data handling
-   Responsive Tailwind CSS layouts
-   React Toastify
-   Component-based project organization

## Future Improvements

-   Real-time bidding
-   User authentication
-   Backend/API integration
-   Persistent favorite items
-   Auction countdown timers
-   User bidding history
-   Payment integration
-   Search and filtering
-   Sorting by bid price or remaining time

## Author

**Md. Mahfujur Rahman**

Computer Science & Engineering\
Daffodil International University
