# Smiley Face Project

This project creates a smiley face that follows the user's mouse movements and can respond to speech input.

## File Structure

*   `index.html`: The main HTML file that sets up the structure of the page and includes links to the CSS and JavaScript files.
*   `smiley.css`: Contains the styles for the smiley face, including animations for blinking eyes and mouth movement.
*   `smiley.js`: Handles the JavaScript logic for tracking mouse movements and updating the position of the smiley face elements.
*   `simpleSpeechAssistant.js`: Implements speech recognition and text-to-speech functionality to interact with the user.

## Features

*   **Interactive Smiley Face:** The eyes and mouth of the smiley face follow the user's mouse movements, creating an engaging and interactive experience.
*   **Speech Recognition:** The application uses the Web Speech API to recognize speech input from the user.
*   **Text-to-Speech:** The application uses the Web Speech API to speak back to the user.

## Setup

To run this project locally, follow these steps:

1.  Clone the repository to your local machine.
2.  Open the `index.html` file in your web browser.

## Dependencies

*   No external libraries are required to run this project.

## How to Use

1.  Open the `index.html` file in your browser.
2.  Move your mouse around the screen and observe how the smiley face's eyes and mouth follow your cursor.
3.  The page implements speech recognition, but requires a server to be running that can respond to the speech input.

## Code Overview

### `index.html`

*   Sets up the basic HTML structure with links to the CSS and JavaScript files.
*   Creates the `div` elements for the smiley face components, such as the base, eyes, and mouth.

### `smiley.css`

*   Defines the styles for the smiley face elements, including colors, sizes, and positions.
*   Includes keyframe animations for the blinking eyes and mouth movements.
*   Uses CSS transforms to position the elements and create the smiley face effect.

### `smiley.js`

*   Uses `document.onmousemove` to track mouse movements.
*   Calculates the new positions for the eyes and mouth based on the mouse coordinates.
*   Uses `element.animate` to smoothly update the positions of the smiley face elements.

### `simpleSpeechAssistant.js`

*   Implements the `startSpeech` function to initiate speech recognition using the `webkitSpeechRecognition` API.
*   The `getVoices` function retrieves available voices for text-to-speech.
*   The `tts` function converts text to speech using the `SpeechSynthesisUtterance` API.
*   The `fetchData` function sends the recognized text to a backend API (`http://127.0.0.1:8000/result`) and speaks the response.

## Customization

*   You can customize the appearance of the smiley face by modifying the styles in the `smiley.css` file.
*   Adjust the sensitivity of the eye and mouth movements by changing the division factors in the `handleMouseMove` function in `smiley.js`.
*   Modify the speech recognition language by changing the `recognition.lang` property in the `startSpeech` function in `simpleSpeechAssistant.js`.
*   Update the backend API endpoint in the `fetchData` function in `simpleSpeechAssistant.js` to connect to your own speech processing service.