from server import app

# try:
#     from app import app as app
# except ImportError:
#     from server import app

if __name__ == "__main__":
  app.run(debug=True)
