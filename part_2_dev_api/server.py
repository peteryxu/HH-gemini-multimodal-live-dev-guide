from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def list_directory(self, path):
        # Enable directory listing
        return super().list_directory(path)

if __name__ == '__main__':
    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    port = 8000
    print(f"Starting server at http://localhost:{port}")
    print(f"You can access:")
    print(f"- Chapter 5: http://localhost:{port}/chapter_05/")
    print(f"- Chapter 6: http://localhost:{port}/chapter_06/")
    print(f"- Shared components: http://localhost:{port}/shared/")
    
    httpd = HTTPServer(('localhost', port), CORSRequestHandler)
    httpd.serve_forever() 