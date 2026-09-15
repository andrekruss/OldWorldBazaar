# ===========================
# Build
# ===========================
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

COPY OldWorldBazaarAPI.sln ./
COPY OldWorldBazaarAPI/*.csproj OldWorldBazaarAPI/

RUN dotnet restore OldWorldBazaarAPI/OldWorldBazaarAPI.csproj

COPY . .

RUN dotnet publish OldWorldBazaarAPI/OldWorldBazaarAPI.csproj \
    -c Release \
    -o /app/publish \
    --no-restore

# ===========================
# Runtime
# ===========================
FROM mcr.microsoft.com/dotnet/aspnet:9.0

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 5194

ENTRYPOINT ["dotnet", "OldWorldBazaarAPI.dll"]