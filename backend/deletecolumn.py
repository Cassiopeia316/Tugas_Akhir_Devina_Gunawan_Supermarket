import psycopg2

connection = psycopg2.connect(
    host="127.0.0.1",
    database="supermarket",
    user="postgres",
    password="Postgresdev123"
)

cursor = connection.cursor()

alter_table_command = """
ALTER TABLE "promos"
DROP COLUMN "type";
"""

cursor.execute(alter_table_command)
connection.commit()

cursor.close()
connection.close()
