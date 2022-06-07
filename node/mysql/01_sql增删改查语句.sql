-- 以下操作需在连接了数据库使用

-- 查询users表下的所有列
-- select * from users

-- 查询users下的username数据和password数据
-- select username, password from users

-- 向user表插入数据
-- insert into users (username, password) values ('admin', '123456')
-- select * from users

-- 把id为2的密码更新为zhouxuhui
-- update users set password='zhouxuhui' where id=2
-- select * from users

-- 更新多个列
-- update users set password="hahaha", status=1 where id=2
-- select * from users

-- 删除id为3的
-- delete from users where id=3 
-- SELECT * FROM users
