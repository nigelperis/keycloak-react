# Keycloak, React-Vite Integration Demo

This project demonstrates the integration of Keycloak for authentication and authorization in two simple applications. The demo showcases Single Sign-On (SSO) functionality, integration with Google Identity Provider (IDP) and role-based access control.

## Features

- **Authentication**: Users can authenticate using their credentials stored in Keycloak.
- **Authorization**: Role-based access control is implemented to restrict access to certain features or resources.
- **Single Sign-On (SSO)**: Users can log in once and access multiple applications without needing to log in again.
- **Google Identity Provider (IDP)**: Integration with Google allows users to authenticate using their Google accounts.

## Applications

1. **Backend**: An Express.js backend server providing APIs for authentication and authorization.
2. **Frontend Apps**:
   - **myapp1**:
   - **myapp2**
     
## Setup

Follow these steps to set up and run the project locally:

   ```bash
# Clone the repository

git clone <repository-url>
cd keycloak-react

# Install dependencies for each application

cd backend
npm install
cd ../myapp1
npm install
cd ../myapp2
npm install

# Configure Keycloak:
# - Set up a Keycloak server if not already done.
# - Create a realm, client, and user to use for authentication.
# - Configure the client URLs and callback URLs for each application.

# Start the backend server
cd ../backend
npm start

# Start the frontend apps
cd ../myapp1
npm run dev

cd ../myapp2
npm run dev
```

Replace `<repository-url>` with the URL of your Git repository.

This README provides an overview of your project, instructions for setup, and information on how to contribute. Feel free to customize it further based on your specific project details and requirements.
