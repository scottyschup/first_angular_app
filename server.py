import BaseHTTPServer as BHS


class Handler(BHS.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/names":
            print self.command, self.path
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(open('index.html').read())

HOST = '127.0.0.1'
PORT = 8081
httpd = BHS.HTTPServer((HOST, PORT), Handler)
print "Listening to", HOST, "port", PORT
httpd.serve_forever()
