# ToolLendify Frontend

ToolLendify Frontend is the client-side application for the ToolLendify project. It provides the user interface for searching, renting, and managing maintenance tools. Built with Angular, it connects to the backend to deliver a seamless user experience.

## Features

- **User Authentication:** Registration, Login, JWT-based sessions.
- **Tool Listing and Search:** Display tools, search by keyword and category.
- **Location-Based Tool Search:** Find tools based on your location using Google Maps.
- **Tool Rental Management:** Request rentals and track rental status.
- **Real-Time Notifications:** Receive updates for rental requests and status changes.

## Tech Stack

- **Frontend:** [Angular](https://angular.io/)
- **Location Services:** [Google Maps API](https://developers.google.com/maps)
- **Notifications:** [Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/JoudMahmoud/ToolLendify-frontend.git
    cd ToolLendify-frontend
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Firebase Setup:**
    - Create a Firebase project and enable Firebase Cloud Messaging.
    - Download the `google-services.json` file and place it in the `src` directory of your Angular project.
    - Obtain the Server Key from Firebase and update the frontend project with the configuration.

### Running the Application

1. **Start the Frontend:**
    ```bash
    ng serve
    ```

2. **Access the Application:**
    Open your browser and navigate to `http://localhost:4200`.

## Usage

- **Register/Login:** Create a new account or log in with existing credentials.
- **List Tools:** View and interact with listed tools.
- **Search Tools:** Search for tools by keyword, category, and location.
- **Request Rentals:** Request to rent available tools.
- **Manage Rentals:** Track the status of your rental requests.
- **Notifications:** Receive updates for rental requests and changes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.


## Contact

For any inquiries or support, please contact [joud.mahmoud1323@gmail.com].

## Acknowledgements

- [Angular](https://angular.io/) for the frontend framework.
- [Google Maps API](https://developers.google.com/maps) for location services.
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) for real-time notifications.
