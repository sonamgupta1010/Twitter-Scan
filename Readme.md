# ReactJS Chrome Extension

## React 18 and TailwindCSS Supported

- [x] Webpack Compatible
- [x] TailwindCSS 3.0 Compatible

This is a Chrome extension built using React and Tailwind CSS, bundled with Webpack. 

## Features- 
Get the usernames of Twitter users who have posted content by scrolling through the page.


## Installation
To set up and run this project locally on your machine, follow these steps:

### Prerequisites
Ensure you have the following installed on your system:- Node.js (version 14 or later)- Yarn

### Clone the repository
First, clone this repository to your local machine using:
git clone https://github.com/<Sonam1010>/<https://github.com/sonamgupta1010/Twitter-Scan>.git

### Install dependencies
Navigate into the cloned repository and install its dependencies:


cd <repository-name>
yarn install

### Run the project
Initiate the project in development mode by executing:

yarn run watch

### Load Extension in Chrome
dist folder will be created after yarn run watch

Access Chrome, then proceed to the extension management area and activate developer mode. Following this, the "Load Unpacked" button will become visible. Click on it and load the dist folder generated after executing the yarn run watch command. Your extension will be prepared for use.

## Usage
Upon opening the extension, you will see the first username. As you scroll, additional usernames will be retrieved dynamically.


