insert into truck(id, username, description, target_date, is_done)
values(10001, 'in28minutes', 'React test', sysdate(), false);

insert into truck(id, username, description, target_date, is_done)
values(10002, 'in28minutes', 'React  2 test', sysdate(), false);

insert into truck(id, username, description, target_date, is_done)
values(10003, 'in28minutes', 'React 45 ', sysdate(), false);

insert into truck(id, username, description, target_date, is_done)
values(10004, 'joe', 'Taco Truck ', sysdate(), false);

insert into truck(id, username, description, target_date, is_done)
values(10005, 'joe', 'Joes Pizza', sysdate(), false);

insert into truck(id, username, description, target_date, is_done)
values(10006, 'joe', 'Sandwich Truck', sysdate(), false);

insert into event(id, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30001,'Buzz''s Hawaiian Grill','1234 Main Street','St. Louis, MO 63104',sysdate(),'11:00am','2:00pm','20001','https://i.imgur.com/FVi7ikp.png');
insert into event(id, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30002,'Cheese Shack Food Truck','32 Jefferson Ave','St. Louis, MO 63104',sysdate(),'12:00pm','3:00pm','20002','https://i.imgur.com/isJ3USj.png');
insert into event(id, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30003,'Destination  Desserts','245 S. Central Ave','Clayton, MO 63105',sysdate(),'12:00pm','3:30pm','20003','https://i.imgur.com/DBUUTsg.png');
insert into event(id, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30004,'Essentially Fries','1 Industrial Circle','Chesterfield, MO 63345',sysdate(),'1:00pm','4:00pm','20004','https://i.imgur.com/pMMcldr.png');
insert into event(id, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30005,'Go! Gyro! Go!','245 S. Central Ave','Clayton, MO 63105',sysdate(),'2:00pm','5:00pm','20005','https://i.imgur.com/cpKFZ9J.png');
insert into event(id, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30006,'Guerilla Street Food','1234 Main Street','St. Louis, MO 63104',sysdate(),'5:00pm','7:30pm','20006','https://i.imgur.com/Lc1sI9Q.png');
insert into event(id, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30007,'K-bop','1234 Main Street','St. Louis, MO 63104',sysdate(),'8:00pm','11:00pm','20007','https://i.imgur.com/8n3WUR7.png');


insert into truck_profile(id, truck_name, categories, img_url) values(20001,'Buzz''s Hawaiian Grill','Asian Fusion','https://i.imgur.com/FVi7ikp.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20002,'Cheese Shack Food Truck','Sandwiches','https://i.imgur.com/isJ3USj.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20003,'Destination  Desserts','Dessert','https://i.imgur.com/DBUUTsg.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20004,'Essentially Fries','American','https://i.imgur.com/pMMcldr.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20005,'Go! Gyro! Go!','Greek','https://i.imgur.com/cpKFZ9J.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20006,'Guerilla Street Food','Asian Fusion','https://i.imgur.com/Lc1sI9Q.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20007,'K-bop','Korean','https://i.imgur.com/8n3WUR7.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20008,'Locoz Tacos','Tacos','https://i.imgur.com/xQL7aZl.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20009,'Mission Taco Truck','Tacos','https://i.imgur.com/zoApYXW.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20010,'Savor The Southwest','Tacos','https://i.imgur.com/UBo00MB.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20011,'Seoul Taco','Tacos','https://i.imgur.com/H6bldXT.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20012,'Slice of the Hill','Pizza','https://i.imgur.com/mtRCzn6.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20013,'The Southerner','BBQ','https://i.imgur.com/mbFcgSN.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20014,'Steak Louie','Sandwiches','https://i.imgur.com/6oRMXWU.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20015,'The Sweet Divine','Dessert','https://i.imgur.com/zUX6Yab.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20016,'Yemanja Brasil Restaurante','Brazilian','https://i.imgur.com/aFOi8vf.png');
