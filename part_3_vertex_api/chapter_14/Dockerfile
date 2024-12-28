# Use Python 3.11 slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install required system packages
RUN apt-get update && apt-get install -y \
    nginx \
    && rm -rf /var/lib/apt/lists/*

# Copy application files
COPY part_3_vertex_api/chapter_14 /app/chapter_14
COPY shared /app/shared
COPY part_3_vertex_api/proxy/proxy.py /app/proxy/proxy.py

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Install Python dependencies
RUN pip install --no-cache-dir \
    websockets \
    google-auth \
    certifi

# Expose ports
EXPOSE 8080
EXPOSE 80

# Copy and make the startup script executable
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Start services
CMD ["/app/start.sh"]