# Fugle · På opdagelse

Mobilvenlig hjemmeside med React, Vinext og Cloudflare Workers. Kameraet tager nye fotos via getUserMedia; canvas eksporterer JPEG uden original EXIF. Ingen GPS indsamles.

Installer via Sites `install-dependencies.mjs`, kør `npm run dev`. Kamera kræver HTTPS eller localhost; på iPhone bruges den hostede HTTPS-adresse. D1-binding: DB. R2-binding: BUCKET. Generer schemaændringer med `npm run db:generate`, byg med Sites `build-site.mjs`, anvend lokale migrationer før servertest.

Fuglebog og fotos gemmes privat med ChatGPT-brugeridentitet. Ranglisten tæller forskellige latinske arter, uanset antal billeder. Usikre billeder gemmes uden point. Profilnavn og godkendte fotos deles kun efter aktivt tilvalg. Ny Site er owner-private; deltagelse af andre kræver senere åbning af adgang.

Indstil OPENAI_API_KEY som hemmelighed via Sites miljøværktøjer. Valgfrit OPENAI_MODEL, standard gpt-4.1-mini. Uden nøgle viser appen manglende AI-forbindelse og tilbyder separat demo, som ikke påvirker rigtige fund eller point.

AI bruger Responses API, billedeinput og struktureret JSON. Dokumentation: https://developers.openai.com/api/docs/guides/images-vision og https://developers.openai.com/api/docs/guides/structured-outputs . Artsbestemmelse kan tage fejl; modellens confidence er ikke kalibreret. Før en offentlig konkurrence skal tærsklen evalueres på fuglefotos og artsnavne normaliseres mod en verificeret taksonomi. Snydekontrol med AI kan ikke bevise, at fuglen er fotograferet på stedet. 20 AI-forsøg pr. bruger/time, 200 samlet/døgn.

Før offentlig lancering: moderation/anmeldelser, opbevaringspolitik, verificeret taksonomi og udgiftsstyring. Ingen offentlig lancering er foretaget.

Rødhalsfoto: Pixabay / CC0 via https://utopia.de/ratgeber/rotkehlchen-alles-zum-beliebten-heimischen-vogel_261205/ .
