create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

CREATE Table category (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);

CREATE TABLE program ( 
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(250) not null,
  synopsis text not null,
  poster VARCHAR(250),
  country VARCHAR(250) not null,
  year INT NOT NULL,
  category_id INT not null,
  Foreign Key (category_id) REFERENCES category(id)
);


