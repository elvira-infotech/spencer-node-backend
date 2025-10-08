-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "dropboxPath" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "wasShown" BOOLEAN NOT NULL DEFAULT false,
    "isTodaysPick" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_dropboxPath_key" ON "Image"("dropboxPath");
