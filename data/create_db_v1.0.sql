
set character_set_client      = utf8mb4;
set character_set_connection  = utf8mb4;
set character_set_database    = utf8mb4;
set character_set_results     = utf8mb4;
set character_set_server      = utf8mb4;

-- ---------------------
-- 建表 
-- 用户表 小程序
-- date: 2019-10-12 
-- ---------------------

DROP TABLE IF EXISTS `wx_users`;
CREATE TABLE `wx_users`
(
  `uid`    INT AUTO_INCREMENT   COMMENT   '用户(id)',
  `username`    VARCHAR(30)   NOT NULL    COMMENT   '用户名',
  `avatar`      VARCHAR(100)    COMMENT   '头像',
  `nickname`    VARCHAR(30)   COMMENT   '用户昵称',
  `password`    VARCHAR(100)    NOT  NULL   COMMENT   '用户密码',
  `create_at`    DATETIME  DEFAULT   NOW()   COMMENT    '建表时间',
  `update_at`    DATETIME  DEFAULT   NOW()   COMMENT   '最后修改时间',
  `login_num`    INT  DEFAULT 0  NOT NULL  COMMENT   '登录次数',
  `last_login_time`   DATETIME    COMMENT   '最后登录时间',
  CONSTRAINT  PK_wx_users  PRIMARY KEY(`uid`)
);
ALTER TABLE `wx_users` COMMENT = '微信小程序用户表';


-- -------------------------
-- 建表 小程序信息表
-- 首页轮播
-- date: 2019-10-12
-- -------------------------
DROP TABLE IF EXISTS banners;
CREATE TABLE banners
(
  id    INT   AUTO_INCREMENT    COMMENT   '每个的id，标明唯一序列',
  name    VARCHAR(30)   NOT NULL  COMMENT   '每个的名称',
  avatarURL   VARCHAR(100)  NOT NULL  COMMENT   '图像URL地址',
  CONSTRAINT  PK_banners  PRIMARY KEY(id)
);
ALTER TABLE banners COMMENT = '首页轮播';


-- ------------------------
-- 建表 小程序
-- 商品表(order)
-- date: 2019-10-12
-- ------------------------
DROP TABLE IF EXISTS orders;
CREATE TABLE orders
(
  id    INT   AUTO_INCREMENT    COMMENT   '每个商品唯一指定id标识',
  orderName   VARCHAR(100)    NOT NULL    COMMENT   '商品名称',
  price   INT  DEFAULT 0 NOT NULL   COMMENT   '商品价格',
  orderAvatar   VARCHAR(100)   NOT NULL   COMMENT   '商品图像',
  oederDesc    VARCHAR(255)    NOT NULL  COMMENT   '商品描述信息',
  CONSTRAINT PK_orders  PRIMARY KEY(id)
);
ALTER TABLE orders COMMENT = '商品详情表';

-- ---------------------------
-- PC 后端管理系统 --
-- 建表 用户
-- date: 2019-10-12
-- ---------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`
(
  `uid`   INT   AUTO_INCREMENT    COMMENT   '用户标识uid',
  `role`  CHAR(1) DEFAULT '0' NOT NULL    COMMENT   '标识用户权限位',
  `username`    VARCHAR(30)   NOT NULL    COMMENT   '用户名',
  `password`    VARCHAR(100)  NOT NULL    COMMENT   '用户密码',
  `avatar`    VARCHAR(100)    NOT NULL    COMMENT   '用户头像',
  `create_at`   DATETIME  DEFAULT   NOW()   COMMENT   '创建用户时间',
  `update_at`   DATETIME  DEFAULT   NOW()   COMMENT   '用户更新时间',
  `login_num`    INT  DEFAULT 0  NOT NULL  COMMENT   '登录次数',
  `last_login_time`   DATETIME    COMMENT   '最后登录时间',
  CONSTRAINT PK_user  PRIMARY KEY(`uid`)
);
ALTER TABLE user COMMENT = 'pc用户表';

-- --------------------------
-- 建表 table
-- date: 2019-10-12
-- --------------------------

DROP TABLE IF EXISTS `tables`;
CREATE TABLE `tables`
(
  `id`   INT AUTO_INCREMENT    COMMENT    '每个table的唯一标识',
  `table_name`   VARCHAR(30)   NOT NULL   COMMENT  'table名称',
  `icon`    VARCHAR(30)   NOT NULL    COMMENT   'table的icon图像',
  CONSTRAINT PK_tables  PRIMARY KEY(`id`)
);
ALTER TABLE tables COMMENT = 'pc侧边栏table';


-- ----------------------
-- 建表 
-- date: 2019-10-12
-- ----------------------
