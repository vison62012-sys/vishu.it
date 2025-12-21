<<<<<<< HEAD
# Configurazione Cloudflared per URL Fisso (Gratuito)

## Passo 1: Crea Account Cloudflare
1. Vai su https://dash.cloudflare.com/sign-up
2. Crea un account gratuito (non serve carta di credito)

## Passo 2: Accedi a Zero Trust
1. Dalla dashboard Cloudflare, vai su **Zero Trust** (menu laterale)
2. Se è la prima volta, completa la configurazione iniziale (gratuita)

## Passo 3: Crea un Tunnel
1. Vai su **Networks** → **Tunnels**
2. Clicca **"Create a tunnel"**
3. Scegli **"Cloudflared"** come connettore
4. Dai un nome al tunnel (es: `vishu-dev`)
5. Clicca **"Save tunnel"**

## Passo 4: Configura il Tunnel
1. Dopo aver creato il tunnel, vedrai un comando tipo:
   ```
   cloudflared tunnel login
   ```
2. Esegui questo comando nel terminale (apri una nuova finestra)
3. Si aprirà il browser per autorizzare il tunnel

## Passo 5: Crea una Route Pubblica
1. Nella pagina del tunnel, vai su **"Public Hostnames"**
2. Clicca **"Add a public hostname"**
3. Configura:
   - **Subdomain**: `vishu-dev` (o quello che preferisci)
   - **Domain**: Scegli un dominio gratuito Cloudflare (es: `trycloudflare.com` o un tuo dominio)
   - **Service**: `http://localhost:3000`
4. Salva

## Passo 6: Avvia il Tunnel
1. Nella pagina del tunnel, vedrai un comando tipo:
   ```
   cloudflared tunnel run vishu-dev
   ```
2. Oppure usa: `npm run dev:cloudflared:fixed` (dopo aver configurato)

## Risultato
Avrai un URL fisso tipo: `https://vishu-dev.trycloudflare.com` che **non cambia mai**!

=======
# Configurazione Cloudflared per URL Fisso (Gratuito)

## Passo 1: Crea Account Cloudflare
1. Vai su https://dash.cloudflare.com/sign-up
2. Crea un account gratuito (non serve carta di credito)

## Passo 2: Accedi a Zero Trust
1. Dalla dashboard Cloudflare, vai su **Zero Trust** (menu laterale)
2. Se è la prima volta, completa la configurazione iniziale (gratuita)

## Passo 3: Crea un Tunnel
1. Vai su **Networks** → **Tunnels**
2. Clicca **"Create a tunnel"**
3. Scegli **"Cloudflared"** come connettore
4. Dai un nome al tunnel (es: `vishu-dev`)
5. Clicca **"Save tunnel"**

## Passo 4: Configura il Tunnel
1. Dopo aver creato il tunnel, vedrai un comando tipo:
   ```
   cloudflared tunnel login
   ```
2. Esegui questo comando nel terminale (apri una nuova finestra)
3. Si aprirà il browser per autorizzare il tunnel

## Passo 5: Crea una Route Pubblica
1. Nella pagina del tunnel, vai su **"Public Hostnames"**
2. Clicca **"Add a public hostname"**
3. Configura:
   - **Subdomain**: `vishu-dev` (o quello che preferisci)
   - **Domain**: Scegli un dominio gratuito Cloudflare (es: `trycloudflare.com` o un tuo dominio)
   - **Service**: `http://localhost:3000`
4. Salva

## Passo 6: Avvia il Tunnel
1. Nella pagina del tunnel, vedrai un comando tipo:
   ```
   cloudflared tunnel run vishu-dev
   ```
2. Oppure usa: `npm run dev:cloudflared:fixed` (dopo aver configurato)

## Risultato
Avrai un URL fisso tipo: `https://vishu-dev.trycloudflare.com` che **non cambia mai**!

>>>>>>> ea2e1221c92f98f22ddb129e7053089b9da0caf4
