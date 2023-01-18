import { MigrationInterface, QueryRunner } from "typeorm";

export class fixApplicationEntity1673984775035 implements MigrationInterface {
    name = 'fixApplicationEntity1673984775035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "application" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "application" ADD "hour" TIME`);
        await queryRunner.query(`ALTER TABLE "application" ADD "date" date`);
    }

}
