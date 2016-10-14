FROM python:3

COPY index.html /

CMD ["python3", "-m", "http.server", "80"]
