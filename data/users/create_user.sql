/*
 @author: 执念
 @date: 2019-10-12
*/

CREATE TABLE `nashop_users` (
  `uid`         mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `username`    VARCHAR(64)   NOT NULL DEFAULT '',
  `password`    VARCHAR(32)   NOT NULL DEFAULT '',
  `avatar`      VARCHAR(100)  NOT NULL DEFAULT '',
  `nickname`    VARCHAR(255)  NOT NULL DEFAULT '',
  `create_at`   VARCHAR(100)  NOT NULL DEFAULT ''
  PARTIAL KEY(`uid`)
) ENGINE = MyISAM AUTO_INCREMENT=14 DEFAULT CHARACTER=utf8mb4
