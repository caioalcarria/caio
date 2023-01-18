import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUserPasswordEntity1673814924696 implements MigrationInterface {
    name = 'fixUserPasswordEntity1673814924696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "type" character varying(25) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "type" character varying(50) NOT NULL`);
    }

}
