-- CreateTable
CREATE TABLE "MarketTrend" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "averagePrice" DECIMAL(12,2) NOT NULL,
    "yearlyAppreciation" DOUBLE PRECISION NOT NULL,
    "rentalYield" DOUBLE PRECISION NOT NULL,
    "demandIndex" DOUBLE PRECISION NOT NULL,
    "supplyIndex" DOUBLE PRECISION NOT NULL,
    "vacancyRate" DOUBLE PRECISION NOT NULL,
    "averageRent" DECIMAL(12,2) NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MarketTrend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskAnalysis" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "legalVerified" BOOLEAN NOT NULL,
    "builderScore" DOUBLE PRECISION NOT NULL,
    "floodRisk" DOUBLE PRECISION NOT NULL,
    "crimeScore" DOUBLE PRECISION NOT NULL,
    "pollutionScore" DOUBLE PRECISION NOT NULL,
    "resaleScore" DOUBLE PRECISION NOT NULL,
    "liquidityScore" DOUBLE PRECISION NOT NULL,
    "marketRisk" DOUBLE PRECISION NOT NULL,
    "overallRisk" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RiskAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyScore" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "investmentScore" DOUBLE PRECISION NOT NULL,
    "rentalScore" DOUBLE PRECISION NOT NULL,
    "familyScore" DOUBLE PRECISION NOT NULL,
    "studentScore" DOUBLE PRECISION NOT NULL,
    "luxuryScore" DOUBLE PRECISION NOT NULL,
    "futureGrowthScore" DOUBLE PRECISION NOT NULL,
    "aiScore" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PropertyScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RiskAnalysis_propertyId_key" ON "RiskAnalysis"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyScore_propertyId_key" ON "PropertyScore"("propertyId");

-- AddForeignKey
ALTER TABLE "RiskAnalysis" ADD CONSTRAINT "RiskAnalysis_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyScore" ADD CONSTRAINT "PropertyScore_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
