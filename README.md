# StreetPals - Stray Animal Assistance App

StreetPals is a Next.js mobile-first application designed to connect compassionate people with stray animals in need. It allows users to report sightings of stray animals, browse animals available for adoption/fostering, donate to support rescue efforts, and learn about animal welfare.

## Features

*   **Report Strays:** Quickly report the location and condition of a stray animal, optionally uploading a photo/video. (Simulated NGO alert)
*   **Adopt & Foster:** Browse profiles of animals available for adoption or fostering. (Simulated interaction)
*   **Donate:** Make simulated donations to support the cause.
*   **Learn:** Access tips for helping strays and information about community events (mock data).
*   **Mobile-First Design:** Optimized for mobile devices with a bottom navigation bar.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui
*   **Icons:** lucide-react
*   **State Management:** React Hooks (useState, useReducer for useToast)
*   **Forms:** react-hook-form with Zod validation
*   **GenAI (Optional):** Google Genkit (requires setup if AI features are added)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### 1. Clone the Repository

First, clone this repository to your local machine. Replace `<your-github-username>` and `<repository-name>` with your actual GitHub username and the name you gave the repository.

```bash
git clone https://github.com/<your-github-username>/<repository-name>.git
cd <repository-name>
```

### 2. Install Dependencies

Install the project dependencies using npm (or yarn):

```bash
npm install
# or
# yarn install
```

### 3. Set Up Environment Variables

This project might use Google GenAI features in the future. To prepare for this, you need to set up an environment variable for the Google AI API key.

Create a new file named `.env.local` in the root of the project directory.

Add the following line to the `.env.local` file, replacing `<your_google_ai_api_key>` with your actual API key:

```env
GOOGLE_GENAI_API_KEY=<your_google_ai_api_key>
```

**Note:** If you don't have a Google AI API key or don't intend to use GenAI features yet, you can leave the value empty or omit the file for now. The Genkit parts of the code might not function without a valid key. You can obtain a key from [Google AI Studio](https://aistudio.google.com/).

### 4. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
# yarn dev
```

The application should now be running at [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json`).

### 5. Run Genkit (Optional)

If you plan to develop or test GenAI features using Genkit locally, you can run the Genkit development server in a separate terminal:

```bash
npm run genkit:dev
# or for watching changes
# npm run genkit:watch
```

This will start the Genkit development UI, typically accessible at [http://localhost:4000](http://localhost:4000).

## Uploading to GitHub (Initial Setup)

If you haven't already pushed this project to your own GitHub repository, follow these steps:

1.  **Create a new repository on GitHub:** Go to [GitHub](https://github.com/), log in, and create a new repository. Do *not* initialize it with a README, .gitignore, or license file if you want to push your existing project.
2.  **Initialize Git (if not already):** Open your terminal in the project's root directory and run:
    ```bash
    git init -b main
    ```
3.  **Add files:**
    ```bash
    git add .
    ```
4.  **Commit files:**
    ```bash
    git commit -m "Initial commit"
    ```
5.  **Add the remote repository:** Replace `<your-github-username>` and `<repository-name>` with your details.
    ```bash
    git remote add origin https://github.com/<your-github-username>/<repository-name>.git
    ```
6.  **Push to GitHub:**
    ```bash
    git push -u origin main
    ```

Now your project code should be on GitHub!
```