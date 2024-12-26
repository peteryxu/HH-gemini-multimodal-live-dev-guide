export class MediaHandler {
  constructor() {
    this.videoElement = null;
    this.currentStream = null;
    this.isWebcamActive = false;
    this.isScreenActive = false;
    this.frameCapture = null;
  }

  initialize(videoElement) {
    this.videoElement = videoElement;
  }

  async startWebcam() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720 } 
      });
      this.handleNewStream(stream);
      this.isWebcamActive = true;
      return true;
    } catch (error) {
      console.error('Error accessing webcam:', error);
      return false;
    }
  }

  async startScreenShare() {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ 
        video: true 
      });
      this.handleNewStream(stream);
      this.isScreenActive = true;
      
      // Handle when user stops sharing via browser controls
      stream.getVideoTracks()[0].addEventListener('ended', () => {
        this.stopAll();
      });
      
      return true;
    } catch (error) {
      console.error('Error sharing screen:', error);
      return false;
    }
  }

  handleNewStream(stream) {
    if (this.currentStream) {
      this.stopAll();
    }
    this.currentStream = stream;
    if (this.videoElement) {
      this.videoElement.srcObject = stream;
      this.videoElement.classList.remove('hidden');
    }
  }

  stopAll() {
    if (this.currentStream) {
      this.currentStream.getTracks().forEach(track => track.stop());
      this.currentStream = null;
    }
    if (this.videoElement) {
      this.videoElement.srcObject = null;
      this.videoElement.classList.add('hidden');
    }
    this.isWebcamActive = false;
    this.isScreenActive = false;
    this.stopFrameCapture();
  }

  startFrameCapture(onFrame) {
    const captureFrame = () => {
      if (!this.currentStream || !this.videoElement) return;
      
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = this.videoElement.videoWidth;
      canvas.height = this.videoElement.videoHeight;
      
      context.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
      
      // Convert to JPEG and base64 encode
      const base64Image = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
      onFrame(base64Image);
    };

    // Capture frames at 2fps
    this.frameCapture = setInterval(captureFrame, 500);
  }

  stopFrameCapture() {
    if (this.frameCapture) {
      clearInterval(this.frameCapture);
      this.frameCapture = null;
    }
  }
} 