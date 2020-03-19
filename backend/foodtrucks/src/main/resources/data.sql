insert into truck(id, username, description, target_date, is_done, url_tag)
values(20001, 'joe', 'Buzz''s Hawaiian Grill', sysdate(), false, '20001');

insert into truck(id, username, description, target_date, is_done, url_tag)
values(20006, 'joe', 'Guerilla Street Food', sysdate(), false, '20006');

insert into truck(id, username, description, target_date, is_done, url_tag)
values(20009, 'joe', 'Mission Taco Truck ', sysdate(), false, '20009');

insert into event(id, username, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30001, 'user', 'Buzz''s Hawaiian Grill','1234 Main Street','St. Louis, MO 63104','03-15-20','11:00am','2:00pm','20001','https://i.imgur.com/FVi7ikp.png');
insert into event(id, username, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30002, 'user', 'Cheese Shack Food Truck','32 Jefferson Ave','St. Louis, MO 63104','03-9-20','12:00pm','3:00pm','20002','https://i.imgur.com/isJ3USj.png');
insert into event(id, username, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30003, 'user', 'Destination  Desserts','245 S. Central Ave','Clayton, MO 63105','03-10-20','12:00pm','3:30pm','20003','https://i.imgur.com/DBUUTsg.png');
insert into event(id, username, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30004, 'user', 'Essentially Fries','1 Industrial Circle','Chesterfield, MO 63345','03-10-20','1:00pm','4:00pm','20004','https://i.imgur.com/pMMcldr.png');
insert into event(id, username, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30005, 'user', 'Go! Gyro! Go!','245 S. Central Ave','Clayton, MO 63105','03-10-20','2:00pm','5:00pm','20005','https://i.imgur.com/cpKFZ9J.png');
insert into event(id, username, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30006, 'user', 'Guerilla Street Food','1234 Main Street','St. Louis, MO 63104','03-11-20','5:00pm','7:30pm','20006','https://i.imgur.com/Lc1sI9Q.png');
insert into event(id, username, truck_name, event_address, event_city, event_date, start_time, end_time, truck_id, img_url) values(30007, 'user', 'K-bop','1234 Main Street','St. Louis, MO 63104','03-11-20','8:00pm','11:00pm','20007','https://i.imgur.com/8n3WUR7.png');

insert into truck_profile(id, truck_name, categories, img_url) values(20001,'Buzz''s Hawaiian Grill','Asian Fusion, Hawaiian, Vegetarian-friendly','https://i.imgur.com/FVi7ikp.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20002,'Cheese Shack Food Truck','Sandwiches, Comfort Food','https://i.imgur.com/isJ3USj.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20003,'Destination  Desserts','Desserts, Cookies, Cupcakes, Coffee','https://i.imgur.com/DBUUTsg.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20004,'Essentially Fries','Fries, Comfort Food','https://i.imgur.com/pMMcldr.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20005,'Go! Gyro! Go!','Greek, Mediterranean, Gyros, Wraps','https://i.imgur.com/cpKFZ9J.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20006,'Guerilla Street Food','Asian Fusion, Filipino, Rice Bowls','https://i.imgur.com/Lc1sI9Q.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20007,'K-bop','Korean, Rice Bowls','https://i.imgur.com/8n3WUR7.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20008,'Locoz Tacos','Mexican, Street Tacos, Burritos, Fries','https://i.imgur.com/xQL7aZl.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20009,'Mission Taco Truck','Mexican, Street Tacos, Vegetarian-friendly','https://i.imgur.com/zoApYXW.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20010,'Savor The Southwest','Mexican, Tex-Mex, Tacos','https://i.imgur.com/UBo00MB.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20011,'Seoul Taco','Asian Fusion, Tacos, Burritos, Rice Bowls','https://i.imgur.com/H6bldXT.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20012,'Slice of the Hill','Italian, Pizza, Salad','https://i.imgur.com/mtRCzn6.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20013,'The Southerner','BBQ, Sandwiches, Fries, Comfort Food','https://i.imgur.com/mbFcgSN.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20014,'Steak Louie','Sandwiches, Cheesesteaks, Fries, Desserts','https://i.imgur.com/6oRMXWU.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20015,'The Sweet Divine','Dessert, Cupcakes','https://i.imgur.com/zUX6Yab.png');
insert into truck_profile(id, truck_name, categories, img_url) values(20016,'Yemanja Brasil Restaurante','Brazilian, Empanadas, Fries, Desserts','https://i.imgur.com/aFOi8vf.png'); 
