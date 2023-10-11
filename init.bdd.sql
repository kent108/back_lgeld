create table "format" (
id serial primary key,
size varchar(255) not null
);

create table "user" (
id serial primary key,
admin boolean not null, 
name varchar(255) not null,
firstname varchar(255)not null, 
mail varchar(320) not null unique,
password char(60) not null,
phone char(10)
);

create table "picture" (
id serial primary key,
name varchar(255) not null,
description varchar(255) not null,
size integer not null,
mimetype varchar(255) not null
);


create table "type" (
id serial primary key,
description varchar(255) not null
);

create table "article" (
id serial primary key,
name varchar(255) not null,
description varchar(255) not null,
picture_id integer not null, 
type_id integer not null,
constraint fk_picture foreign key (picture_id) references "picture"(id),
constraint fk_type foreign key (type_id) references "type"(id)
);

create table "price" (
id serial primary key,
article_id integer not null,
format_id integer not null,
price varchar(255) not null,
constraint fk_article_id foreign key (article_id) references "article"(id),
constraint fk_format_id foreign key (format_id) references "format"(id)
);