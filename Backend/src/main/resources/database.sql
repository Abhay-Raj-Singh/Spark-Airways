create schema `sparkairways`;

create table `sparkairways`.`bank`
(
    `account_no`   bigint  not null,
    `bank_name`    varchar(255),
    primary key (`account_no`)
);

create table `sparkairways`.`admin`
(
    `admin_name` varchar(255) not null,
    `password` varchar(255),
    primary key (`admin_name`)
);

create table `sparkairways`.`news_feed`
(
    `news_id`   integer not null auto_increment,
    `date` date    not null,
    `news` varchar(255),
    primary key (`news_id`)
);

create table `sparkairways`.`user`
(
    `user_id`         integer not null auto_increment,
    `name`            varchar(20),
    `address`         varchar(255),
    `age`             integer not null,
    `email`           varchar(255),
    `gender`          varchar(255),
    `password`        varchar(255),
    `phone`           varchar(255),
    `secret_question` varchar(255),
    `answer`          varchar(255),
    primary key (`user_id`)
);

create table `sparkairways`.`flight_schedule`
(
    `flight_id`          integer not null auto_increment,
    `airline`            varchar(255),
    `business_seats`     integer not null,
    `business_seat_cost` integer not null,
    `economy_seats`      integer not null,
    `economy_seat_cost`  integer not null,
    `arrival_time`       time    not null,
    `departure_time`     time    not null,
    `source`             varchar(255),
    `destination`        varchar(255),
    `date`               date not null,
    primary key (`flight_id`)
);

create table `sparkairways`.`booking_status`
(
    `serial_no`      varchar(255) not null,
    `flight_id`      integer,
    `user_id`        integer,
    `booked_business_seats` integer,
    `booked_economy_seats`  integer,
    primary key (`serial_no`),
    FOREIGN KEY (`flight_id`) REFERENCES `flight_schedule`(`flight_id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
);