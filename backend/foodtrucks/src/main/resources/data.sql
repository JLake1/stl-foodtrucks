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

insert into event(id, truck_name, event_address, event_time, event_date)
values(10007, 'Joes Tacos', '1234 Main street', sysdate(), sysdate());


insert into directory(id, truck_name, categories)
values(20001, 'Joe''s Tacos', 'Mexican, Tacos');

insert into directory(id, truck_name, categories)
values(20002, 'Sandwich World', 'Sandwiches');