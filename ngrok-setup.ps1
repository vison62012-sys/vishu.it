<<<<<<< HEAD
# Script per configurare ngrok con dominio fisso
# Sostituisci YOUR_DOMAIN con il tuo dominio ngrok (es: vishu-dev.ngrok-free.app)

Write-Host "Configurazione Ngrok per URL Fisso" -ForegroundColor Cyan
Write-Host ""

# Verifica se ngrok è configurato
$ngrokConfig = "$env:LOCALAPPDATA\ngrok\ngrok.yml"
if (Test-Path $ngrokConfig) {
    Write-Host "✓ Ngrok è già configurato" -ForegroundColor Green
} else {
    Write-Host "⚠ Ngrok non è ancora configurato" -ForegroundColor Yellow
    Write-Host "Esegui: npx ngrok config add-authtoken TUO_AUTHTOKEN" -ForegroundColor Yellow
    Write-Host ""
}

# Chiedi il dominio
$domain = Read-Host "Inserisci il tuo dominio ngrok (es: vishu-dev.ngrok-free.app) o premi INVIO per URL casuale"

if ($domain) {
    Write-Host ""
    Write-Host "Avvio server con dominio fisso: $domain" -ForegroundColor Green
    Write-Host ""
    concurrently -n "vite,ngrok" -c "cyan,magenta" "npm run dev" "npx ngrok http 3000 --domain=$domain"
} else {
    Write-Host ""
    Write-Host "Avvio server con URL casuale" -ForegroundColor Green
    Write-Host ""
    concurrently -n "vite,ngrok" -c "cyan,magenta" "npm run dev" "npx ngrok http 3000"
}

=======
# Script per configurare ngrok con dominio fisso
# Sostituisci YOUR_DOMAIN con il tuo dominio ngrok (es: vishu-dev.ngrok-free.app)

Write-Host "Configurazione Ngrok per URL Fisso" -ForegroundColor Cyan
Write-Host ""

# Verifica se ngrok è configurato
$ngrokConfig = "$env:LOCALAPPDATA\ngrok\ngrok.yml"
if (Test-Path $ngrokConfig) {
    Write-Host "✓ Ngrok è già configurato" -ForegroundColor Green
} else {
    Write-Host "⚠ Ngrok non è ancora configurato" -ForegroundColor Yellow
    Write-Host "Esegui: npx ngrok config add-authtoken TUO_AUTHTOKEN" -ForegroundColor Yellow
    Write-Host ""
}

# Chiedi il dominio
$domain = Read-Host "Inserisci il tuo dominio ngrok (es: vishu-dev.ngrok-free.app) o premi INVIO per URL casuale"

if ($domain) {
    Write-Host ""
    Write-Host "Avvio server con dominio fisso: $domain" -ForegroundColor Green
    Write-Host ""
    concurrently -n "vite,ngrok" -c "cyan,magenta" "npm run dev" "npx ngrok http 3000 --domain=$domain"
} else {
    Write-Host ""
    Write-Host "Avvio server con URL casuale" -ForegroundColor Green
    Write-Host ""
    concurrently -n "vite,ngrok" -c "cyan,magenta" "npm run dev" "npx ngrok http 3000"
}

>>>>>>> ea2e1221c92f98f22ddb129e7053089b9da0caf4
