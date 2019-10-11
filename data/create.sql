
set character_set_client      = utf8mb4;
set character_set_connection  = utf8mb4;
set character_set_database    = utf8mb4;
set character_set_results     = utf8mb4;
set character_set_server      = utf8mb4;

-- 建表 --
DROP TABLE IF EXISTS workbook;
DROP TABLE IF EXISTS workbooktitle;
CREATE TABLE workbook
(
keyword				VARCHAR(30) NOT NULL			COMMENT '词典关键字',
wordValue			VARCHAR(30) NOT NULL			COMMENT '关键字的值',
wordDisplay		    VARCHAR(100) NOT NULL			COMMENT '关键字显示的中文值',
sortNo				INT DEFAULT 0 NOT NULL			COMMENT '显示顺序',
status				CHAR(1) DEFAULT '0' NOT NULL	COMMENT '字典状态(0=正常, S=失效)',
note				TEXT							COMMENT '备注',
CONSTRAINT PK_wordbook PRIMARY KEY(keyword, wordValue)
);

-- 建表 user --
DROP TABLE IF EXISTS userLogin;
CREATE TABLE userLogin
(
  uid         INT AUTO_INCREMENT      COMMENT '用户编码(自增序列)',
  username    VARCHAR(100) NOT NULL   COMMENt '用户名',
  password    VARCHAR(100) NOT NULL   COMMENT '用户密码',
  salt        VARCHAR(100) NOT NULL   COMMENT '加密盐',
  CONSTRAINT  PK_userLogin_L  PRIMARY KEY(logID)
);
ALTER TABLE userLogin_L COMMENT = '用户登录表';

-- 建表 shop --
-- 关键字均为大写 --
-- date: now --
DROP TABLE IF EXISTS `shop_all`;
CREATE TABLE `shop_all`
(
  `id`          INT AUTO_INCREMENT NOT NULL COMMENT 'ID',
  `title`       VARCHAR(100) NOT NULL COMMENT '标题',
  `subTitle`    VARCHAR(100) NOT NULL COMMENT '副标题',
);