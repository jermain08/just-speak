CREATE DATABASE IF NOT EXISTS justspeakdb;
CREATE USER minhkl IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON justspeakdb.* TO minhkl;
ALTER USER minhkl IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;