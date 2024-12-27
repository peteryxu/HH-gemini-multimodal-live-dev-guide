# Gemini Multimodal Live API Developer Guide

![Gemini API Developer Guide](assets/mm_live_api.jpg)

This repository serves as a comprehensive developer guide for Google's Gemini Multimodal Live API. It provides a hands-on, example-driven approach to understanding and utilizing the API's capabilities for building real-time, interactive applications. The guide is structured into chapters, each focusing on a specific aspect of the API, progressing from basic SDK usage to low-level WebSocket interactions.

## Repository Structure

The guide is divided into chapters that progressively introduce different aspects of the Gemini Multimodal Live API. **Chapters 1 and 2 utilize the Python SDK (`google-genai`) to provide an initial understanding of interacting with the API. Chapters 3, 4, and 5 then shift to using JavaScript and the low-level WebSocket API directly in the browser. Chapter 6 builds upon this foundation to create a truly multimodal experience with both audio and video.**

**Why the Switch to JavaScript and WebSockets?**

While the Python SDK offers a convenient way to interact with the Gemini API, this guide deliberately transitions to JavaScript and WebSockets to facilitate the development of **real-time, browser-based applications**. WebSockets are the native browser technology for real-time, bidirectional communication, making them essential for interactive experiences like live audio chat and text-to-speech. Python is just not ideal for browser front-ends: While we can technically use Python for web development (e.g., with frameworks like Flask or Django), it's not the natural choice for front-end, browser-based interactions, especially real-time audio processing within the browser itself.

Using JavaScript allows us to seamlessly integrate these features directly into the browser environment. Furthermore, understanding the low-level WebSocket interaction provides a **deeper understanding of the API's communication protocol** and offers **greater flexibility and control** for specialized use cases or integrations not fully supported by the SDK.

## Detailed Repository Structure

The repository is organized into the following chapters:

*   **[`chapter_01`](chapter_01)**: **Introduction to the Google Gemini SDK**
    *   This chapter provides a gentle introduction to interacting with the Gemini model using the official Google Gemini SDK (`google-genai` Python package).
    *   It demonstrates simple text and audio interactions using the SDK's high-level abstractions.
    *   You'll find a Jupyter Notebook ([`sdk-intro.ipynb`](chapter_01/sdk-intro.ipynb)) that guides you through the process of setting up the SDK, sending text prompts, receiving text responses, and generating audio output.
    *   This chapter is ideal for developers new to the Gemini API or those who prefer the convenience of an SDK.

*   **[`chapter_02`](chapter_02)**: **Live Audio Chat with Gemini**
    *   This chapter presents a more advanced application: a real-time, two-way audio chat application built using the Gemini Multimodal Live API and the Python SDK.
    *   The Python script (`audio-to-audio.py`) demonstrates how to capture audio from the user's microphone, send it to the API in chunks, receive the model's audio response, and play it back in real time.
    *   This chapter delves into concepts like asynchronous programming, audio chunking, Voice Activity Detection (VAD), and managing the flow of a live conversation.
    *   The [`README.md`](chapter_02/README.md) file accompanying the script provides a comprehensive explanation of these concepts and how they are implemented.

*   **[`chapter_03`](chapter_03)**: **Low-Level WebSocket Interaction - Single Exchange Example**
    *   This chapter dives deeper into the underlying communication mechanism by demonstrating how to interact with the Gemini API using raw WebSockets, without relying on any SDK.
    *   It provides a simple HTML file ([`index.html`](chapter_03/index.html)) that establishes a WebSocket connection, sends a single hardcoded text message to the Gemini model, and displays the model's text response.
    *   This chapter is particularly useful for developers who need a more granular understanding of the API's communication protocol or those who need to integrate the API into environments where an SDK might not be available or suitable. It showcases the mandatory setup message exchange, which is crucial for establishing a session with the API.
    *   The concepts of this chapter are explained in detail in the [`README.md`](chapter_03/README.md) file.

*   **[`chapter_04`](chapter_04)**: **Text-to-Speech with WebSockets**
    *   This chapter demonstrates a practical application of the Gemini API's text-to-speech capabilities, again using a low-level WebSocket connection for communication.
    *   It provides an HTML file ([`index.html`](chapter_04/index.html)) that allows you to enter text, send it to the Gemini model, and receive an audio response that is played directly in your browser.
    *   This example showcases how to handle audio output from the API, decode it, and use the browser's `AudioContext` API to manage audio playback. It includes a queueing mechanism to ensure audio chunks are played sequentially.
    *   You'll learn about concepts like base64 audio decoding, PCM audio format conversion, and the intricacies of real-time audio playback in a web browser.
    *   The accompanying [`README.md`](chapter_04/README.md) file within the `chapter_04` directory provides a detailed explanation of the code and the underlying principles.

*   **[`chapter_05`](chapter_05)**: **Live Audio Chat with WebSockets - Advanced Audio Handling**
    *   This chapter combines the concepts from previous chapters to present a sophisticated real-time audio-to-audio chat application, implemented entirely in the browser using WebSockets and the Web Audio API.
    *   It features an HTML file (`index.html`) along with JavaScript modules for audio recording (`audio-recorder.js`), audio playback (`audio-streamer.js`), and an AudioWorklet for efficient audio processing (`audio-recording-worklet.js`).
    *   This chapter tackles advanced topics like live microphone input, bidirectional audio streaming, intricate audio format conversions, precise audio chunking, and robust state management for interruptions and turn-taking.
    *   The detailed `README.md` file in `chapter_05` provides an in-depth tutorial on building such an application, explaining the design choices, trade-offs, and best practices discovered during development.

*   **[`chapter_06`](chapter_06)**: **Gemini Live Chat - Real-time Multimodal Interaction with WebSockets**
    *   This chapter enhances the audio chat application from Chapter 5 by adding support for live video input through webcam and screen sharing capabilities.
    *   The implementation includes several JavaScript modules: `media-handler.js` for managing video streams, along with enhanced versions of the audio handling modules from Chapter 5.
    *   You'll learn about capturing and processing video frames, efficient JPEG encoding for transmission, managing multiple media streams simultaneously, and creating a polished UI with Material Design elements.
    *   The chapter's `README.md` provides comprehensive coverage of important considerations like token usage optimization, frame rate selection, and quality settings for video transmission.

## Prerequisites

Before starting this tutorial, ensure you have the following:

### Required
* A Google Developer API Key from [Google AI Studio](https://aistudio.google.com/apikey)
* Python 3.9 or higher installed on your system
* A modern web browser (Chrome, Firefox, or Edge recommended)
* A microphone for audio input (required for Chapters 2, 5, and 6)
* A webcam for video input (required for Chapter 6)

### Development Environment
* A code editor or IDE
* Basic familiarity with:
  * Python programming
  * JavaScript and HTML
  * Terminal/Command Line usage


## How to Use This Guide

1. **Prerequisites:**
    *   For the first four chapters you'll need a [Google Developer API Key](https://aistudio.google.com/apikey)
    *   Ensure you have Python 3.9+ installed for running the Jupyter Notebook and Python scripts.
2. **Start with Chapter 1:** If you're new to the Gemini API, it's recommended to begin with `chapter_01`. The Jupyter Notebook will guide you through the basics of using the SDK.
3. **Dive into Chapter 2:** `chapter_02` presents a more complex application using the Python SDK. You can run the `audio_chat.py` script after installing the required dependencies (listed in the script) and setting your API key as an environment variable or directly in the code (not recommended for production).
4. **Explore Chapter 3:** Move on to `chapter_03` to understand the underlying WebSocket communication. Open the `index.html` file in your browser and examine the JavaScript code along with the accompanying `README.md`.
5. **Experiment with Chapter 4:** Open the `index.html` file from `chapter_04` in your browser. Follow the instructions in the chapter's `README.md` to input text and hear the generated audio.
6. **Tackle Chapter 5:** Open the `index.html` file from `chapter_05` in your browser. Follow the instructions in the chapter's `README.md` to start the audio chat.
7. **Experience Chapter 6:** Open the `index.html` file from `chapter_06` in your browser to explore the multimodal chat application with audio and video capabilities. Follow the chapter's `README.md` for detailed instructions on using webcam and screen sharing features.
8. **Further Exploration:** Feel free to modify the code examples, experiment with different parameters (e.g., `CHUNK_SIZE`, `SEND_SAMPLE_RATE`), and explore the API documentation to deepen your understanding.

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
*   **Audio Encoding and Decoding:** Handling different audio formats and converting between them.
*   **Browser Audio Playback:** Using the `AudioContext` API for real-time audio playback in the browser.
*   **Video Stream Management:** Capturing and managing webcam and screen sharing streams using the `MediaDevices` API.
*   **Frame Processing:** Capturing, encoding, and transmitting video frames efficiently using canvas and JPEG compression.
*   **Multimodal Integration:** Combining audio and video streams for rich, interactive experiences with the API.

## Contributing

This repository is currently not accepting contributions, as it's meant to be a static guide. However, if you find any errors or have suggestions for improvements, please feel free to open an issue.

## License

This project is licensed under the MIT License.