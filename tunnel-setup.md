# Configurazione Tunnel per URL Fisso

## Opzione 1: Cloudflared (Gratuito, URL stabile per sessione)

Il comando `npm run dev:fixed` avvia cloudflared che genera un URL stabile durante la sessione.

## Opzione 2: Cloudflared con Account (URL completamente fisso)

1. Crea un account gratuito su https://dash.cloudflare.com/
2. Installa cloudflared: `npm install -g cloudflared` (o usa npx)
3. Esegui: `cloudflared tunnel login`
4. Crea un tunnel: `cloudflared tunnel create vishu-dev`
5. Configura il tunnel con il file `cloudflared-config.yml`
6. Avvia: `cloudflared tunnel run vishu-dev`

## Opzione 3: Ngrok (URL casuale, stabile per sessione)

1. ✅ Account creato su https://ngrok.com/
2. ✅ Authtoken configurato
3. **Per URL casuale** (stabile durante la sessione): `npm run dev:ngrok`
   - ⚠️ L'URL cambia ogni volta che riavvii ngrok
   - ⚠️ Per URL fisso serve abbonamento a pagamento

## Opzione 4: Cloudflared con Account Cloudflare (URL FISSO GRATUITO) ⭐ MIGLIORE

Cloudflare offre domini personalizzati gratuiti per tunnel!

1. Crea un account gratuito su https://dash.cloudflare.com/
2. Vai su Zero Trust → Networks → Tunnels
3. Clicca "Create a tunnel"
4. Scegli "Cloudflared" come connettore
5. Dai un nome al tunnel (es: `vishu-dev`)
6. Copia il comando di login mostrato (es: `cloudflared tunnel login`)
7. Esegui il comando nel terminale
8. Crea una route pubblica con un hostname personalizzato (es: `vishu-dev.your-domain.com` o usa un dominio Cloudflare)

