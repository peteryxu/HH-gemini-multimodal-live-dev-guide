# Gemini Multimodal Live API Developer Guide

This repository serves as a comprehensive developer guide for Google's Gemini Multimodal Live API. It provides a hands-on, example-driven approach to understanding and utilizing the API's capabilities for building real-time, interactive applications. The guide is structured into chapters, each focusing on a specific aspect of the API, progressing from basic SDK usage to low-level WebSocket interactions.

## Repository Structure

The repository is organized into the following chapters:

*   **`chapter_01`**: **Introduction to the Google Gemini SDK**
    *   This chapter provides a gentle introduction to interacting with the Gemini model using the official Google Gemini SDK (`google-genai` Python package).
    *   It demonstrates simple text and audio interactions using the SDK's high-level abstractions.
    *   You'll find a Jupyter Notebook (`sdk-intro.ipynb`) that guides you through the process of setting up the SDK, sending text prompts, receiving text responses, and generating audio output.
    *   This chapter is ideal for developers new to the Gemini API or those who prefer the convenience of an SDK.

*   **`chapter_02`**: **Live Audio Chat with Gemini**
    *   This chapter presents a more advanced application: a real-time, two-way audio chat application built using the Gemini Multimodal Live API.
    *   The Python script (`audio-to-audio.py`) demonstrates how to capture audio from the user's microphone, send it to the API in chunks, receive the model's audio response, and play it back in real time.
    *   This chapter delves into concepts like asynchronous programming, audio chunking, Voice Activity Detection (VAD), and managing the flow of a live conversation.
    *   The `README.md` file accompanying the script provides a comprehensive explanation of these concepts and how they are implemented.

*   **`chapter_03`**: **Low-Level WebSocket Interaction - Single Exchange Example**
    *   This chapter dives deeper into the underlying communication mechanism by demonstrating how to interact with the Gemini API using raw WebSockets, without relying on any SDK.
    *   It provides a simple HTML file (`index.html`) that establishes a WebSocket connection, sends a single hardcoded text message to the Gemini model, and displays the model's text response.
    *   This chapter is particularly useful for developers who need a more granular understanding of the API's communication protocol or those who need to integrate the API into environments where an SDK might not be available or suitable. It showcases the mandatory setup message exchange, which is crucial for establishing a session with the API.
    *   The concepts of this chapter are explained in detail in the `README.md` file.



## How to Use This Guide

1. **Prerequisites:**
    *   For the first four chapters you'll need a [Google Developer API Key](https://aistudio.google.com/apikey)
    *   Ensure you have Python 3.9+ installed for running the Jupyter Notebook and Python scripts.
2. **Start with Chapter 1:** If you're new to the Gemini API, it's recommended to begin with `chapter_01`. The Jupyter Notebook will guide you through the basics of using the SDK.
3. **Dive into Chapter 2:** `chapter_02` presents a more complex application. You can run the `audio_chat.py` script after installing the required dependencies (listed in the script) and setting your API key as an environment variable or directly in the code (not recommended for production).
4. **Explore Chapter 3:** Move on to `chapter_03` to understand the underlying WebSocket communication. Open the `index.html` file in your browser and examine the JavaScript code along with the accompanying `README.md`.
5. **Experiment:** Feel free to modify the code examples, experiment with different parameters (e.g., `CHUNK_SIZE`, `SEND_SAMPLE_RATE`), and explore the API documentation to deepen your understanding.

## Key Concepts

This guide covers several important concepts related to the Gemini Multimodal Live API:

*   **SDK Usage:** Using the `google-genai` Python package for simplified interaction.
*   **WebSockets:** Establishing and managing real-time, bidirectional communication.
*   **Audio Chunking:** Dividing a continuous audio stream into smaller chunks for efficient transmission and processing.
*   **Voice Activity Detection (VAD):** Detecting the presence and absence of human speech in an audio stream.
*   **Asynchronous Programming:** Handling concurrent operations using `asyncio` in Python.
*   **API Message Formats:** Understanding the structure of messages exchanged with the API (e.g., `BidiGenerateContentSetup`, `BidiGenerateContentClientContent`, `BidiGenerateContentServerContent`).
*   **Session Management:** Properly initiating and configuring a session with the API.
*   **Turn-Taking:** Managing the flow of conversation between the user and the model.

## Contributing

This repository is currently not accepting contributions, as it's meant to be a static guide. However, if you find any errors or have suggestions for improvements, please feel free to open an issue.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

This README provides a clear overview of the repository's contents, structure, and purpose. It guides developers through the different chapters, explains how to use the examples, and highlights the key concepts covered. Remember to replace placeholder comments like "attached a screenshot of how it looks like now" with actual descriptions or instructions relevant to your repository.