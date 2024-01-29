import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1705286351794 implements MigrationInterface {
  name = 'User1705286351794';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'ID', \`familyname\` varchar(255) NOT NULL COMMENT '姓' DEFAULT '', \`firstname\` varchar(255) NOT NULL COMMENT '名' DEFAULT '', \`familynameKana\` varchar(255) NOT NULL COMMENT '姓かな' DEFAULT '', \`firstnameKana\` varchar(255) NOT NULL COMMENT '名かな' DEFAULT '', \`email\` varchar(255) NOT NULL COMMENT 'メールアドレス' DEFAULT '', \`password\` varchar(255) NOT NULL COMMENT 'パスワード' DEFAULT '', \`createdAt\` datetime(6) NOT NULL COMMENT '作成日時' DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL COMMENT '更新日時' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL COMMENT '削除日時', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
