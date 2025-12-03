# 🌟 MiniWorks – Plataforma de Conexión entre Empleadores Locales y Estudiantes

👩‍💻 Autor: Ariana Sarango

MiniWorks es una plataforma diseñada para conectar a **pequeños empleadores locales** con **estudiantes de la Universidad Nacional de Loja** interesados en trabajos de corta duración. Su objetivo es ofrecer una solución rápida, segura y funcional que facilite oportunidades laborales para los estudiantes y apoye a los empleadores en tareas específicas.

---

## 🚀 Funcionalidades principales
- Registro con selección de rol: **Estudiante** o **Empleador**
- Inicio de sesión seguro con **JWT**
- Gestión de sesiones y permisos por rol
- Dashboards diferentes según el tipo de usuario
- Postulación a trabajos (estudiante)
- Creación y administración de ofertas (empleador)
- Perfil de usuario
- Navegación modular estilo microservicios (auth, users, jobs)

---

# 🎨 Prototipo en Stitch

Se desarrollaron **8 pantallas** con navegación simulada y estructura visual clara.

### Pantallas del flujo
1. **Bienvenida / Login**
2. **Registro – Selección de Rol**
3. **Registro – Formulario**
4. **Dashboard Estudiante**
5. **Dashboard Empleador**
6. **Detalles de Trabajo + Postulación**
7. **Crear / Editar Oferta**
8. **Perfil de Usuario**

Las pantallas incluyen:
- Header, menú, contenido y footer
- Botones, formularios, listas y tarjetas
- Jerarquía visual organizada
- Navegación enlazada en Stitch

---

# 📌 Flujo funcional del proyecto

El flujo elegido fue el **registro y uso inicial del sistema**.  
El usuario entra a la pantalla de bienvenida, inicia sesión o se registra, escoge si es estudiante o empleador y completa sus datos. Al ingresar, llega a su panel correspondiente: el estudiante puede ver y postular a trabajos, mientras que el empleador puede crear y administrar ofertas. Desde cualquier panel puede acceder a su perfil. Este flujo representa la experiencia inicial real dentro de MiniWorks.

---

# 🧩 Arquitectura y Seguridad

Modularidad tipo microservicios:
- **auth** → registro, login, JWT
- **users** → datos y roles de usuario
- **jobs** → ofertas y postulaciones

Medidas implementadas:
- JWT para autenticación sin estado
- CORS configurado por dominios
- Prácticas OWASP Top 10 (2021)
- Validación de datos y control de permisos

---

# 💻 Ejecutar el proyecto localmente

### Prerequisitos
- Node.js

### Pasos
```bash
npm install
```
### Crear .env.local con:
    GEMINI_API_KEY=tu_key_aquí

### Ejecutar
    npm run dev

### Ver en AI Studio

    https://ai.studio/apps/drive/1R8BDV-lept8jaudd71_b8G40c5xuM7ao
