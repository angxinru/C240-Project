# ShoreSquad

A playful, youth-focused beach cleanup web app concept.

## Tech Stack
- Static HTML5
- Modern CSS (no framework)
- Vanilla JavaScript

## Run Locally

Use VS Code with the Live Server extension:

1. Open this folder in VS Code.
2. Open `index.html`.
3. Start Live Server (Status Bar > "Go Live").

Then visit the URL shown (usually `http://127.0.0.1:5500/`).

## Next Steps
- Plug in a real map (e.g. Leaflet, Mapbox) instead of the placeholder.
- Integrate a real weather API for accurate cleanup windows.
- Add authentication or simple shareable links for inviting friends.
=======
# AI-Powered Study Planner Chatbot

## Overview
The AI-Powered Study Planner Chatbot is designed to assist students in organizing their study schedules effectively. By leveraging a Large Language Model (LLM), the chatbot can generate personalized study plans, suggest daily tasks, and provide study tips based on user inputs.

## Features
- **Personalized Study Timetable**: Generate a customized study timetable based on user preferences and availability.
- **Daily Task Management**: Suggest daily tasks to help students stay on track with their studies.
- **Revision Planning**: Offer recommendations for revision days and break times to optimize learning.
- **Study Tips**: Provide useful study tips and techniques to enhance learning efficiency.

## Project Structure
```
study-planner-chatbot
├── flowise
│   ├── flows
│   │   └── study-planner-flow.json
│   └── config
│       └── flowise.config.json
├── src
│   ├── api
│   │   └── index.ts
│   ├── prompts
│   │   └── study-planner-prompts.ts
│   ├── utils
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── data
│   └── sample-data.json
├── tests
│   └── api.test.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd study-planner-chatbot
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Configure Environment Variables**: 
   Copy `.env.example` to `.env` and fill in the required API keys and configuration settings.

4. **Run the Application**: 
   Start the server using:
   ```bash
   npm start
   ```

## Usage
- Interact with the chatbot through the designated API endpoints.
- Provide inputs regarding your study preferences and availability.
- Receive personalized study plans and tips in response.

## Testing
Run the unit tests to ensure the functionality of the API:
```bash
npm test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
>>>>>>> 3155cdc9dc219c1fdddf773928f3ee62dcebf4ae
