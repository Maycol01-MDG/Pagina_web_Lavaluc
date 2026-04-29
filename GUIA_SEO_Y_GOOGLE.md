# 🎯 GUÍA COMPLETA: POSICIONAR LAVALUC EN GOOGLE

## 📍 Resumen de lo hecho (Parte Técnica)

Tu aplicación web ya tiene:
- ✅ **Meta tags optimizados** con palabras clave: "lavandería lima", "san luis", "recojo domicilio"
- ✅ **Structured Data (JSON-LD)** que describe tu negocio a Google
- ✅ **H1 estratégico** con ubicación y palabras clave
- ✅ **Open Graph tags** para redes sociales
- ✅ **Responsive design** (funciona perfecto en celulares)
- ✅ **URL canonical** para evitar contenido duplicado

---

## 🚀 PASOS A HACER EN GOOGLE (CRÍTICO)

### **PASO 1: Crear Google Business Profile** 

Este es el paso **MÁS IMPORTANTE**. Cuando alguien busca "lavandería cerca", Google muestra el mapa PRIMERO.

**Cómo hacerlo:**

1. Ve a: https://business.google.com/
2. Haz clic en "Empezar" → Inicia sesión con tu cuenta de Google
3. **Nombre del negocio:**
   ```
   Lavaluc - Lavandería Profesional en San Luis
   ```
   (NO solo "Lavaluc", Google prioriza cuando el nombre incluye ubicación + categoría)

4. **Categoría:** Selecciona "Lavandería"

5. **Ubicación:**
   - Dirección: Av. Canadá 3656, San Luis, Lima
   - Si solo haces delivery a domicilio, marca: "No tengo ubicación física" 
   - Luego selecciona "Área de servicio": Lima, San Luis

6. **Teléfono:** +51913474275

7. **Sitio web:** https://lavanderia-lavaluc.netlify.app/

8. **Descripción (150 caracteres):**
   ```
   Lavandería profesional con 16 servicios. Lavado al kilo desde S/ 4, 
   al seco, planchado y recojo a domicilio en San Luis y Lima.
   ```

9. **Horario de atención:**
   - Lunes a Viernes: 8:00 AM - 6:00 PM
   - Sábado: 9:00 AM - 5:00 PM
   - Domingo: Cerrado

10. Verifica tu negocio (Google te enviará un código por correo o te llamará)

✨ **Beneficio:** Aparecerás en el mapa de Google Maps cuando alguien busque "lavandería cerca"

---

### **PASO 2: Verificar en Google Search Console**

Google Search Console es donde le **pides permiso a Google para indexar tu sitio**.

**Cómo hacerlo:**

1. Ve a: https://search.google.com/search-console/
2. Haz clic en "Empezar" → Inicia sesión
3. Elige **"URL de propiedad"** (no dominio completo)
4. Pega tu URL: `https://lavanderia-lavaluc.netlify.app/`
5. Google te pidió verificar propiedad. Hay 2 formas:

   **Opción A (HTML):**
   - Google te da un `<meta>` tag
   - Copia el tag
   - Ve a tu `index.html` y pégalo en el `<head>` (dentro de nuestro `<head>` mejorado)
   - Guarda el archivo y haz push a GitHub

   **Opción B (Netlify):**
   - Ve a tu panel de Netlify
   - Configuración → Dominios → DNS
   - Agrega el registro DNS que Google te proporciona
   - Espera a que se propague (5-10 min)

6. Haz clic en "Verificar"

**Una vez verificado:**

1. En el menú izquierdo, ve a **"Inspección de URLs"**
2. Pega tu URL: `https://lavanderia-lavaluc.netlify.app/`
3. Haz clic en **"Solicitar indexación"**

✨ **Beneficio:** Google irá a tu sitio AHORA (no esperará semanas)

---

### **PASO 3: Crear Sitemap (Opcional pero recomendado)**

Un sitemap ayuda a Google a navegar mejor tu sitio.

**Opción simple:** Si tu página es estática (como la tuya), crea un archivo `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lavanderia-lavaluc.netlify.app/</loc>
    <lastmod>2026-04-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lavanderia-lavaluc.netlify.app/#servicios</loc>
    <lastmod>2026-04-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lavanderia-lavaluc.netlify.app/#precios</loc>
    <lastmod>2026-04-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lavanderia-lavaluc.netlify.app/#contacto</loc>
    <lastmod>2026-04-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

**Pasos:**

1. Crea un archivo `sitemap.xml` en la raíz de tu proyecto
2. Pega el contenido arriba
3. Haz push a GitHub (Netlify lo desplegará automáticamente)
4. En Google Search Console:
   - Ve a "Sitemaps" en el menú izquierdo
   - Escribe: `sitemap.xml`
   - Haz clic en "Enviar"

✨ **Beneficio:** Google tendrá un mapa de todas tus páginas

---

### **PASO 4: Pedir Reseñas (El Factor MÁS Importante)**

Google prioriza negocios con muchas reseñas de 5 ⭐.

**Qué hacer:**

1. Cuando entregas un servicio, pídele al cliente:
   ```
   "¡Gracias por usar Lavaluc! ¿Nos das una reseña en Google? 
   Enlace: business.google.com/u/0/preview/list"
   ```

2. O comparte el link de tu Google Business Profile directo
   (una vez que lo verifica, Google te da el link exacto)

3. **Meta realista:**
   - Primeras 10-20 reseñas = 2-3 meses
   - Con 30+ reseñas de 4.5+ estrellas → Posición TOP 3 en búsquedas locales

✨ **Beneficio:** Más reseñas = Más visibilidad = Más clientes

---

## 📊 CÓMO GOOGLE TE PRIORIZA

```
Búsqueda en Google: "lavandería cerca" (desde San Luis)

1. MAPA (Google My Business) ← TÚ AQUÍ después de verificar
   - Lavaluc - Av. Canadá 3656
   - ⭐⭐⭐⭐⭐ (120 reseñas)
   
2. RESEÑAS Y ANUNCIOS

3. RESULTADOS WEB
   - lavanderia-lavaluc.netlify.app/ (por SEO técnico)
```

---

## 🔄 CRONOGRAMA ESPERADO

| Tiempo | Qué pasa | Acción |
|--------|----------|--------|
| **Hoy** | Creas Google Business Profile | Verifica tu negocio |
| **Mañana-2 días** | Google te contacta para verificar | Responde |
| **Semana 1** | Apareces en Google Maps | Empieza a pedir reseñas |
| **Mes 1** | Posición media en búsquedas | Sigue pidiendo reseñas |
| **Mes 2-3** | Posición TOP 3 (si tienes 20+ reseñas) | Mantén el engagement |

---

## ✅ CHECKLIST FINAL

- [ ] Google Business Profile creado y verificado
- [ ] URL de Netlify ingresada en Google Business
- [ ] Google Search Console configurado
- [ ] Sitemap enviado a Google Search Console
- [ ] Al menos 5 clientes han dejado reseña
- [ ] Testeaste en celular que todo carga rápido
- [ ] Compartiste tu perfil de Google Business con clientes

---

## 🎁 BONUS: Consejos para Aparecer en el TOP

1. **Responde cada reseña** (aunque sea un "Gracias" simple)
2. **Actualiza horarios** si cambian
3. **Agrega fotos** de tus servicios a Google Business Profile
4. **Publica posts** en tu Google Business (como noticias)
5. **Enlaza tu sitio web** desde redes sociales (Facebook, Instagram)
6. **Keyword strategy:** Usa palabras como:
   - "lavandería san luis"
   - "lavado al seco lima"
   - "recojo de ropa a domicilio"
   - "planchado profesional"

---

## 📞 SOPORTE RÁPIDO

Si algo no funciona:

- **Google Business no aparece:** Verifica que confirmaste el correo/llamada de Google
- **Search Console dice "URL no indexada":** Haz clic en "Solicitar indexación" de nuevo
- **Sitio no carga en celular:** Abre en navegador móvil y ve a https://lavanderia-lavaluc.netlify.app/
- **Palabra clave no aparece en posición 1:** Espera 3-4 semanas y consigue 20+ reseñas en Google Business

---

**¡Éxito! En 3-4 meses podrías estar en los primeros resultados.** 🚀
