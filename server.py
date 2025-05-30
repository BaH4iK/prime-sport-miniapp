import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
})

print(f"Starting server at http://localhost:{PORT}")
httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()
