-- AlterTable
ALTER TABLE "publicatons" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "published" SET DEFAULT false;
