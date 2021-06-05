Database Setup
$ mysql -u root
create database Pragya;

create user admin identified with mysql_native_password by 'Abhay11@ak';

grant all privileges on Pragya.*  to admin;

flush privileges;