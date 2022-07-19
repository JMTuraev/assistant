/*
  Warnings:

  - Added the required column `id_u` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `ComingWarehouse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Warehouse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_u` to the `Money` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "passportSeries" TEXT NOT NULL,
    "registeredByWhom" TEXT NOT NULL,
    "dateOfPassport" TEXT NOT NULL,
    "placeOfWork" TEXT NOT NULL,
    "phoneOfWork" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_Client" ("comment", "dateOfPassport", "email", "fatherName", "firstName", "id", "location", "passportSeries", "phone", "phoneOfWork", "placeOfWork", "registeredByWhom", "surName") SELECT "comment", "dateOfPassport", "email", "fatherName", "firstName", "id", "location", "passportSeries", "phone", "phoneOfWork", "placeOfWork", "registeredByWhom", "surName" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");
CREATE UNIQUE INDEX "Client_id_u_key" ON "Client"("id_u");
CREATE UNIQUE INDEX "Client_phoneOfWork_key" ON "Client"("phoneOfWork");
CREATE UNIQUE INDEX "Client_phone_key" ON "Client"("phone");
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lawAddress" TEXT NOT NULL,
    "inn" TEXT NOT NULL,
    "bankAccount" TEXT NOT NULL,
    "mfoBank" TEXT NOT NULL,
    "owner" TEXT NOT NULL
);
INSERT INTO "new_Company" ("bankAccount", "category", "id", "inn", "lawAddress", "location", "mfoBank", "name", "owner") SELECT "bankAccount", "category", "id", "inn", "lawAddress", "location", "mfoBank", "name", "owner" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE UNIQUE INDEX "Company_id_key" ON "Company"("id");
CREATE UNIQUE INDEX "Company_id_u_key" ON "Company"("id_u");
CREATE UNIQUE INDEX "Company_lawAddress_key" ON "Company"("lawAddress");
CREATE UNIQUE INDEX "Company_mfoBank_key" ON "Company"("mfoBank");
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Product" ("category", "id", "model", "name") SELECT "category", "id", "model", "name" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
CREATE UNIQUE INDEX "Product_id_u_key" ON "Product"("id_u");
CREATE TABLE "new_Market" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lawAddress" TEXT NOT NULL,
    "company" TEXT NOT NULL
);
INSERT INTO "new_Market" ("company", "id", "lawAddress", "location", "name") SELECT "company", "id", "lawAddress", "location", "name" FROM "Market";
DROP TABLE "Market";
ALTER TABLE "new_Market" RENAME TO "Market";
CREATE UNIQUE INDEX "Market_id_key" ON "Market"("id");
CREATE UNIQUE INDEX "Market_id_u_key" ON "Market"("id_u");
CREATE UNIQUE INDEX "Market_lawAddress_key" ON "Market"("lawAddress");
CREATE TABLE "new_ComingWarehouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "supplier" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "product" TEXT NOT NULL
);
INSERT INTO "new_ComingWarehouse" ("date", "id", "price", "product", "quantity", "supplier", "unit") SELECT "date", "id", "price", "product", "quantity", "supplier", "unit" FROM "ComingWarehouse";
DROP TABLE "ComingWarehouse";
ALTER TABLE "new_ComingWarehouse" RENAME TO "ComingWarehouse";
CREATE UNIQUE INDEX "ComingWarehouse_id_key" ON "ComingWarehouse"("id");
CREATE UNIQUE INDEX "ComingWarehouse_id_u_key" ON "ComingWarehouse"("id_u");
CREATE TABLE "new_Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("expires", "id", "sessionToken", "userId") SELECT "expires", "id", "sessionToken", "userId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");
CREATE UNIQUE INDEX "Session_id_u_key" ON "Session"("id_u");
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");
CREATE TABLE "new_Supplier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "agentName" TEXT,
    "agentPhone" TEXT
);
INSERT INTO "new_Supplier" ("agentName", "agentPhone", "id", "name") SELECT "agentName", "agentPhone", "id", "name" FROM "Supplier";
DROP TABLE "Supplier";
ALTER TABLE "new_Supplier" RENAME TO "Supplier";
CREATE UNIQUE INDEX "Supplier_id_key" ON "Supplier"("id");
CREATE UNIQUE INDEX "Supplier_id_u_key" ON "Supplier"("id_u");
CREATE TABLE "new_Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Account" ("access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId") SELECT "access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_id_key" ON "Account"("id");
CREATE UNIQUE INDEX "Account_id_u_key" ON "Account"("id_u");
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userLevel" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "fatherName", "firstName", "id", "location", "login", "password", "phone", "surName", "userLevel") SELECT "email", "fatherName", "firstName", "id", "location", "login", "password", "phone", "surName", "userLevel" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_id_u_key" ON "User"("id_u");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
CREATE TABLE "new_Warehouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "editPrice" INTEGER NOT NULL,
    "product" TEXT NOT NULL
);
INSERT INTO "new_Warehouse" ("editPrice", "id", "location", "name", "product", "quantity") SELECT "editPrice", "id", "location", "name", "product", "quantity" FROM "Warehouse";
DROP TABLE "Warehouse";
ALTER TABLE "new_Warehouse" RENAME TO "Warehouse";
CREATE UNIQUE INDEX "Warehouse_id_key" ON "Warehouse"("id");
CREATE UNIQUE INDEX "Warehouse_id_u_key" ON "Warehouse"("id_u");
CREATE TABLE "new_Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL
);
INSERT INTO "new_Role" ("id", "level", "name") SELECT "id", "level", "name" FROM "Role";
DROP TABLE "Role";
ALTER TABLE "new_Role" RENAME TO "Role";
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");
CREATE UNIQUE INDEX "Role_id_u_key" ON "Role"("id_u");
CREATE TABLE "new_Money" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_u" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "typeAmount" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "period" DATETIME,
    "percent" INTEGER,
    "credit" TEXT,
    "client" TEXT NOT NULL
);
INSERT INTO "new_Money" ("amount", "client", "credit", "date", "id", "percent", "period", "typeAmount") SELECT "amount", "client", "credit", "date", "id", "percent", "period", "typeAmount" FROM "Money";
DROP TABLE "Money";
ALTER TABLE "new_Money" RENAME TO "Money";
CREATE UNIQUE INDEX "Money_id_key" ON "Money"("id");
CREATE UNIQUE INDEX "Money_id_u_key" ON "Money"("id_u");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
