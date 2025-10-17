# FastAPI example backend
from fastapi import FastAPI
import psycopg2

app = FastAPI()

@app.get("/users")
def get_users():
    conn = psycopg2.connect("dbname=test user=postgres password=secret host=db")
    cur = conn.cursor()
    cur.execute("SELECT * FROM users")
    return cur.fetchall()
